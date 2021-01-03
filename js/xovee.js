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
    $('#show-links').hide()
    $('#publication-rank').hide()

    // publication effects
    $('#publication-section').hover(function(){
        $(this).toggleClass('hover-color')
        if (!$('#publication-title b').hasClass('visible')){
            $(this).toggleClass('selector-border'); 
            $('#publication-section').toggleClass('form-hover-color'); 
        }
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
    $('#publication-recent5').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody').slice(0, 5).show()
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
    $('#publication-corresponding').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.corresponding').show()
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
        $('#publication-table tbody.jcr-1').show()
    })
    $('#publication-jcr-2').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jcr-2').show()
    })
    $('#publication-jcr-3').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jcr-3').show()
    })
    $('#publication-jcr-4').click(function(){
        $('#publication-table tbody').hide()
        $('#publication-table tbody.jcr-4').show()
    })

    // award effects
    $('#award-section').hover(function(){
        $(this).toggleClass('hover-color')
        if (!$('#award-title b').hasClass('visible')){
            $(this).toggleClass('selector-border'); 
            $('#award-section').toggleClass('form-hover-color')
        }
    })
    $('#award-title').click(function(){
        if ($('#award-title b').hasClass('visible')){
            $('#award-title b').text('▹ Distinction').removeClass('visible')
        } else {
            $('#award-title b').text('▿ Distinction').addClass('visible')
        }
        $('#award-form').slideToggle()
    })

    // award selector
    $('#award-all').click(function(){
        $('#award-table tbody').show()
    })
    $('#award-selected').click(function(){
        $('#award-table tbody').hide()
        $('#award-table tbody.selected').show()
    })

    
    // professional service and membership

    // service effects
    $('#service-section').hover(function(){
        if (!$('#service-title b').hasClass('visible')){
            $(this).toggleClass('selector-border'); 
            $('#service-section').toggleClass('form-hover-color'); 
        }
        $(this).toggleClass('hover-color')
    })

    $('#service-title').click(function(){
        if ($('#service-title b').hasClass('visible')){
            $('#service-title b').text('▹ Service & Membership').removeClass('visible')
        } else {
            $('#service-title b').text('▿ Service & Membership').addClass('visible')
        }
        $('#service-body').slideToggle()
        $('#service-form').slideToggle()
        $('#membership-body').slideToggle()
    })


    // review selector
    $('#review-table tr').hide()
    $('#review-table tr.select').show()
    $('#review-all').click(function(){
        $('#review-table tr').show()
    })
    $('#review-selected').click(function(){
        $('#review-table tr').hide()
        $('#review-table tr.select').show()
    })

    // membership selector
    $('#membership-table tbody').hide()
    $('#membership-table tbody.select').show()
    $('#membership-all').click(function(){
        $('#membership-table tbody').show()
    })
    $('#membership-selected').click(function(){
        $('#membership-table tbody').hide()
        $('#membership-table tbody.select').show()
    })


    // project effects
    $('#project-section').hover(function(){
        $(this).toggleClass('hover-color')
        if (!$('#project-section b').hasClass('visible')){
            $(this).toggleClass('selector-border'); 
            $('#project-section').toggleClass('form-hover-color'); 
        }
    })
    $('#project-title').click(function(){
        if ($('#project-title b').hasClass('visible')){
            $('#project-title b').text('▹ Project').removeClass('visible')
        } else {
            $('#project-title b').text('▿ Project').addClass('visible')
        }
        $('#project-form').slideToggle()
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
        if (!$('#intern-title b').hasClass('visible')){
            $(this).toggleClass('selector-border'); 
            $('#intern-title').toggleClass('form-hover-color'); 
        }
        $(this).toggleClass('hover-color'); 
    })
    $('#intern-title').click(function(){
        if ($('#intern-title b').hasClass('visible')){
            $('#intern-title b').text('▹ Intern').removeClass('visible')
        } else {
            $('#intern-title b').text('▿ Intern').addClass('visible')
        }
        $('#intern-body').slideToggle()
    })

    // others effects
    $('#others-title').hover(function(){
        if (!$('#others-title b').hasClass('visible')){
            $(this).toggleClass('selector-border'); 
            $('#others-title').toggleClass('form-hover-color'); 
        }
        $(this).toggleClass('hover-color')
    })
    $('#others-title').click(function(){
        if ($('#others-title b').hasClass('visible')){
            $('#others-title b').text('▹ Others').removeClass('visible')
        } else {
            $('#others-title b').text('▿ Others').addClass('visible')
        }
        $('#others-body').slideToggle()
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

    // show more links or hide
    $('#show-links-button').click(function(){
        $('#show-links').toggle()
    })
    $('#show-publication-rank-button').click(function(){
        $('#publication-rank').toggle()
    })

    // max over all reviews
    // calculate max review times for journal/conference
    var numReviews = [];
    $('#review-table tr').each(function(){
        numReviews.push(Number($(this).find('td').eq(1).text()))
    })
    // alert(Math.max.apply(Math, maxNumReviews))

    maxNumReviews = Math.max.apply(Math, numReviews)

    // set the max and value of the review progress
    $('#review-all').click(function(){
        $('#review-table tr').each(function(){
            $(this).find('progress').attr('max', maxNumReviews)
            $(this).find('progress').attr('value', Number($(this).find('td').eq(1).text()))
        })
    })


    // max over selected reviews
    // calculate max review times for journal/conference
    var numSelectedReviews = [];
    $('#review-table tr.select').each(function(){
        numSelectedReviews.push(Number($(this).find('td').eq(1).text()))
    })
    // alert(Math.max.apply(Math, maxNumReviews))

    maxNumSelectedReviews = Math.max.apply(Math, numSelectedReviews)

    // set the max and value of the review progress
    $('#review-selected').click(function(){
        $('#review-table tr.select').each(function(){
            $(this).find('progress').attr('max', maxNumSelectedReviews)
            $(this).find('progress').attr('value', Number($(this).find('td').eq(1).text()))
        })
    }).click()
    
    

    // prevent table cell line-break
    $('#review-table tr').each(function(){
        $(this).find('td').eq(1).css('white-space', 'nowrap')
    })
})