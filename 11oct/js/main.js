/* LANGUAGE ================================================================= */
$(function() {
    $.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
        switch( data.address.country_code ){
        case 'IT':
            showItalian();
            break;
        case 'ES':
        default:
            showSpanish();
            break;
        }
    });

    $('#btnIT').click(function () {
        showItalian()
    })

    $('#btnES').click(function () {
        showSpanish()
    })
})

function showItalian(){
    document.title = 'Matrimonio Luis et Serena';
    $('.langES').hide()
    $('.langIT').show()
    $('.langIT').removeClass( 'hide' )
    $('#btnES').removeClass( 'btn-success' )
    $('#btnES').addClass( 'btn-warning' )
    $('#btnIT').removeClass( 'btn-warning' )
    $('#btnIT').addClass( 'btn-success' )
}

function showSpanish(){
    document.title = 'Boda Luis y Serena';
    $('.langIT').hide()
    $('.langES').show()
    $('.langES').removeClass( 'hide' )
    $('#btnIT').removeClass( 'btn-success' )
    $('#btnIT').addClass( 'btn-warning' )
    $('#btnES').removeClass( 'btn-warning' )
    $('#btnES').addClass( 'btn-success' )
}

/* END ====================================================================== */
