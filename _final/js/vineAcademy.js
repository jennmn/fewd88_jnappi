
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
    menuBtnFixedClicked = false;
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
    if($(window).width() >= 875 ){
        $('.responsiveMenu-fixed').hide();
    }
})


var menuBtnClicked = false;

$('.menuBtn').click(function(){
    if(menuBtnClicked === false){
        $('.responsiveMenu')
            .removeClass('fadeOutRight')
            .addClass('animated fadeInRight')
            .show();
        menuBtnClicked = true;
    }else if (menuBtnClicked === true) {
        $('.responsiveMenu')
            .removeClass('fadeInRight')
            .addClass('fadeOutRight');
        menuBtnClicked = false;
    }
});


var menuBtnFixedClicked = false;

$('.menuBtn-fixed').click(function(){
    if(menuBtnFixedClicked === false){
        $('.responsiveMenu-fixed')
            .removeClass('fadeOutRight')
            .addClass('animated fadeInRight')
            .show();
        menuBtnFixedClicked = true;
    }else if (menuBtnFixedClicked === true) {
        $('.responsiveMenu-fixed')
            .removeClass('fadeInRight')
            .addClass('fadeOutRight');
        menuBtnFixedClicked = false;
    }
});









// --- PAIRING TOUTS --- //

$('.vegTout').hover(addOverlay);

function addOverlay(){
    // alert('test');
    $('.vegTout')
        .toggleClass('vegToutAlt');
    $('.vegToutAlt')
        .addClass('fadeIn');
//     $('#vegTitle').css('top', '28%');
//     $('#vegToutText').css('opacity', '1');
}





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



