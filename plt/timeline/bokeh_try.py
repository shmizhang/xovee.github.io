import numpy as np
from bokeh.plotting import figure, show
from bokeh.models import DatetimeTickFormatter, Span, ResetTool, HoverTool, Label, WheelZoomTool, PanTool
from bokeh.embed import components
from datetime import datetime, timedelta
import csv


def load_data():
    with open('./paper.csv') as f:
        reader = csv.reader(f, delimiter=',')
        next(reader)

        papers = list()

        for row in reader:
            papers.append(row)

    with open('./milestone.csv') as f:
        reader = csv.reader(f, delimiter=',')
        next(reader)

        milestones = list()

        for row in reader:
            milestones.append(row)

        return papers, milestones


def to_date(date):
    return datetime.strptime(date, '%Y/%m/%d')


papers, milestones = load_data()
print(papers[0])
print(milestones[-1])

# data
dates = [to_date(paper[-2]) for paper in papers]
citations = [int(paper[-1]) for paper in papers]

# create a new plot with a title and axis labels
p = figure(title="Xovee Timeline",
           x_axis_label='', y_axis_label='',
           x_axis_type='datetime',
           height=200, width=900,
           sizing_mode='stretch_width', max_width=900, min_width=600,
           x_range=(to_date('2013/09/01'), to_date('2024/06/30')),
           y_range=(0, max(citations)*1.1),
           tools=['xpan', 'xwheel_zoom', 'reset'],  # ResetTool,
           active_scroll='xwheel_zoom',
           # tooltips='hi',
           )

p.toolbar.logo = None
p.toolbar_location = 'above'

p.background_fill_color = None
p.border_fill_color = None

p.xaxis.major_tick_line_color = 'silver'
p.xaxis.axis_line_width = 1
p.xaxis.axis_line_color = 'silver'
p.xaxis[0].formatter = DatetimeTickFormatter(months='%b %Y')
p.yaxis.major_tick_line_color = 'silver'
p.yaxis.minor_tick_line_color = None
p.yaxis.axis_line_color = 'silver'


circles = p.circle(
    dates,
    citations,
    fill_alpha=1,
    fill_color='green',
    size=10,
    line_color='grey',
)

segments = p.segment(
    dates, 0,
    dates, citations,
    line_color='black', line_width=1,
)

# spans
def draw_spans(date):
    span = Span(dimension='height', location=date, line_color='gray', line_dash='solid')
    p.add_layout(span)


def draw_milestone_annotation(data):
    label = Label(x=to_date(data[0]), y=133, x_units='data', y_units='screen', text=data[1], text_color='gray',
                  text_font_size='12px')
    p.add_layout(label)


for milestone in milestones:
    draw_spans(to_date(milestone[0]))
    draw_milestone_annotation(milestone)


# levels
circles.level = 'annotation'

script, div = components(p)

print(script)
print('-'*64)
print(div)

# show the results
# show(p)
