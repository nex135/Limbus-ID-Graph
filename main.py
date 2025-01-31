import yaml
from os import listdir
from sinner import Sinner
from skill import Skill
import matplotlib
import matplotlib.pyplot as plt
import numpy as np


variant_names = ['adverse', 'expected', 'prime']
uptie_names = ['ut3', 'ut4'] #replace this for single file with uptie_names['ut4']
sinner_score_names = ['clash_worst_sp', 'clash_ideal_sp', 'damage_worst_sp', 'damage_ideal_sp']
skill_score_names = ['clash_worst_sp', 'clash_ideal_sp', 'damage_worst_sp', 'damage_ideal_sp', 'ceiling']

for uptie in uptie_names:

	sinners = []
	skills = []

	files = [file for file in listdir(f'sinners_{uptie}')] #change this to filename

	for file in files:
		stream = open(f'sinners_{uptie}/{file}', 'r')
		sinner = yaml.load(stream, yaml.Loader)
		sinners.append(sinner)
		for skill in sinner.skills:
			skills.append(skill)
		sinner.calibrate()

	for sinner in sinners:
		sinner.competitor_count = len(sinners)

	for skill in skills:
		skill.competitor_count = len(skills)
		
	print(f'Calibration complete ({uptie})')

	for i in range(0, 3):
		for j in range (0, 4):
			sinners.sort(reverse=True, key=lambda x: x.elite_bias_score_matrix[i][j])
			file = open(f'rankings_{uptie}/elite_bias_{variant_names[i]}_{sinner_score_names[j]}_{uptie}_rankings.txt', 'w')
			for k in range(0, len(sinners)):
				sinners[k].elite_bias_rank_matrix[i][j] = k + 1
				file.write(f'{sinners[k].gen_summary(i, "elite_bias")}\n')

	for i in range(0, 3):
		for j in range (0, 4):
			sinners.sort(reverse=True, key=lambda x: x.full_deck_score_matrix[i][j])
			file = open(f'rankings_{uptie}/full_deck_{variant_names[i]}_{sinner_score_names[j]}_{uptie}_rankings.txt', 'w')
			for k in range(0, len(sinners)):
				sinners[k].full_deck_rank_matrix[i][j] = k + 1
				file.write(f'{sinners[k].gen_summary(i, "full_deck")}\n')

	sinners.sort(reverse=False, key=lambda x: 4 * (x.elite_bias_rank_matrix[1][1] + x.elite_bias_rank_matrix[1][3] + x.elite_bias_rank_matrix[2][1] + x.elite_bias_rank_matrix[2][3]) + x.elite_bias_rank_matrix[2][4])
	file = open(f'rankings_{uptie}/_general_sort_please_ignore.txt', 'w')
	for k in range(0, len(sinners)):
		file.write(f'{sinners[k].gen_summary(1, "elite_bias")}\n')

	for i in range(0, 3):
		for j in range (0, 5):
				skills.sort(reverse=True, key=lambda x: x.score_matrix[i][j])
				file = open(f'rankings_{uptie}/skill_{variant_names[i]}_{skill_score_names[j]}_{uptie}_rankings.txt', 'w')
				for k in range(0, len(skills)):
					skills[k].rank_matrix[i][j] = k + 1
					file.write(f'{skills[k].gen_summary(i)}\n')

	print(f'Rankings complete ({uptie})')

	for i in range(0, 3):
		for sinner in sinners:
			if (i == 0 and not sinner.has_weak) or (i == 2 and not sinner.has_prime):
				continue
			plt = sinner.gen_chart(i)
			variant_name = ''
			if i == 0:
				variant_name = 'adverse'
			elif i == 1:
				variant_name = 'expected'
			elif i == 2:
				variant_name = 'prime'
			plt.savefig(f'charts_{uptie}/{sinner.name}_{variant_name}.png')
			plt.close()

	print(f'Charts generated ({uptie})')