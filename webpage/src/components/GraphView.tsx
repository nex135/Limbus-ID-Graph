import { useState, useEffect } from 'react';
import { Box, Paper, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Scale,
} from 'chart.js';
import { loadSinnerData, type Sinner } from '../services/dataService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      type: 'linear',
      beginAtZero: true,
      max: 1.0,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
        callback: function(this: Scale, tickValue: string | number) {
          const value = typeof tickValue === 'string' ? parseFloat(tickValue) : tickValue;
          return `${(value * 100).toFixed(0)}%`;
        },
      },
    },
    x: {
      type: 'linear',
      min: 0,
      max: 44,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
        stepSize: 2,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  },
};

interface GraphViewProps {
  selectedCharacter: string | null;
}

const generateBreakpoints = (skill: any, variant: number) => {
  const stats = skill.stats;
  

  
  let bonuses = [0, 0, 0, 0];
  
  if (variant === 0 && skill.weak_bonuses) { // adverse
    bonuses = skill.weak_bonuses;
  } else if (variant === 2 && skill.prime_bonuses) { // prime
    bonuses = skill.prime_bonuses;
  }

  const base_power = stats[0] + bonuses[0];
  const coin_power = stats[1] + bonuses[1];
  const coin_count = stats[2] + bonuses[2];
  const offense = stats[3] + bonuses[3];
  let effective_base_power = base_power + offense / 3;

  const breakpoints = [0];
  for (let i = 0; i <= coin_count; i++) {
    breakpoints.push(effective_base_power + i * coin_power);
  }
  return breakpoints;
};

const generateChances = (skill: any, variant: number) => {
  
  const sanityLevels = [0.05, 0.275, 0.5, 0.725, 0.95];
  const chances = [];

  // First row is all 1s if effective_base_power > 0, else all 0s
  let bonuses = [0, 0, 0, 0];
  
  if (variant === 0 && skill.weak_bonuses) {
    bonuses = skill.weak_bonuses;
  } else if (variant === 2 && skill.prime_bonuses) {
    bonuses = skill.prime_bonuses;
  }
  const stats = skill.stats.map((stat: number, index: number) => stat + bonuses[index]);
  const coin_count = stats[2];

  // Generate chances for each coin count
  for (let i = 0; i <= coin_count; i++) {
    const rowChances = sanityLevels.map(sanity => {
      if (skill.coin_type === 'minus') {
        return evalChanceMinus(coin_count, sanity, i);
      } else {
        return evalChance(coin_count, sanity, i);
      }
    });
    chances.push(rowChances);
  }

  return chances;
};

const evalChance = (coin_count: number, heads_chance: number, required_heads: number): number => {
  if (required_heads <= 0) return 1;
  let chance = 0;
  let coins_remaining = coin_count;
  
  while (coins_remaining >= required_heads) {
    const k = coins_remaining - required_heads;
    chance += (1 - chance) * binomialCDF(k, coins_remaining, 1 - heads_chance);
    coins_remaining -= 1;
  }
  return chance;
};

const evalChanceMinus = (coin_count: number, heads_chance: number, required_heads: number): number => {
  if (required_heads < coin_count) return 1;
  let final_chance = 0;
  let coins_remaining = coin_count;
  
  while (coins_remaining > 0) {
    const chance = Math.pow(heads_chance, coins_remaining);
    const temp = 1 - final_chance;
    final_chance += chance * temp;
    coins_remaining -= 1;
  }
  return final_chance;
};

const binomialCDF = (k: number, n: number, p: number): number => {
  let sum = 0;
  for (let i = 0; i <= k; i++) {
    sum += binomialPMF(i, n, p);
  }
  return sum;
};

const binomialPMF = (k: number, n: number, p: number): number => {
  return combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
};

const combination = (n: number, k: number): number => {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;
  return factorial(n) / (factorial(k) * factorial(n - k));
};

const factorial = (n: number): number => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const GraphView = ({ selectedCharacter }: GraphViewProps) => {
  const [variant, setVariant] = useState<'adverse' | 'expected' | 'prime'>('expected');
  const [sinnerData, setSinnerData] = useState<Sinner | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (selectedCharacter) {
      console.log(`[GraphView] Loading data for character: ${selectedCharacter}`);
      loadSinnerData(selectedCharacter)
        .then(data => {
          console.log(`[GraphView] Successfully loaded data:`, data);
          setSinnerData(data);
          setError(null);
          
          try {
            // Generate chart data for each skill
            const skillCharts = data.skills.map((skill: any, index: number) => {
              console.log(`[GraphView] Generating chart data for skill ${index}:`, skill);
              
              const variantIndex = variant === 'adverse' ? 0 : variant === 'expected' ? 1 : 2;
              
              // Skip this skill if it doesn't have the selected variant's bonuses
              if ((variant === 'adverse' && !skill.weak_bonuses) || 
                  (variant === 'prime' && !skill.prime_bonuses)) {
                return null;
              }
              
              const breakpoints = generateBreakpoints(skill, variantIndex);
              console.log(`[GraphView] Generated breakpoints:`, breakpoints);
              
              const chances = generateChances(skill, variantIndex);
              console.log(`[GraphView] Generated chances:`, chances);
              
              const colors = skill.coin_type === 'minus' 
                ? ['#00ffff', '#95d8ff', '#c6aeff', '#e77aff', '#ff00ff']
                : ['#ff00ff', '#e77aff', '#c6aeff', '#95d8ff', '#00ffff'];

              // Transpose the chances array to get datasets
              const datasets = chances[0].map((_, i) => {
                const data = chances.map(row => row[i]);
                data.push(data[data.length - 1]);
                return {
                  label: `SP ${(i * 0.225 + 0.05).toFixed(3)}`,
                  data: data,
                  borderColor: colors[i],
                  backgroundColor: colors[i],
                  pointRadius: 0,
                  tension: 0,
                  stepped: true,
                };
              });

              return {
                labels: breakpoints,
                datasets: datasets,
                skillIndex: index,
              };
            }).filter(chart => chart !== null);
            
            console.log(`[GraphView] Final chart data:`, skillCharts);
            setChartData(skillCharts);
          } catch (error: any) {
            console.error(`[GraphView] Error generating chart data:`, error);
            setError(`Error generating chart data: ${error?.message || 'Unknown error'}`);
            setChartData([]);
          }
        })
        .catch(error => {
          console.error(`[GraphView] Error loading character data:`, error);
          setError(`Error loading character data: ${error?.message || 'Unknown error'}`);
          setSinnerData(null);
          setChartData([]);
        });
    } else {
      setSinnerData(null);
      setError(null);
      setChartData([]);
    }
  }, [selectedCharacter, variant]);

  const handleVariantChange = (
    event: React.MouseEvent<HTMLElement>,
    newVariant: 'adverse' | 'expected' | 'prime' | null
  ) => {
    if (newVariant) {
      setVariant(newVariant);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="h1">
          {selectedCharacter ? `${selectedCharacter} (${variant} state)` : 'Select a character'}
        </Typography>
        <ToggleButtonGroup
          value={variant}
          exclusive
          onChange={handleVariantChange}
          aria-label="variant"
        >
          <ToggleButton 
            value="adverse" 
            aria-label="adverse"
            disabled={!sinnerData?.skills.some(skill => skill.weak_bonuses)}
          >
            Adverse
          </ToggleButton>
          <ToggleButton value="expected" aria-label="expected">
            Expected
          </ToggleButton>
          <ToggleButton 
            value="prime" 
            aria-label="prime"
            disabled={!sinnerData?.skills.some(skill => skill.prime_bonuses)}
          >
            Prime
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {error && (
        <Paper sx={{ p: 2, bgcolor: 'error.dark' }}>
          <Typography color="error.contrastText">{error}</Typography>
        </Paper>
      )}

      {chartData.map((data) => (
        <Paper
          key={data.skillIndex}
          sx={{
            p: 2,
            height: '300px',
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {sinnerData?.skills[data.skillIndex].name.replace(/_/g, ' ').split(' ').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </Typography>
          <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Line data={data} options={chartOptions} />
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default GraphView; 