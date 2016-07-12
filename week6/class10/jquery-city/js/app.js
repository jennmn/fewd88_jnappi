// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// var bigImg = $('#bigimage');

// $('#first').click(function(){
// 	bigImg.attr('src', 'img/1.jpg');
// });

// $('#second').click(function(){
// 	bigImg.attr('src', 'img/2.jpg');
// });

// $('#third').click(function(){
// 	bigImg.attr('src', 'img/3.jpg');
// });

// $('#fourth').click(function(){
// 	bigImg.attr('src', 'img/4.jpg');
// });





//CODE FROM CLASS - alternate way

// var currentImage;
// var bigImg = $('#bigimage');

// $('#first').click(function(){
// 	currentImage = $('#first').attr('src');
// 	bigImg.attr('src', currentImage);
// });

// $('#second').click(function(){
// 	currentImage = $('#second').attr('src');
// 	bigImg.attr('src', currentImage);
// });

// $('#third').click(function(){
// 	currentImage = $('#third').attr('src');
// 	bigImg.attr('src', currentImage);
// });

// $('#fourth').click(function(){
// 	currentImage = $('#fourth').attr('src');
// 	bigImg.attr('src', currentImage);
// });


// A SHORTER WAY

var currentImage;
var bigImg = $('#bigimage');

$('.thumb').click(function(){
	currentImage = $(this).attr('src');
	bigImg.attr('src', currentImage);
});