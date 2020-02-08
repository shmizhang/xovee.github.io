$(document).ready(function(){
    $('form').hide()
    // $('#project-title').mouseleave(function(){
    //     $('#project-form').hide()
    // })
    // $('#project-title').mouseenter(function(){
    //     $('#project-form').show()
    // })
    $('#project-title').mouseleave(function(){
        $('#project-form').slideUp()
        $('#project-title b').text('► Project')
    })
    $('#project-title').mouseenter(function(){
        $('#project-form').slideDown()
        $('#project-title b').text('▼ Project')
    })
})