import numpy as np
from bokeh.plotting import figure, show, ColumnDataSource
from bokeh.models import DatetimeTickFormatter, Line, ResetTool, HoverTool, Label, WheelZoomTool, PanTool, TapTool, Title, Circle
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
paper_source = ColumnDataSource(
    data={
        'title': [paper[0] for paper in papers],
        'author': [paper[1] for paper in papers],
        'venue': [paper[2] for paper in papers],
        'date': [to_date(paper[3]) for paper in papers],
        'citation': [int(paper[4]) for paper in papers],
    }
)
milestone_source = ColumnDataSource(
    data={
        'date': [to_date(milestone[0]) for milestone in milestones],
        'role': [milestone[1] for milestone in milestones],
        'affiliation': [milestone[2] for milestone in milestones],
        'address': [milestone[3] for milestone in milestones],
        'duration': [milestone[4] for milestone in milestones],
    }
)


# data
dates = [to_date(paper[-2]) for paper in papers]
citations = [int(paper[-1]) for paper in papers]
max_citations = max(citations)*1.2


# create a new plot with a title and axis labels
p = figure(title="Xovee's Timeline",
           x_axis_label='', y_axis_label='',
           x_axis_type='datetime',
           y_axis_location='left',
           height=200, width=920,
           sizing_mode='stretch_width', max_width=920, min_width=600,
           x_range=(to_date('2013/09/01'), to_date('2024/06/30')),
           y_range=(0, max_citations),
           tools=['xpan', 'xwheel_zoom', 'reset', ],  # ResetTool,
           toolbar_location=None,
           active_scroll='xwheel_zoom',
           # tooltips='hi',
           # output_backend="webgl",
           )

p.outline_line_width = 0
# p.title.text_font_style = 'normal'
p.title.align = 'left'

p.toolbar.logo = None
p.toolbar_location = None
# p.toolbar.autohide = True

p.background_fill_color = None
p.border_fill_color = None

p.xaxis.major_tick_line_color = 'silver'
p.xaxis.axis_line_width = 1
p.xaxis.axis_line_color = 'black'
p.xaxis[0].formatter = DatetimeTickFormatter(months='%b %Y')
p.yaxis.major_tick_line_color = None
p.yaxis.minor_tick_line_color = None
p.yaxis.axis_line_color = None

# p.xgrid.grid_line_color = '#ddd'
# p.ygrid.grid_line_color = '#ddd'

circles = p.circle(
    'date',
    'citation',
    source=paper_source,
    fill_alpha=1,
    fill_color='green',
    size=10,
    line_color='white',
)

selected_circles = Circle(fill_color='green', size=30)
circles.hover_glyph = selected_circles

segments = p.segment(
    'date', 0,
    'date', 'citation',
    line_color='black', line_width=1, source=paper_source,
)

all_milestone_lines = list()


def draw_milestone_annotation(data):
    label = Label(x=to_date(data[0]), y=128, x_units='data', y_units='screen', text=data[1], text_color='gray',
                  text_font_size='12px')
    p.add_layout(label)
    all_milestone_lines.append(label)


# spans
lines = p.segment(x0='date', y0=0,
                  x1='date', y1=max_citations,
                  line_color='gray', line_dash='dashed', line_width=1.3, source=milestone_source)

for milestone in milestones:
    draw_milestone_annotation(milestone)

yaxis_label = Label(x=0, y=5, x_units='screen', y_units='screen', text=' # citations', text_color='black',
                    text_font_size='12px', text_alpha=.5)
p.add_layout(yaxis_label)

paper_tooltips = """
    <div>
        <span style='font-size: 12px; font-weight: bold;'>@title</span><br>
        <span>@author</span><br>
        <span style='display: inline-block;'>@venue</span>
        <span style='float: right;'>Citation: @citation</span>
        <div style='clear: both; margin-bottom: 3px;'></div>
    </div>
"""
milestone_tooltips = """
    <div>
        <span>@affiliation</span><br>
        <span>@duration</span><address>@address</address>
    </div>

"""
paper_hover = HoverTool(show_arrow=False, renderers=[circles], tooltips=paper_tooltips)
milestone_hover = HoverTool(show_arrow=False, renderers=[lines], tooltips=milestone_tooltips)

p.add_tools(paper_hover, milestone_hover)


# levels
circles.level = 'annotation'

script, div = components(p)

print(script)
print('-'*64)
print(div)

# show the results
show(p)
