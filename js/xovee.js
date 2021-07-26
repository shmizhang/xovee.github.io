$(document).ready(function(){
    // copyright year and update date
    curYear = (new Date).getFullYear();
    document.getElementById('current-year').innerHTML = curYear;
    const curDate = Date.now();
    const updateDate = new Date(curDate).toDateString().slice(4);
    document.getElementById('update-date').innerHTML = updateDate;

    // hide news and show recent
    const newestNews = document.querySelectorAll('#news dd, dt');
    newestNews.forEach(element => element.style.display = 'none');
    for (let i = 0; i < 10; i++) {
        newestNews[i].style.display = '';
    }
})