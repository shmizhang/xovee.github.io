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

    // publication effects
    $('#publication-section').hover(function(){
        $(this).toggleClass('hover-color')
    })
    $('#publication-title').click(function(){
        if ($('#publication-title b').hasClass('visible')){
            $('#publication-title b').text('▹ Publication').removeClass('visible')
        } else {
            $('#publication-title b').text('▿ Publication').addClass('visible')
        }
        $('#publication-form').slideToggle()
    })
    // $('#publication-title').on({
    //     mouseleave: function(){
    //         $('#publication-form').hide(100)
    //         $('#publication-title b').text('▹ Publication')
    //         $('#publication-title').css('background-color', '#f5f5f0')
    //     },
    //     mouseenter: function(){
    //         $('#publication-form').show(100)
    //         $('#publication-title b').text('▿ Publication')
    //         $('#publication-title').css('background-color', '#ffffcc')
    //     },
    // })

    // publication selector
    $('#publication-all').click(function(){
        $('#publication-table tbody').show()
    })
    $('#publication-selected').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.selected').show()
    })
    $('#publication-conference').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.conference').show()
    })
    $('#publication-journal').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.journal').show()
    })
    $('#publication-preprint').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.preprint').show()
    })
    $('#publication-ccf-a').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.ccf-a,#publication-table tbody.ccf-1').show()
    })
    $('#publication-ccf-b').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.ccf-b,#publication-table tbody.ccf-2').show()
    })
    $('#publication-ccf-c').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.ccf-c,#publication-table tbody.ccf-3').show()
    })
    // $('#publication-ccf-1').click(function(){
    //     $('#publication-table tbody').hide()
    //     $('#publication-table tbody.ccf-1').show()
    // })
    // $('#publication-ccf-2').click(function(){
    //     $('#publication-table tbody').hide()
    //     $('#publication-table tbody.ccf-2').show()
    // })
    // $('#publication-ccf-3').click(function(){
    //     $('#publication-table tbody').hide()
    //     $('#publication-table tbody.ccf-3').show()
    // })
    $('#publication-jcr-1').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jrc-1').show()
    })
    $('#publication-jcr-2').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jrc-2').show()
    })
    $('#publication-jcr-3').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jrc-3').show()
    })
    $('#publication-jcr-4').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jrc-4').show()
    })

    // award effects
    $('#award-title').on({
        mouseleave: function(){
            $('#award-form').hide(100)
            $('#award-title b').text('▹ Award')
            $('#award-title').css('background-color', '#f5f5f0')
            $('#award-p').hide()
        },
        mouseenter: function(){
            $('#award-form').show(100)
            $('#award-title b').text('▿ Award')
            $('#award-title').css('background-color', '#ffffcc')
            $('#award-p').show()
        },
    })

    // award selector
    $('#award-all').click(function(){
        $('#award-table tbody').show()
    })
    $('#award-selected').click(function(){
        $('#award-table tbody').hide()
        $('#award-table tbody.selected').show()
    })

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

    var pubNum = $('#publication-table tbody').length
    $('#publication-title').append('<i> of ' + pubNum + ' conference/journal papers.</i>')

})