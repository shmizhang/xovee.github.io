$(document).ready(function(){
    // copyright year and update date
    curYear = (new Date).getFullYear();
    $('footer #current-year').text(curYear)
    const curDate = Date.now()
    const updateDate = new Date(curDate).toDateString().slice(4)
    $('footer #update-date').text(updateDate)

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

    // canv
    $('#webweb-menu').hide()
    $('#show-all-names').click(function(){
        $('#showNodeNames-widget').click()
    })
    // $('#show-all-names').click()
    $('#show-frequent-co-authors').click(function(){
        $('#showFrequentCoAuthors-widget').click()
    })

    $('#nameToMatch-widget').prependTo('#show-certain-author')
})