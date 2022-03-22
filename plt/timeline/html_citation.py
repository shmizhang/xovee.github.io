from bs4 import BeautifulSoup
import csv


def read_google_scholar_page(path):

    with open(path, 'r') as f:
        page = f.read()

    soup = BeautifulSoup(page, 'html.parser')

    all_titles = [title.text for title in soup.find_all(class_='gsc_a_at')]

    all_citations = [citation.text.strip() for citation in soup.find_all(class_='gsc_a_ac')]
    all_citations = [int(citation) if citation != '' else 0 for citation in all_citations ]

    paper_dict = {title: citation for title, citation in zip(all_titles, all_citations)}


def read_my_csv_data(path):

    print('hi')


html_path = './citation.html'
csv_path = './paper.csv'

read_google_scholar_page(html_path)

