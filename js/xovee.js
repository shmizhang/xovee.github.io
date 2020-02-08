$(document).ready(function(){
    $('form').hide()
    // $('#project-title').mouseleave(function(){
    //     $('#project-form').hide()
    // })
    // $('#project-title').mouseenter(function(){
    //     $('#project-form').show()
    // })

    // hide not selected entries
    $('tbody').hide()
    $('tbody.selected').show()


    $('#project-title').on({
        mouseleave: function(){
            $('#project-form').hide(100)
            $('#project-title b').text('► Project')
            $('#project-title').css('background-color', '#f5f5f0')
        },
        mouseenter: function(){
            $('#project-form').show(100)
            $('#project-title b').text('▼ Project')
            $('#project-title').css('background-color', '#ffffcc')
        },
    })

    // project selector
    $('#project-all').click(function(){
        $('#project-table tbody').show()
    })
    $('#project-selected').click(function(){
        $('#project-table tbody').hide()
        $('#project-table tbody.selected').show()
    })
    
})