import matplotlib.pyplot as plt
from matplotlib import rcParams
rcParams['font.family'] = ['Heiti TC', 'Apple Color Emoji']
cmap = plt.get_cmap("Set3").colors

labels = ['村上春树', '渡边淳一', '马克西姆·高尔基', '冯友兰', '鲁迅', '赫尔曼·黑塞', '当年明月', 'Others']

sizes = [10, 10, 3, 3, 3, 3, 3, 98]

explode = [.1, .1, .1, 0, 0, 0, 0, 0]

fig1, ax1 = plt.subplots()
fig1.patch.set_alpha(0.)
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=False, startangle=90, colors=cmap)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()

