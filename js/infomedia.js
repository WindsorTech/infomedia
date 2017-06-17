$(document).ready(function() {

var searchTerm;

// Menu Buttons click selection
$(".movies").click(function(){

	$('.movies').addClass('active');
	$('.music').removeClass('active');
	$('.news').removeClass('active');
});

$(".music").click(function(){

	$('.music').addClass('active');
	$('.movies').removeClass('active');
	$('.news').removeClass('active');
});

$(".news").click(function(){

	$('.news').addClass('active');
	$('.movies').removeClass('active');
	$('.music').removeClass('active');
});


$(".btn-success").click(function(){

	searchTerm = $(".user-input").val();

	$('.results').text(searchTerm);

	console.log(searchTerm);

});





});


