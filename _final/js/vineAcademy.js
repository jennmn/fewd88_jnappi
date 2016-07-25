// --- HEADER SWAP --- //

$(window).scroll(function(){
   var sticky = $('#topMenu'),
   scroll = $(window).scrollTop();

   if($(document).scrollTop() > 150 ) {
        sticky.removeClass('large');
        sticky.addClass('small');
        // sticky.slideDown(2000);
        sticky.stop().animate({'top' : '0px'}, 500);
    }else{
        sticky.addClass('large');
        sticky.removeClass('small');
        sticky.stop().animate({'top' : '-100px'}, 500);
        sticky.removeAttr("style");
    }
});


// --- HERO TOUTS --- //
// --- pseudocode--- //
// on hover (on click for mobile?), slide in from bottom, a gradient (60% black to 0% black)
// if hover grapesTout, fade out #grapesTitle, change html of #grapesTitle to 'Learn all about the different types of grapes.', change style of #grapesTitle, fade in #grapesTitle
// if hover stylesTout, fade out #stylessTitle, change html of #stylesTitle to 'Learn all about the different styles of wine.', change style of #stylesTitle, fade in #stylessTitle
    // -- change to style -- //
    // font-size: 18px;
    // font-family: 'Rubik', Arial, sans-serif;
    // font-weight: 300;
    // letter-spacing: 1;

$('.grapesTout').hover(function(){
    // alert('test');
    $('.grapesDec').html('Learn all about the different types of grapes.');
    // $('.grapesDec').addClass('heroDec');
});




// --- PAIRING TOUTS --- //

$('.vegTout').hover(addOverlay);

function addOverlay(){
    // alert('test');
    $('.vegTout').toggleClass('vegToutAlt', 5000);
    $('#vegTitle').css('top', '28%');
    $('#vegToutText').css('opacity', '1');
}

// --- pseudocode--- //
// on hover, animate either a darker version of the image or create an overlay that animates input
// toutText fades in
// toutTitle slides up slightly

// on rollOut, reverse the above









// --- TEXT APP LINK--- //

$('#textButton').click(function(){
    alert('A link is on its way!');
    $('#confirm').css('opacity', '1');
})

// --- pseudocode--- //
// on click, determine if input has 10 numbers
// if yes, set confirmation div to visible
// if no, set alert div to visible
//     - once user starts to enter values into input again, set alert to invisible



