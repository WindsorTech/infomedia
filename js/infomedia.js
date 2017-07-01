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

//=================================================//

// On click of the Submit button
$(".fire").click(function(){

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();

	// Ajax call to Last.fm API
	$.ajax({

		url: "https://ws.audioscrobbler.com/2.0/?method=track.search&limit=10&track="+ searchTerm +"&api_key=3ed080989b346fe17d267cb64b68d169&format=json",
		method: "GET"

	}).done(function(response){

		// Put the API response array into a variable
		var musicarray = response.results.trackmatches.track;

		// Create empty array to insert songs info
		var displaysongs = [];

		var imagearray = [];

		// Loop through the API musicarray
		for (var i = 0; i < musicarray.length; i++) {

			imagearray.push(musicarray[i].image[0]);
			
			// Insert song names into the displaysongs array
		    displaysongs.push("<b>Song:</b> " + musicarray[i].name + " - ");

		    // Insert artists names into the displaysongs array
		    displaysongs.push("<b>Artist:</b> " + musicarray[i].artist + " - ");

		    // Insert song links into the array
		    displaysongs.push("<b><a href=" + musicarray[i].url +" target=_blank>Click here</a></b> to play this song!<br><br>");


		    //displaysongs.push("<b>Image:</b> " + musicarray[i].image[3] + "<br><br>");

		 };


		$(".results").html(displaysongs.join(""));

		//console.log(displaysongs);

		console.log(response);

		console.log(imagearray);

	});

});



});


