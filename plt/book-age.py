import matplotlib.pyplot as plt
from matplotlib import rcParams
cmap = plt.get_cmap("Set2").colors
rcParams['font.family'] = 'Heiti TC'

x = [1790, 1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020]
y = [3, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 3, 8, 3, 6, 1, 0, 2, 19, 16, 36, 69]

x_label = ['Before','1700','1800', '1810', '1820', '1830', '1840', '1850', '1860', '1870', '1880', '1890', '1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020']

fig1, ax1 = plt.subplots(figsize=(8, 3))
fig1.patch.set_alpha(0.)

ax1.bar(x, y, width=10, color='skyblue', align='edge', edgecolor='red')
ax1.set_xlabel('Read Book Published Year Range', fontsize=16)
ax1.set_xticks(x)
ax1.set_xticklabels(x_label, rotation=45)
ax1.set_ylabel('Read Book Count', fontsize=16)

plt.show()
