import matplotlib.pyplot as plt
from matplotlib import rcParams
cmap = plt.get_cmap("Set2").colors
rcParams['font.family'] = 'Heiti TC'

# labels = ['China', 'Japan', 'USA', 'UK', 'Germany', 'Russia', 'Greece', 'France', 'Pakistan', 'Spain',]
labels = ['China', 'Japan', 'USA', 'UK', 'Germany', 'Others']
# sizes = [68, 26, 16, 8, 5, 3, 2, 1, 1, 1]
sizes = [68, 26, 16, 8, 5, 8]

explode = [.1, .1, .1, 0, 0, 0]

fig1, ax1 = plt.subplots()
fig1.patch.set_alpha(0.)
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=False, startangle=90, colors=cmap)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()
