import yaml from 'js-yaml';

export interface Skill {
  name: string;
  score_matrix: number[][];
  rank_matrix: number[][];
}

export interface Sinner {
  name: string;
  skills: Skill[];
  has_weak: boolean;
  has_prime: boolean;
  elite_bias_score_matrix: number[][];
  elite_bias_rank_matrix: number[][];
  full_deck_score_matrix: number[][];
  full_deck_rank_matrix: number[][];
  competitor_count: number;
}

export const loadSinnerData = async (name: string): Promise<Sinner> => {
  try {
    const response = await fetch(`/sinners_ut4/${name}.yml`);
    const text = await response.text();
    const data = yaml.load(text) as Sinner;
    return data;
  } catch (error) {
    console.error('Error loading sinner data:', error);
    throw error;
  }
};

export const generateChartData = (sinner: Sinner, variant: 'adverse' | 'expected' | 'prime') => {
  const variantIndex = variant === 'adverse' ? 0 : variant === 'expected' ? 1 : 2;
  
  if ((variant === 'adverse' && !sinner.has_weak) || (variant === 'prime' && !sinner.has_prime)) {
    return null;
  }

  const eliteBiasData = {
    clash_worst_sp: sinner.elite_bias_score_matrix[variantIndex][0],
    clash_ideal_sp: sinner.elite_bias_score_matrix[variantIndex][1],
    damage_worst_sp: sinner.elite_bias_score_matrix[variantIndex][2],
    damage_ideal_sp: sinner.elite_bias_score_matrix[variantIndex][3],
  };

  const fullDeckData = {
    clash_worst_sp: sinner.full_deck_score_matrix[variantIndex][0],
    clash_ideal_sp: sinner.full_deck_score_matrix[variantIndex][1],
    damage_worst_sp: sinner.full_deck_score_matrix[variantIndex][2],
    damage_ideal_sp: sinner.full_deck_score_matrix[variantIndex][3],
  };

  return {
    labels: ['Clash (Worst SP)', 'Clash (Ideal SP)', 'Damage (Worst SP)', 'Damage (Ideal SP)'],
    datasets: [
      {
        label: 'Elite Bias',
        data: Object.values(eliteBiasData),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Full Deck',
        data: Object.values(fullDeckData),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
}; 