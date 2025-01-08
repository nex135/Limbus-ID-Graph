export interface Skill {
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


export const sinnerData: SinnerData = {
  "don_quixote_bl": {
    "name": "don_quixote_bl_ut4",
    "skills": [
      {
        "name": "draw_of_the_sword",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "blade_arc",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "fare_thee_well",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_cinq": {
    "name": "don_quixote_cinq_ut4",
    "skills": [
      {
        "name": "remise",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "fleche",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          2,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "salut",
        "coin_type": "plus",
        "stats": [
          6,
          6,
          2,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_lantern": {
    "name": "don_quixote_lantern_ut4",
    "skills": [
      {
        "name": "i_shall_nibble_thee",
        "coin_type": "plus",
        "stats": [
          5,
          7,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flashing_lure",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "whirlwind_om-nom-nom!",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          1,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_lcb": {
    "name": "don_quixote_lcb_ut4",
    "skills": [
      {
        "name": "joust",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "galloping_tilt",
        "coin_type": "plus",
        "stats": [
          4,
          12,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "for_justice",
        "coin_type": "plus",
        "stats": [
          3,
          3,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_manager": {
    "name": "don_quixote_manager_ut4",
    "skills": [
      {
        "name": "enough_is_enough",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "variant_sancho_hardblood_arts_5_whip",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "let_all_blossom_free",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "variant_sancho_hardblood_arts_8_split_apart",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "i_shall_impale",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          2,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "ascendant_sancho_hardblood_arts_la_sangre",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          3,
          2,
          0,
          6
        ],
        "prime_damage_bonuses": [
          3,
          2,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "laughters_will_subside",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "variant_sancho_hardblood_arts_15_build_up_to_finale",
        "coin_type": "plus",
        "stats": [
          6,
          5,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          6
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          6
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_middle": {
    "name": "don_quixote_middle_ut4",
    "skills": [
      {
        "name": "checking_the_book",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          1,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "proof_of_loyalty",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          8
        ],
        "prime_damage_bonuses": [
          1,
          1,
          0,
          8
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "a_just_vengeance",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          8
        ],
        "prime_damage_bonuses": [
          1,
          1,
          0,
          8
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_n_corp": {
    "name": "don_quixote_n_corp_ut4",
    "skills": [
      {
        "name": "rightful_purge",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "enactment",
        "coin_type": "plus",
        "stats": [
          4,
          12,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "fanatical_judgement",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_shi": {
    "name": "don_quixote_shi_ut4",
    "skills": [
      {
        "name": "catch_breath",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "dual_strike",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "overbreathe",
        "coin_type": "plus",
        "stats": [
          4,
          21,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          5,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_t_corp": {
    "name": "don_quixote_t_corp_ut4",
    "skills": [
      {
        "name": "let_us_prepare_to_collect",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          5,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "t_corp._accelerated_amputator",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          5,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "i_command_thee_halt",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          5,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "don_quixote_w_corp": {
    "name": "don_quixote_w_corp_ut4",
    "skills": [
      {
        "name": "rip",
        "coin_type": "plus",
        "stats": [
          5,
          8,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -2,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "leap",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "rip_space",
        "coin_type": "plus",
        "stats": [
          1,
          6,
          5,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -4,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_bl": {
    "name": "faust_bl_ut4",
    "skills": [
      {
        "name": "moonlit_blade_dance",
        "coin_type": "plus",
        "stats": [
          3,
          2,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "acupuncture",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "red_plum_blossoms_scatter",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_butler": {
    "name": "faust_butler_ut4",
    "skills": [
      {
        "name": "confiscation",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "interloper_reception",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "reception_arts_4_heartseal",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          2,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_lcb": {
    "name": "faust_lcb_ut4",
    "skills": [
      {
        "name": "downward_slash",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "upward_slash",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "drilling_stab",
        "coin_type": "plus",
        "stats": [
          7,
          2,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_l_corp": {
    "name": "faust_l_corp_ut4",
    "skills": [
      {
        "name": "sole_strike",
        "coin_type": "plus",
        "stats": [
          3,
          8,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "deep_cuts",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "opportunistic_slash",
        "coin_type": "plus",
        "stats": [
          4,
          8,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_multicrack": {
    "name": "faust_multicrack_ut4",
    "skills": [
      {
        "name": "40y-3_activation",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "charge_countercurrent",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "40y-3_charge",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          4,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          4,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_n_corp": {
    "name": "faust_n_corp_ut4",
    "skills": [
      {
        "name": "cackle",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "the_gripping",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "execution",
        "coin_type": "plus",
        "stats": [
          6,
          2,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_regret": {
    "name": "faust_regret_ut4",
    "skills": [
      {
        "name": "contracting_strait-jacket",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "metallic_ringing",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "unleashed_violence",
        "coin_type": "plus",
        "stats": [
          3,
          5,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_seven": {
    "name": "faust_seven_ut4",
    "skills": [
      {
        "name": "predictive_analysis",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "dissect_target",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "profiling",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_w_corp": {
    "name": "faust_w_corp_ut4",
    "skills": [
      {
        "name": "energy_cycle",
        "coin_type": "plus",
        "stats": [
          4,
          8,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "leap",
        "coin_type": "plus",
        "stats": [
          6,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "overcharge",
        "coin_type": "plus",
        "stats": [
          8,
          3,
          3,
          -1
        ],
        "damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "faust_zwei": {
    "name": "faust_zwei_ut4",
    "skills": [
      {
        "name": "patrolling",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "client_protection",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "law_and_order",
        "coin_type": "plus",
        "stats": [
          6,
          5,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_chef": {
    "name": "gregor_chef_ut4",
    "skills": [
      {
        "name": "keep_it_fresh",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "you_fresh_enough",
        "coin_type": "plus",
        "stats": [
          6,
          8,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "butcher_viand",
        "coin_type": "plus",
        "stats": [
          5,
          1,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_g_corp": {
    "name": "gregor_g_corp_ut4",
    "skills": [
      {
        "name": "hack",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "dismember",
        "coin_type": "plus",
        "stats": [
          6,
          10,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "eviscerate",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_heir": {
    "name": "gregor_heir_ut4",
    "skills": [
      {
        "name": "sabre_slash",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          2,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "remise",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "nightmare_hunt",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          3,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_kk": {
    "name": "gregor_kk_ut4",
    "skills": [
      {
        "name": "lenticular_rend",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "shadow_cloud",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "shadowcloud_shattercleave",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_lcb": {
    "name": "gregor_lcb_ut4",
    "skills": [
      {
        "name": "swipe",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "jag",
        "coin_type": "plus",
        "stats": [
          5,
          10,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "chop_up",
        "coin_type": "plus",
        "stats": [
          6,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_liu": {
    "name": "gregor_liu_ut4",
    "skills": [
      {
        "name": "single_point_stab",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "rush_down",
        "coin_type": "plus",
        "stats": [
          5,
          2,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "perfected_palm_strike",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_priest": {
    "name": "gregor_priest_ut4",
    "skills": [
      {
        "name": "sacrifice_for_the_family",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "suffocating_guilt",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "the_unforgivable_sin",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          1,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          1,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_rosespanner": {
    "name": "gregor_rosespanner_ut4",
    "skills": [
      {
        "name": "rev_up",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "grease_chains",
        "coin_type": "plus",
        "stats": [
          4,
          12,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "lets_grind_em",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_twinhook": {
    "name": "gregor_twinhook_ut4",
    "skills": [
      {
        "name": "negotiation_start",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "unilateral_business",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "foregone_conclusion",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "gregor_zwei": {
    "name": "gregor_zwei_ut4",
    "skills": [
      {
        "name": "standoff",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flexible_suppression",
        "coin_type": "plus",
        "stats": [
          3,
          3,
          4,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "guardian",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_lcb": {
    "name": "heathcliff_lcb_ut4",
    "skills": [
      {
        "name": "bat_bash",
        "coin_type": "plus",
        "stats": [
          3,
          7,
          1,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "smackdown",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          2,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "upheaval",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_multicrack": {
    "name": "heathcliff_multicrack_ut4",
    "skills": [
      {
        "name": "40s-2_activation",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "photoelectric_mark",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "photoelectric_harpoon",
        "coin_type": "plus",
        "stats": [
          5,
          2,
          4,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_n_corp": {
    "name": "heathcliff_n_corp_ut4",
    "skills": [
      {
        "name": "gawky_nailing",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "purify",
        "coin_type": "plus",
        "stats": [
          6,
          8,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "infirm_retribution",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_oufi": {
    "name": "heathcliff_outi_ut4",
    "skills": [
      {
        "name": "excution_advised",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "final_warning",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "execution_sentencing",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_pequod": {
    "name": "heathcliff_pequod_ut4",
    "skills": [
      {
        "name": "stalk_prey",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "snagharpoon",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "sever_knot",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_r_corp": {
    "name": "heathcliff_r_corp_ut4",
    "skills": [
      {
        "name": "graze_the_grass",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "concentrated_fire",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "quick_suppression",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          5,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -2,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_seven": {
    "name": "heathcliff_seven_ut4",
    "skills": [
      {
        "name": "intuition",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "the_wrap-up",
        "coin_type": "plus",
        "stats": [
          6,
          10,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "forensices",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_shi": {
    "name": "heathcliff_shi_ut4",
    "skills": [
      {
        "name": "extreme_edge",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flying_sword",
        "coin_type": "plus",
        "stats": [
          5,
          10,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flashing_strike",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_sunshower": {
    "name": "heathcliff_sunshower_ut4",
    "skills": [
      {
        "name": "umbrella_thwack",
        "coin_type": "minus",
        "stats": [
          0,
          2,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "puddle_stomp",
        "coin_type": "minus",
        "stats": [
          1,
          3,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          -3,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "spread_out",
        "coin_type": "minus",
        "stats": [
          -3,
          7,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "heathcliff_wild_hunt": {
    "name": "heathcliff_wild_hunt_ut4",
    "skills": [
      {
        "name": "beheading",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          3,
          2,
          0,
          3
        ],
        "prime_damage_bonuses": [
          3,
          2,
          0,
          3
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "memorial_procession",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          2,
          0,
          3
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          3
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "requiem",
        "coin_type": "plus",
        "stats": [
          6,
          6,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          3
        ],
        "prime_bonuses": [
          2,
          4,
          0,
          3
        ],
        "prime_damage_bonuses": [
          0,
          4,
          0,
          3
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "lament_mourn_despair",
        "coin_type": "minus",
        "stats": [
          5,
          13,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          6,
          0,
          0,
          3
        ],
        "prime_damage_bonuses": [
          4,
          0,
          0,
          3
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": []
      },
      {
        "name": "o_dullahan",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          2,
          0,
          3
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          3
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_dieci": {
    "name": "hong_lu_dieci_ut4",
    "skills": [
      {
        "name": "expend_knowledge",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          2,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "unveil",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "cyclical_knowledgee",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_hook": {
    "name": "hong_lu_hook_ut4",
    "skills": [
      {
        "name": "track",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "goin_first",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "rampage",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_kurokumo": {
    "name": "hong_lu_kurokumo_ut4",
    "skills": [
      {
        "name": "hack",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "cloud_cutter",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          2,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          -2,
          0
        ]
      },
      {
        "name": "cloudburst",
        "coin_type": "plus",
        "stats": [
          7,
          2,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_k_corp": {
    "name": "hong_lu_k_corp_ut4",
    "skills": [
      {
        "name": "impede_the_intruder",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "decay_blade",
        "coin_type": "plus",
        "stats": [
          6,
          5,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "excise_target",
        "coin_type": "plus",
        "stats": [
          8,
          6,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -2,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_lcb": {
    "name": "hong_lu_lcb_ut4",
    "skills": [
      {
        "name": "downward_cleave",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "dual_strike",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "whirlwind",
        "coin_type": "plus",
        "stats": [
          6,
          6,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -2,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_liu": {
    "name": "hong_lu_liu_ut4",
    "skills": [
      {
        "name": "warm_up",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flowing_flame",
        "coin_type": "plus",
        "stats": [
          6,
          2,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "crimson_blaze_fist",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_tingtang": {
    "name": "hong_lu_tingtang_ut4",
    "skills": [
      {
        "name": "throat_slit",
        "coin_type": "plus",
        "stats": [
          5,
          8,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "jag",
        "coin_type": "plus",
        "stats": [
          3,
          5,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          1,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "mutilate",
        "coin_type": "plus",
        "stats": [
          5,
          25,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "hong_lu_w_corp": {
    "name": "hong_lu_w_corp_ut4",
    "skills": [
      {
        "name": "energy_cycle",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "cleanup_support",
        "coin_type": "plus",
        "stats": [
          6,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "deploy_charge_barrier",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_boat": {
    "name": "ishmael_boat_ut4",
    "skills": [
      {
        "name": "ready_to_crush",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "explosive_blast",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "risky_judgement",
        "coin_type": "plus",
        "stats": [
          3,
          6,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_lcb": {
    "name": "ishmael_lcb_ut4",
    "skills": [
      {
        "name": "loggerhead",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "slide",
        "coin_type": "plus",
        "stats": [
          6,
          9,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "shield_bash",
        "coin_type": "plus",
        "stats": [
          8,
          12,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_lccb": {
    "name": "ishmael_lccb_ut4",
    "skills": [
      {
        "name": "shove",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "quake_rounds",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "suppress",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_liu": {
    "name": "ishmael_liu_ut4",
    "skills": [
      {
        "name": "red_kick",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "frontal_assault",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "inner_gate_elbow_strike",
        "coin_type": "plus",
        "stats": [
          3,
          3,
          4,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_l_corp": {
    "name": "ishmael_l_corp_ut4",
    "skills": [
      {
        "name": "its_heavy",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "its_churning",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "corrosive_splash",
        "coin_type": "plus",
        "stats": [
          6,
          16,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_pequod": {
    "name": "ishmael_pequod_ut4",
    "skills": [
      {
        "name": "to_me",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "pursue_them_to_the_end",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "harpoon_of_obsession",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_r_corp": {
    "name": "ishmael_r_corp_ut4",
    "skills": [
      {
        "name": "mind_strike",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flaying_surge",
        "coin_type": "plus",
        "stats": [
          6,
          12,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "mind_whip",
        "coin_type": "plus",
        "stats": [
          2,
          6,
          4,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ishmael_shi": {
    "name": "ishmael_shi_ut4",
    "skills": [
      {
        "name": "flying_sword",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flashing_slide",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          2,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "catch_breath",
        "coin_type": "plus",
        "stats": [
          6,
          6,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_bl": {
    "name": "meursault_bl_ut4",
    "skills": [
      {
        "name": "draw_of_the_sword",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "acupuncture",
        "coin_type": "plus",
        "stats": [
          3,
          5,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "yield_my_flesh",
        "coin_type": "minus",
        "stats": [
          12,
          8,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_lcb": {
    "name": "meursault_lcb_ut4",
    "skills": [
      {
        "name": "un_deux",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "nailing_fist",
        "coin_type": "plus",
        "stats": [
          6,
          9,
          1,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "des_coups",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_liu": {
    "name": "meursault_liu_ut4",
    "skills": [
      {
        "name": "assault",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "stalwart_stance",
        "coin_type": "plus",
        "stats": [
          7,
          2,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "perfected_death_fist",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_middle": {
    "name": "meursault_middle_ut4",
    "skills": [
      {
        "name": "we_remember",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "chains_of_loyalty",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "recording",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          1,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_n_corp": {
    "name": "meursault_n_corp_ut4",
    "skills": [
      {
        "name": "drive",
        "coin_type": "plus",
        "stats": [
          5,
          1,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "you_are_cleansed_of_sin",
        "coin_type": "plus",
        "stats": [
          6,
          3,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "annihilate_heretics",
        "coin_type": "plus",
        "stats": [
          8,
          3,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_rosespanner": {
    "name": "meursault_rosespanner_ut4",
    "skills": [
      {
        "name": "saddled_tasks",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "forced_break",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "finishing_runup",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_r_corp": {
    "name": "meursault_r_corp_ut4",
    "skills": [
      {
        "name": "weighty_bash",
        "coin_type": "plus",
        "stats": [
          6,
          6,
          1,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          1,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "demolish",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "rhino_ram",
        "coin_type": "plus",
        "stats": [
          6,
          3,
          3,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "meursault_w_corp": {
    "name": "meursault_w_corp_ut4",
    "skills": [
      {
        "name": "rip",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "energy_cycle",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "energy_current",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          4,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_blade": {
    "name": "outis_blade_ut4",
    "skills": [
      {
        "name": "draw_of_the_sword",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "acupuncture",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "decisive_dive",
        "coin_type": "plus",
        "stats": [
          6,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_cinq": {
    "name": "outis_cinq_ut4",
    "skills": [
      {
        "name": "marche",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "punition",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "balestra_fente",
        "coin_type": "plus",
        "stats": [
          8,
          14,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          4,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          4,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_g_corp": {
    "name": "outis_g_corp_ut4",
    "skills": [
      {
        "name": "order",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "onslaught_command",
        "coin_type": "plus",
        "stats": [
          5,
          10,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "focus",
        "coin_type": "plus",
        "stats": [
          6,
          16,
          1,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_lcb": {
    "name": "outis_lcb_ut4",
    "skills": [
      {
        "name": "pulled_blade",
        "coin_type": "plus",
        "stats": [
          3,
          2,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "backslash",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "piercing_thrust",
        "coin_type": "plus",
        "stats": [
          7,
          14,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_magic_bullet": {
    "name": "outis_magic_bullet_ut4",
    "skills": [
      {
        "name": "ignition",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "detonate_magic_bullet",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "magic_bullet_fire",
        "coin_type": "plus",
        "stats": [
          15,
          4,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          15,
          6,
          0,
          0
        ],
        "prime_damage_bonuses": [
          15,
          6,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_molar_office": {
    "name": "outis_molar_office_ut4",
    "skills": [
      {
        "name": "wait_up",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          2,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "slice",
        "coin_type": "plus",
        "stats": [
          3,
          5,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "daring_decision",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "outis_seven": {
    "name": "outis_seven_ut4",
    "skills": [
      {
        "name": "predictive_analysis",
        "coin_type": "plus",
        "stats": [
          8,
          4,
          1,
          0
        ],
        "damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "field_command",
        "coin_type": "plus",
        "stats": [
          7,
          5,
          2,
          0
        ],
        "damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "exploit_the_gap",
        "coin_type": "plus",
        "stats": [
          8,
          2,
          3,
          0
        ],
        "damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_dieci": {
    "name": "rodion_dieci_ut4",
    "skills": [
      {
        "name": "illuminate_thy_vacuity",
        "coin_type": "plus",
        "stats": [
          3,
          2,
          3,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "weight_of_knowledge",
        "coin_type": "plus",
        "stats": [
          3,
          3,
          4,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "excruciating_study",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_kurokumo": {
    "name": "rodion_kurokumo_ut4",
    "skills": [
      {
        "name": "sharp_edge",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "scattering_slash",
        "coin_type": "plus",
        "stats": [
          6,
          3,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "sky_clearing_cut",
        "coin_type": "plus",
        "stats": [
          7,
          18,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_lcb": {
    "name": "rodion_lcb_ut4",
    "skills": [
      {
        "name": "strike_down",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "axe_combo",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "slay",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_lccb": {
    "name": "rodion_lccb_ut4",
    "skills": [
      {
        "name": "bludgeon",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "thrust",
        "coin_type": "plus",
        "stats": [
          6,
          1,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "suppress",
        "coin_type": "plus",
        "stats": [
          7,
          5,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -3,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_liu": {
    "name": "rodion_liu_ut4",
    "skills": [
      {
        "name": "flaming_fists",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "fiery_knifehand_combust",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "pinpoint_blitz",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          4,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_n_corp": {
    "name": "rodion_n_corp_ut4",
    "skills": [
      {
        "name": "devoted_hammering",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "zealous_purge",
        "coin_type": "plus",
        "stats": [
          6,
          2,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "ironclad_retribution",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_rosespanner": {
    "name": "rodion_rosespanner_ut4",
    "skills": [
      {
        "name": "rev_up",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "vibration_compression",
        "coin_type": "plus",
        "stats": [
          6,
          3,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          2,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          -2,
          0
        ]
      },
      {
        "name": "lets_rack_up_some_scores",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "rodion_zwei": {
    "name": "rodion_zwei_ut4",
    "skills": [
      {
        "name": "careful_obstruction",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          2,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "focused_defense",
        "coin_type": "plus",
        "stats": [
          6,
          4,
          2,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "subdue_threat",
        "coin_type": "plus",
        "stats": [
          5,
          2,
          3,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_chef": {
    "name": "ryoshu_chef_ut4",
    "skills": [
      {
        "name": "cooking_prep",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "ingredient_hunt",
        "coin_type": "plus",
        "stats": [
          3,
          5,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "i_can_cook_anything",
        "coin_type": "plus",
        "stats": [
          3,
          3,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          20,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_kurokumo": {
    "name": "ryoshu_kurokumo_ut4",
    "skills": [
      {
        "name": "focus_strike",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "clean_up",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "lenticular_swirl",
        "coin_type": "plus",
        "stats": [
          8,
          4,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_lcb": {
    "name": "ryoshu_lcb_ut4",
    "skills": [
      {
        "name": "paint",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "splatter",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "brushstroke",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_lccb": {
    "name": "ryoshu_lccb_ut4",
    "skills": [
      {
        "name": "shove",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "target_neutralization",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "obliteration_of_forehead",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_liu": {
    "name": "ryoshu_liu_ut4",
    "skills": [
      {
        "name": "all_out_war",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "fiery_knifehand",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flame_cleave",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_seven": {
    "name": "ryoshu_seven_ut4",
    "skills": [
      {
        "name": "slash",
        "coin_type": "plus",
        "stats": [
          4,
          8,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "upper_slash",
        "coin_type": "plus",
        "stats": [
          4,
          14,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "swash",
        "coin_type": "plus",
        "stats": [
          4,
          5,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "ryoshu_w_corp": {
    "name": "ryoshu_w_corp_ut4",
    "skills": [
      {
        "name": "energy_cyclee",
        "coin_type": "plus",
        "stats": [
          3,
          2,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "leap",
        "coin_type": "plus",
        "stats": [
          2,
          5,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "dimension_demon_edge_dimensional_refraction",
        "coin_type": "plus",
        "stats": [
          3,
          7,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -5,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          -5,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_blade": {
    "name": "sinclair_blade_ut4",
    "skills": [
      {
        "name": "slice_then_stab",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "slash_series",
        "coin_type": "plus",
        "stats": [
          6,
          2,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "to_claim_their_bones",
        "coin_type": "plus",
        "stats": [
          8,
          18,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_boat": {
    "name": "sinclair_boat_ut3",
    "skills": [
      {
        "name": "fierce_assault",
        "coin_type": "plus",
        "stats": [
          2,
          1,
          4,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "steady",
        "coin_type": "plus",
        "stats": [
          4,
          12,
          1,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "gamble",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_cinq": {
    "name": "sinclair_cinq_ut4",
    "skills": [
      {
        "name": "remise",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "engagement",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "contre_attaque",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          3,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          3,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_lcb": {
    "name": "sinclair_lcb_ut4",
    "skills": [
      {
        "name": "downward_swing",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "halberd_combo",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "ravaging_cut",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          1,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_l_corp": {
    "name": "sinclair_l_corp_ut4",
    "skills": [
      {
        "name": "magnify_wound",
        "coin_type": "plus",
        "stats": [
          5,
          5,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "proliferating_talismans",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "rupturing_talisman",
        "coin_type": "plus",
        "stats": [
          5,
          6,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_mariachi": {
    "name": "sinclair_mariachi_ut4",
    "skills": [
      {
        "name": "baile_y_rola",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          2,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "danza_de_pasion",
        "coin_type": "plus",
        "stats": [
          5,
          1,
          3,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "pinata_party",
        "coin_type": "plus",
        "stats": [
          8,
          11,
          1,
          -3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_n_corp": {
    "name": "sinclair_n_corp_ut4",
    "skills": [
      {
        "name": "coerced_judgement",
        "coin_type": "minus",
        "stats": [
          4,
          2,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "amoral_enactment",
        "coin_type": "minus",
        "stats": [
          0,
          4,
          4,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "self_destructive_purge",
        "coin_type": "minus",
        "stats": [
          -6,
          12,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "sinclair_zwei": {
    "name": "sinclair_zwei_ut4",
    "skills": [
      {
        "name": "baton",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          1,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "suppress",
        "coin_type": "plus",
        "stats": [
          6,
          2,
          2,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "strong_strike",
        "coin_type": "plus",
        "stats": [
          7,
          13,
          1,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_blade": {
    "name": "yi_sang_blade_ut4",
    "skills": [
      {
        "name": "strikers_stance",
        "coin_type": "plus",
        "stats": [
          6,
          8,
          1,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "heel_turn",
        "coin_type": "plus",
        "stats": [
          7,
          3,
          2,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "flank_thrust",
        "coin_type": "plus",
        "stats": [
          8,
          3,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          -1,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_dieci": {
    "name": "yi_sang_dieci_ut4",
    "skills": [
      {
        "name": "expend_knowledge",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "seal shut",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          -1
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "grace_of_knowledge",
        "coin_type": "plus",
        "stats": [
          4,
          2,
          4,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_lcb": {
    "name": "yi_sang_lcb_ut4",
    "skills": [
      {
        "name": "deflect",
        "coin_type": "plus",
        "stats": [
          4,
          7,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "end_stop_stab",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "enjamb",
        "coin_type": "plus",
        "stats": [
          6,
          2,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_molar_office": {
    "name": "yi_sang_molar_office_ut4",
    "skills": [
      {
        "name": "stay_calm",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          -2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "gamble",
        "coin_type": "plus",
        "stats": [
          4,
          12,
          1,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "grinding_the_molars",
        "coin_type": "plus",
        "stats": [
          4,
          3,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          2,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          2,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_pequod": {
    "name": "yi_sang_pequod_ut4",
    "skills": [
      {
        "name": "impale",
        "coin_type": "plus",
        "stats": [
          3,
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "relentless_stabbing",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          2,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          3,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          3,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "ambush",
        "coin_type": "plus",
        "stats": [
          4,
          6,
          2,
          3
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          1,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          1,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_seven": {
    "name": "yi_sang_seven_ut4",
    "skills": [
      {
        "name": "fleche",
        "coin_type": "plus",
        "stats": [
          5,
          7,
          1,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "riposte",
        "coin_type": "plus",
        "stats": [
          5,
          4,
          2,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "moulinet",
        "coin_type": "plus",
        "stats": [
          5,
          3,
          3,
          0
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          2,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          -2,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  },
  "yi_sang_spicebush": {
    "name": "yi_sang_spicebush_ut4",
    "skills": [
      {
        "name": "sprouting_bud",
        "coin_type": "plus",
        "stats": [
          3,
          2,
          3,
          4
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "moments_floral_breeze",
        "coin_type": "plus",
        "stats": [
          4,
          4,
          3,
          2
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "name": "bloodsteeped_scent",
        "coin_type": "plus",
        "stats": [
          6,
          4,
          3,
          5
        ],
        "damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_bonuses": [
          0,
          0,
          0,
          0
        ],
        "prime_damage_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_bonuses": [
          0,
          0,
          0,
          0
        ],
        "weak_damage_bonuses": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "has_weak": false,
    "has_prime": false,
    "elite_bias_score_matrix": [],
    "elite_bias_rank_matrix": [],
    "full_deck_score_matrix": [],
    "full_deck_rank_matrix": [],
    "competitor_count": 0
  }
};