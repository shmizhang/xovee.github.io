import matplotlib.pyplot as plt
from matplotlib import rcParams
rcParams['font.family'] = 'Heiti TC'

labels = ['上海译文出版社', '人民文学出版社', '电子工业出版社', '人民邮电出版社', '青岛出版社', '北京航天航空大学出版社', '长江文艺出版社', '清华大学出版社', 'Others']

sizes = [13, 9, 6, 5, 5, 4, 4, 4, 107]

explode = [.1, .1, .1, 0, 0, 0, 0, 0, 0]

fig1, ax1 = plt.subplots()
fig1.patch.set_alpha(0.)
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=False, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()
