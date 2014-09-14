/* LANGUAGE ================================================================= */
$(function() {
    var currentLang = "ES"
    var paramLang = getUrlVars()["lang"]

    if( !paramLang ){
        $.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
            selectLang( data.address.country_code )
        });
    }else{
        selectLang( paramLang )
    }

    $('#btnIT').click(function () {
        showItalian()
    })

    $('#btnES').click(function () {
        showSpanish()
    })
})

function goLink( link ){
    var params = { lang:currentLang };
    var str = jQuery.param( params );
    window.location = link+"?"+str
}

function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function selectLang( lang ){
    switch( lang ){
    case 'IT':
        showItalian();
        break;
    case 'ES':
    default:
        showSpanish();
        break;
    }
}

function showItalian(){
    currentLang = "IT"
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
    currentLang = "ES"
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
