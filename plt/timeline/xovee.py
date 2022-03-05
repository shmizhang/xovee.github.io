import matplotlib.pyplot as plt
import csv
from scholarly import scholarly


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
