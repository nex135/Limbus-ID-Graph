import yaml
import json
import os
from typing import Dict, Any

def process_yaml_file(file_path: str) -> Dict[str, Any]:
    with open(file_path, 'r') as file:
        # Read the file content
        content = file.read()
        
        # Remove Python object tags
        content = content.replace('!!python/object:sinner.Sinner', '')
        content = content.replace('!!python/object:skill.Skill', '')
        
        # Parse YAML
        data = yaml.safe_load(content)
        
        # Convert to plain dict
        if isinstance(data, dict):
            return {
                'name': data.get('name', ''),
                'skills': [
                    {
                        'name': skill.get('name', ''),
                        'coin_type': skill.get('coin_type', ''),
                        'stats': skill.get('stats', []),
                        'damage_bonuses': skill.get('damage_bonuses', []),
                        'prime_bonuses': skill.get('prime_bonuses', []),
                        'prime_damage_bonuses': skill.get('prime_damage_bonuses', []),
                        'weak_bonuses': skill.get('weak_bonuses', []),
                        'weak_damage_bonuses': skill.get('weak_damage_bonuses', []),
                    }
                    for skill in data.get('skills', [])
                ],
                'has_weak': data.get('has_weak', False),
                'has_prime': data.get('has_prime', False),
                'elite_bias_score_matrix': data.get('elite_bias_score_matrix', []),
                'elite_bias_rank_matrix': data.get('elite_bias_rank_matrix', []),
                'full_deck_score_matrix': data.get('full_deck_score_matrix', []),
                'full_deck_rank_matrix': data.get('full_deck_rank_matrix', []),
                'competitor_count': data.get('competitor_count', 0),
            }
        return {}

def convert_yaml_to_ts():
    data: Dict[str, Any] = {}
    yaml_dir = "sinners_ut4"
    
    # Read all YAML files
    for filename in os.listdir(yaml_dir):
        if filename.endswith(('.yaml', '.yml')):
            character_id = filename.rsplit('.', 1)[0]
            try:
                file_path = os.path.join(yaml_dir, filename)
                yaml_data = process_yaml_file(file_path)
                if yaml_data:
                    data[character_id] = yaml_data
                else:
                    print(f"Warning: No valid data found in {filename}")
            except Exception as e:
                print(f"Error loading {filename}: {e}")

    # Generate TypeScript interfaces
    ts_interfaces = """export interface Skill {
  name: string;
  coin_type: string;
  stats: number[];
  damage_bonuses: number[];
  prime_bonuses: number[];
  prime_damage_bonuses: number[];
  weak_bonuses: number[];
  weak_damage_bonuses: number[];
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

export interface SinnerData {
  [key: string]: Sinner;
}
"""

    # Convert data to TypeScript
    ts_data = f"export const sinnerData: SinnerData = {json.dumps(data, indent=2)};"

    # Write to TypeScript file
    output_path = "webpage/src/data/sinnerData.ts"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w') as file:
        file.write(ts_interfaces + "\n\n" + ts_data)

    print(f"Successfully converted {len(data)} YAML files to TypeScript")

if __name__ == "__main__":
    convert_yaml_to_ts() 