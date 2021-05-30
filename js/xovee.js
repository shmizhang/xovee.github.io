$(document).ready(function(){
    // copyright year
    curYear = (new Date).getFullYear();
    $('footer #current-year').text(curYear)

    // hide news and show recent
    $('#news-lst li').hide().slice(0, 5).show()
    
    // show only selected articles
    $('#article-selected').click(function(){
        $('#articles-content p').hide()
        $('#articles-content p.selected').show()
    })
    $('#article-all').click(function(){
        $('#articles-content p').show()
    })
    $('#article-selected').click()
})