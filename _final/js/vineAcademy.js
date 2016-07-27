
$(document).ready(function () {
    // console.logs the window.width
    $(window).resize(function () {
        console.log($(window).width())
    })
})


// -- collapsing nav -- //
$(window).scroll(function(){
  if($(document).scrollTop()>150){ 
      console.log("scroll > 150")
      $('#fixedHeader').removeClass("fixed")
      //$('#topMenu2').stop().animate({"margin-top": "0px"}, 500)
  }else{  
  console.log("scroll < 250")   
   $('#fixedHeader').addClass("fixed")
   //$('#topMenu2').stop().animate({"margin-top": "-150px"},500)
  }
});










// --- HERO TOUTS --- //
// --- pseudocode--- //
// on hover (on click for mobile?), slide in from bottom, a gradient (60% black to 0% black)
// if hover grapesTout, fade out #grapesTitle, change html of #grapesTitle to 'Learn all about the different types of grapes.', change style of #grapesTitle, fade in #grapesTitle
// if hover stylesTout, fade out #stylessTitle, change html of #stylesTitle to 'Learn all about the different styles of wine.', change style of #stylesTitle, fade in #stylessTitle

// $('.grapesTout').hover(function(){
//     // alert('test');
//     $('.grapesDec').css('opacity', '1');
// });

// $('.stylesTout').hover(function(){
//     $('.stylesDec').css('opacity', '1');
// });




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



