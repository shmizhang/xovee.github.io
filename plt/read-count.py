import matplotlib.pyplot as plt
from matplotlib import rcParams
cmap = plt.get_cmap("Set2").colors
rcParams['font.family'] = 'Heiti TC'

x = [2015, 2016, 2017, 2018, 2019, 2020]
# 2015-2020
y = [26, 25, 49, 22, 24, 3]

fig1, ax1 = plt.subplots(figsize=(8, 3))
fig1.patch.set_alpha(0.)

ax1.bar(x, y, width=.9, color='orange', edgecolor='red')
ax1.set_xlabel('Year', fontsize=16)
ax1.set_ylabel('Read Count', fontsize=16)

plt.show()
