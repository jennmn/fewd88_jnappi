
$(document).ready(function () {

    // Instantiate MixItUp:
    // $('#cards').mixItUp();

    // console.logs the window.width
    $(window).resize(function () {
        console.log($(window).width())
    })
})


// ---------------------- HEADER ---------------------- //


// -- collapsing nav -- //
// if (window.location.pathname == '../index.html') {
    $(window).scroll(function(){
          if($(document).scrollTop()>150){ 
            // console.log("scroll > 150")
            $('.fixedHeader').removeClass("fixed")
            menuBtnFixedClicked = false;
          }else{    
            $('.fixedHeader').addClass("fixed")
            $('.responsiveMenu-fixed').hide();
        }
    });
// }



// -- responsive nav -- //
$(window).resize(function () {
    if($(window).width() >= 700 ){
        $('.responsiveMenu').hide();
    }
})

$(window).resize(function () {
    if($(window).width() >= 875 ){
        $('.responsiveMenu-fixed').hide();
    }
});


var menuBtnClicked = false;

$('.menuBtn').click(function(){
    if(menuBtnClicked === false){
        $('.responsiveMenu')
            .removeClass('fadeOutLeft')
            .addClass('animated fadeInLeft')
            .show();
        menuBtnClicked = true;
    }else if (menuBtnClicked === true) {
        $('.responsiveMenu')
            .removeClass('fadeInLeft')
            .addClass('fadeOutLeft');
        menuBtnClicked = false;
    }
});


var menuBtnFixedClicked = false;

$('.menuBtn-fixed').click(function(){
    if(menuBtnFixedClicked === false){
        $('.responsiveMenu-fixed')
            .removeClass('fadeOutLeft')
            .addClass('animated fadeInLeft')
            .show();
        menuBtnFixedClicked = true;
    }else if (menuBtnFixedClicked === true) {
        $('.responsiveMenu-fixed')
            .removeClass('fadeInLeft')
            .addClass('fadeOutLeft');
        menuBtnFixedClicked = false;
    }
});

// logo animation //
$('.pulseAnimation').hover(function(){
    $('.pulseAnimation').addClass('animated pulse');
});




// --------------------- HERO TOUTS ---------------------- //

$('.grapesTout')
        .mouseenter(function(){
            $('.grapesDek').css('opacity: 1')
            $('.grapesDek').removeClass('fadeOutDown')
            $('.grapesDek').addClass('animated fadeInUp');
        })
        .mouseleave(function(){
            $('.grapesDek').css('opacity: 0')
            $('.grapesDek').removeClass('fadeInUp')
            $('.grapesDek').addClass('fadeOutDown');
        })

$('.stylesTout')
        .mouseenter(function(){
            $('.stylesDek').css('opacity: 1')
            $('.stylesDek').removeClass('fadeOutDown')
            $('.stylesDek').addClass('animated fadeInUp');
        })
        .mouseleave(function(){
            $('.stylesDek').css('opacity: 0')
            $('.stylesDek').removeClass('fadeInUp')
            $('.stylesDek').addClass('fadeOutDown');
        })


// --------------------- PAIRING TOUTS ---------------------- //


if($(window).width() > 561 ){
    $('#vegTout.img')
        .mouseenter(function(){
            $(this).addClass('hover')
            $('#vegTout .pairingToutTitle').removeClass('fadeIn')
            $('#vegTout .pairingToutTitle').addClass('animated fadeOut');
        })
        .mouseleave(function(){
            $(this).removeClass('hover')
            $('#vegTout .pairingToutTitle').removeClass('fadeOut')
            $('#vegTout .pairingToutTitle').addClass('fadeIn');
        })
     $('#chickenTout.img')
        .mouseenter(function(){
            $(this).addClass('hover')
            $('#chickenTout .pairingToutTitle').removeClass('fadeIn')
            $('#chickenTout .pairingToutTitle').addClass('animated fadeOut');
        })
        .mouseleave(function(){
            $(this).removeClass('hover')
            $('#chickenTout .pairingToutTitle').removeClass('fadeOut')
            $('#chickenTout .pairingToutTitle').addClass('fadeIn');
        })       
    $('#chocTout.img')
        .mouseenter(function(){
            $(this).addClass('hover')
            $('#chocTout .pairingToutTitle').removeClass('fadeIn')
            $('#chocTout .pairingToutTitle').addClass('animated fadeOut');
        })
        .mouseleave(function(){
            $(this).removeClass('hover')
            $('#chocTout .pairingToutTitle').removeClass('fadeOut')
            $('#chocTout .pairingToutTitle').addClass('fadeIn');
        })
}

// $(window).resize(function () {
//     if($(window).width() > 561 ){
//         $('#vegTout.img')
//             .mouseenter(function(){
//                 $(this).addClass('hover')
//                 $('#vegTout .pairingToutTitle').removeClass('animated fadeIn')
//                 $('#vegTout .pairingToutTitle').addClass('animated fadeOut');
//             })
//             .mouseleave(function(){
//                 $(this).removeClass('hover')
//                 $('#vegTout .pairingToutTitle').removeClass('animated fadeOut')
//                 $('#vegTout .pairingToutTitle').addClass('animated fadeIn');
//             })
//          $('#chickenTout.img')
//             .mouseenter(function(){
//                 $(this).addClass('hover')
//                 $('#chickenTout .pairingToutTitle').removeClass('animated fadeIn')
//                 $('#chickenTout .pairingToutTitle').addClass('animated fadeOut');
//             })
//             .mouseleave(function(){
//                 $(this).removeClass('hover')
//                 $('#chickenTout .pairingToutTitle').removeClass('animated fadeOut')
//                 $('#chickenTout .pairingToutTitle').addClass('animated fadeIn');
//             })       
//         $('#chocTout.img')
//             .mouseenter(function(){
//                 $(this).addClass('hover')
//                 $('#chocTout .pairingToutTitle').removeClass('animated fadeIn')
//                 $('#chocTout .pairingToutTitle').addClass('animated fadeOut');
//             })
//             .mouseleave(function(){
//                 $(this).removeClass('hover')
//                 $('#chocTout .pairingToutTitle').removeClass('animated fadeOut')
//                 $('#chocTout .pairingToutTitle').addClass('animated fadeIn');
//             })
//     }
// });

$(window).resize(function () {
    if($(window).width() <= 560 ){
        $('.img').removeClass('hover')
        $('#vegTout h2').removeClass('pairingToutTitle')
        $('#chickenTout h2').removeClass('pairingToutTitle')
        $('#chocTout h2').removeClass('pairingToutTitle')
    }
})




// --------------------- TEXT APP LINK---------------------- //

$('#textButton').click(function(){
    // alert('A link is on its way!');
    $('#alertBox')
        .css('opacity', '1')
        .css('color', 'red')
        // .html('Thank you. Check your phone for a download link.')
        .html('You did not enter a valid phone number.');
})











// ---------------- GRAPE CARDS FILTERING------------------- //

$('#allTypes').click(function(){
    $(this).addClass('filterSelected')
    $('#redTypes').removeClass('filterSelected')
    $('#whiteTypes').removeClass('filterSelected')
    $('#barbera').show();
    $('#cabfranc').show();
    $('#cabernet').show();
    $('#corvina').show();
    $('#chardonnay').show();
    $('#cheninBlanc').show();
    $('#dolcetto').show();
    $('#gewurtztraminer').show();
    $('#grenacheBlanc').show();
})

$('#whiteTypes').click(function(){
    $(this).addClass('filterSelected')
    $('#redTypes').removeClass('filterSelected')
    $('#allTypes').removeClass('filterSelected')
    $('#chardonnay').show();
    $('#cheninBlanc').show();
    $('#gewurtztraminer').show();
    $('#grenacheBlanc').show();
    $('#barbera').hide();
    $('#cabfranc').hide();
    $('#cabernet').hide();
    $('#corvina').hide();
    $('#dolcetto').hide();
})

$('#redTypes').click(function(){
    $(this).addClass('filterSelected')
    $('#whiteTypes').removeClass('filterSelected')
    $('#allTypes').removeClass('filterSelected')
    $('#barbera').show();
    $('#cabfranc').show();
    $('#cabernet').show();
    $('#corvina').show();
    $('#dolcetto').show();
    $('#chardonnay').hide();
    $('#cheninBlanc').hide();
    $('#gewurtztraminer').hide();
    $('#grenacheBlanc').hide();
})

