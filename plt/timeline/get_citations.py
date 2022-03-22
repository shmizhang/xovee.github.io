import matplotlib.pyplot as plt
import csv
from scholarly import scholarly
import time


my_gs_id = 'ra0qyRQAAAAJ'

with open('./paper.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    next(csv_reader)
    lines = list(csv_reader)
    i = 0
    for row in lines:
        paper_info = next(scholarly.search_pubs(row[0]))
        paper_title = paper_info['bib']['title']
        paper_authorid_list = paper_info['author_id']
        paper_citation = paper_info['num_citations']
        if my_gs_id not in paper_authorid_list:
            paper_citation = 0

        row[-1] = paper_citation
        print(str(i) + ':' + paper_title)
        i += 1
        time.sleep(5)

with open('./paper_new.csv', 'w') as f:
    csv_writer = csv.writer(f)
    csv_writer.writerows(lines)


search_query = scholarly.search_author('Xovee Xu')

author = scholarly.fill(next(search_query))

print(search_query)

print(next(scholarly.search_pubs('CCGL: Contrastive Cascade Graph Learning')))


print(author.keys())

# with open('./plt/timeline/paper.csv') as f:
#     reader = csv.reader(f, delimiter=',')
#     next(reader)

#     papers = dict()

#     i = 0
#     for row in reader:
#         papers[i] = row

#     print(papers[i])
