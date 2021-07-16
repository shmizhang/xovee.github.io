$(document).ready(function(){
    // copyright year
    curYear = (new Date).getFullYear();
    $('footer #current-year').text(curYear)

    // hide news and show recent
    $('#news dd, dt').hide().slice(0, 10).show()
    
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