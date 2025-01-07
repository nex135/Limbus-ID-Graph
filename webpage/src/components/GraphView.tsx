import { useState, useEffect } from 'react';
import { Box, Paper, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { loadSinnerData, generateChartData, type Sinner } from '../services/dataService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: {
    legend: {
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

const GraphView = ({ selectedCharacter }: GraphViewProps) => {
  const [variant, setVariant] = useState<'adverse' | 'expected' | 'prime'>('expected');
  const [sinnerData, setSinnerData] = useState<Sinner | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCharacter) {
      loadSinnerData(selectedCharacter.toLowerCase().replace(' ', '_'))
        .then(data => {
          setSinnerData(data);
          setError(null);
        })
        .catch(err => {
          setError('Error loading character data');
          setSinnerData(null);
        });
    } else {
      setSinnerData(null);
      setError(null);
    }
  }, [selectedCharacter]);

  const handleVariantChange = (
    event: React.MouseEvent<HTMLElement>,
    newVariant: 'adverse' | 'expected' | 'prime' | null
  ) => {
    if (newVariant) {
      setVariant(newVariant);
    }
  };

  const chartData = sinnerData ? generateChartData(sinnerData, variant) : null;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 240px)` },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {selectedCharacter && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <ToggleButtonGroup
            value={variant}
            exclusive
            onChange={handleVariantChange}
            aria-label="variant selection"
            sx={{
              '& .MuiToggleButton-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
            }}
          >
            <ToggleButton 
              value="adverse" 
              aria-label="adverse"
              disabled={!!(sinnerData && !sinnerData.has_weak)}
            >
              Adverse
            </ToggleButton>
            <ToggleButton value="expected" aria-label="expected">
              Expected
            </ToggleButton>
            <ToggleButton 
              value="prime" 
              aria-label="prime"
              disabled={!!(sinnerData && !sinnerData.has_prime)}
            >
              Prime
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      )}
      
      <Paper
        sx={{
          flexGrow: 1,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper',
          overflow: 'hidden',
        }}
      >
        {error ? (
          <Typography color="error">{error}</Typography>
        ) : selectedCharacter && chartData ? (
          <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <Bar options={chartOptions} data={chartData} />
          </Box>
        ) : (
          <Typography variant="h5" sx={{ color: 'text.secondary' }}>
            Select a character to view their statistics
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default GraphView; 