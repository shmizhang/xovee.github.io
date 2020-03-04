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

    // project effects
    $('#project-title').on({
        mouseleave: function(){
            $('#project-form').hide(100)
            $('#project-title b').text('▹ Project')
            $('#project-title').css('background-color', '#f5f5f0')
        },
        mouseenter: function(){
            $('#project-form').show(100)
            $('#project-title b').text('▿ Project')
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
    
    // interest effects
    $('#interest-title').hover(function(){
        $(this).toggleClass('hover-color')
    })
    $('#interest-title').click(function(){
        if ($('#interest-title b').hasClass('visible')){
            $('#interest-title b').text('▹ Interest').removeClass('visible')
        } else {
            $('#interest-title b').text('▿ Interest').addClass('visible')
        }
        $('#interest-body').slideToggle()
    })


    // intern effects
    $('#intern-title').hover(function(){
        $(this).toggleClass('hover-color')
    })
    $('#intern-title').click(function(){
        if ($('#intern-title b').hasClass('visible')){
            $('#intern-title b').text('▹ Intern').removeClass('visible')
        } else {
            $('#intern-title b').text('▿ Intern').addClass('visible')
        }
        $('#intern-body').slideToggle()
    })

    // calculate numbers of books
    var numYears = $('#books table.book-count').length
    var numBooks = $('#books table.book-count tbody tr').length - numYears
    var avgBooks = Math.ceil(numBooks / numYears)
    $('#total-books').text(numBooks)
    $('#average-books').text(avgBooks)

    $('.book-year').each(function(){
        var tempNum = $(this).next().find('tr').length - 1
        $(this).after('<i> read '+ tempNum + ' books.</i>')
    })

})