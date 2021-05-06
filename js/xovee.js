$(document).ready(function(){
    // copyright year
    curYear = (new Date).getFullYear();
    $('footer #current-year').text(curYear)

    // show or hide links
    $('#show-links').hide()
    $('#show-links-button').click(function(){
        $('#show-links').toggle(0, function(){
            if ($.trim($('#show-links-button').text()) === 'More') {
                $('#show-links-button').text('Less');
            } else {
                $('#show-links-button').text('More');        
            }
        })
    })

    // hide news and show recent
    $('#news-lst li').hide().slice(0, 5).show()

    // hide and show divs of articles, projects, ...
    $('#undefined-content, #articles-content, #projects-content').hide()
    $('#tabs span').each(function(){
        $(this).click(function(){
            $('#undefined-content, #articles-content, #projects-content').hide()
            $('#' + $(this).attr('id') + '-content').show()
            $('#tabs span').removeClass('tab-select')
            $(this).addClass('tab-select')
        })
    })
    $('#articles').click()
    
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