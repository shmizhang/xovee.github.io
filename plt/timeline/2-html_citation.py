from bs4 import BeautifulSoup
import csv


def read_google_scholar_page(path):

    with open(path, 'r', encoding='UTF-8') as f:
        page = f.read()

    soup = BeautifulSoup(page, 'html.parser')

    all_titles = [title.text for title in soup.find_all(class_='gsc_a_at')]

    all_citations = [citation.text.strip() for citation in soup.find_all(class_='gsc_a_ac')]
    all_citations = [int(citation) if citation != '' else 0 for citation in all_citations ]

    paper_dict = {title: citation for title, citation in zip(all_titles, all_citations)}

    return paper_dict


def read_my_csv_data(path, papers):
    with open(path) as f:
        csv_reader = csv.reader(f, delimiter=',')
        headers = next(csv_reader)
        lines = list(csv_reader)
        sum_citations = int()

        for row in lines:
            if row[0] in papers.keys():
                old_citation = int(row[-1])
                new_citation = papers[row[0]]
                sum_citations += new_citation
                if old_citation != new_citation:
                    row[-1] = new_citation
                    print('Update citation from {} to {}, for paper {}'.format(
                        old_citation, new_citation, row[0]
                    ))
            else:
                print('This paper is not tracked by Google Scholar or has zero citation: ', row[0])

        print('Sum of citations: ', sum_citations)
        return headers, lines


html_path = './plt/timeline/1-citation.html'
csv_path = './plt/timeline/paper.csv'
csv_gene = './plt/timeline/paper_gene.csv'

papers = read_google_scholar_page(html_path)

headers, new_csv_data = read_my_csv_data(csv_path, papers)

with open(csv_gene, 'w', newline='') as f:
    csv_writer = csv.writer(f)
    csv_writer.writerow(headers)
    csv_writer.writerows(new_csv_data)

