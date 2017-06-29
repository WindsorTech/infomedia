$(document).ready(function() {

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


$(".fire").click(function(){

	var searchTerm = $(".user-input").val();

	//console.log(searchTerm);

	$.ajax({

		url: "http://ws.audioscrobbler.com/2.0/?method=track.search&limit=10&track=" + searchTerm + "&api_key=3ed080989b346fe17d267cb64b68d169&format=json",
		method: "GET"

	}).done(function(response){

		var musicarray = response.results.trackmatches.track;

		var displaymusic = [];

		 for (var i = 0; i < musicarray.length; i++) {

		    displaymusic.push('<p>' + musicarray[i].artist + '</p>');

		  }

		$(".results").html(displaymusic.join(""));

		console.log(response);

	});

});



});


