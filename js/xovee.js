$(document).ready(function(){
    // show or hide links
    $('#show-links').hide()
    $('#show-links-button').click(function(){
        $('#show-links').toggle(0, function(){
            if ($.trim($('#show-links-button').text()) === 'Show') {
                $('#show-links-button').text('Hide');
            } else {
                $('#show-links-button').text('Show');        
            }
        })
    })

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
    
})