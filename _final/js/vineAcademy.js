
$(document).ready(function () {
    // console.logs the window.width
    $(window).resize(function () {
        console.log($(window).width())
    })
})



// -- collapsing nav -- //
$(window).scroll(function(){
  if($(document).scrollTop()>150){ 
    // console.log("scroll > 150")
    $('.fixedHeader').removeClass("fixed")
  }else{    
    $('.fixedHeader').addClass("fixed")
    $('.responsiveMenu-fixed').hide();
}
});



// -- responsive nav -- //
$(window).resize(function () {
    if($(window).width() >= 700 ){
        $('.responsiveMenu').hide();
    }
})

$(window).resize(function () {
    if($(window).width() >= 900 ){
        $('.responsiveMenu-fixed').hide();
    }
})

$('#menuBtn').click(function(){
    $('.responsiveMenu').slideToggle();
});

$('#menuBtn-fixed').click(function(){
    $('.responsiveMenu-fixed').slideToggle();
});





// -- responsive nav from fixed - NOT SHOWING-- //
// $(window).resize(function () {
//     console.log($(window).width())
//     if($(window).width() <= 560 ){
//         // $('.fixedHeader').removeClass("fixed")
//         $('.responsiveMenu').hide();
//     }
// })




// --- PAIRING TOUTS --- //

// $('.vegTout').hover(addOverlay);

// function addOverlay(){
//     // alert('test');
//     $('.vegTout').toggleClass('vegToutAlt', 5000);
//     $('#vegTitle').css('top', '28%');
//     $('#vegToutText').css('opacity', '1');
// }

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



