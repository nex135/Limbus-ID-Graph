import { sinnerData, type Skill, type Sinner, type SinnerData } from '../data/sinnerData';

export type { Skill, Sinner };

// List of all available character files
const characterFiles = Object.keys(sinnerData);

export const getAvailableCharacters = () => {
  return characterFiles.map(file => ({
    id: file,
    displayName: file.replace(/_/g, ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

export const loadSinnerData = async (characterId: string): Promise<Sinner> => {
  console.log(`[loadSinnerData] Loading data for sinner: ${characterId}`);
  
  const data = sinnerData[characterId];
  if (!data) {
    throw new Error(`No data found for character: ${characterId}`);
  }

  console.log(`[loadSinnerData] Successfully loaded data:`, data);
  return data;
};

export const generateChartData = (sinner: Sinner | null, variant: 'adverse' | 'expected' | 'prime') => {
  console.log(`[generateChartData] Called with sinner:`, sinner, `variant:`, variant);
  
  if (!sinner) {
    console.log(`[generateChartData] No sinner data provided, returning null`);
    return null;
  }
  
  const variantIndex = variant === 'adverse' ? 0 : variant === 'expected' ? 1 : 2;
  console.log(`[generateChartData] Variant index:`, variantIndex);
  
  if ((variant === 'adverse' && !sinner.has_weak) || (variant === 'prime' && !sinner.has_prime)) {
    console.log(`[generateChartData] Invalid variant for sinner - has_weak:`, sinner.has_weak, `has_prime:`, sinner.has_prime);
    return null;
  }

  console.log(`[generateChartData] Matrices:`, {
    elite_bias: sinner.elite_bias_score_matrix,
    full_deck: sinner.full_deck_score_matrix
  });

  // Check if the required matrices exist
  if (!sinner.elite_bias_score_matrix?.[variantIndex] || !sinner.full_deck_score_matrix?.[variantIndex]) {
    console.log(`[generateChartData] Required matrices or variant index missing`);
    return null;
  }

  const eliteBiasData = {
    clash_worst_sp: sinner.elite_bias_score_matrix[variantIndex][0] ?? 0,
    clash_ideal_sp: sinner.elite_bias_score_matrix[variantIndex][1] ?? 0,
    damage_worst_sp: sinner.elite_bias_score_matrix[variantIndex][2] ?? 0,
    damage_ideal_sp: sinner.elite_bias_score_matrix[variantIndex][3] ?? 0,
  };

  const fullDeckData = {
    clash_worst_sp: sinner.full_deck_score_matrix[variantIndex][0] ?? 0,
    clash_ideal_sp: sinner.full_deck_score_matrix[variantIndex][1] ?? 0,
    damage_worst_sp: sinner.full_deck_score_matrix[variantIndex][2] ?? 0,
    damage_ideal_sp: sinner.full_deck_score_matrix[variantIndex][3] ?? 0,
  };

  console.log(`[generateChartData] Generated data:`, { eliteBiasData, fullDeckData });

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