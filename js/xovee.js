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
    
})