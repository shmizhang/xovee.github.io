import matplotlib.pyplot as plt
import csv


with open('./paper.csv') as f:
    reader = csv.reader(f, delimiter=',')
    next(reader)

papers = dict()

i = 0
for row in reader:
    papers[i] = row

print(papers[i])
