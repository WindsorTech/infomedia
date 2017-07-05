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

// If user presses the Enter key instead of Submit button
$(".user-input").on("keydown", function(e) {

		// if the key is Enter
        if (e.keyCode == 13) {

        	// Fire the button click
        	$(".fire").click();

        	return false;
        }
});

// On click of the Submit button
$(".fire").click(function(){

	// call the musicSearch function
	musicSearch();

});


//==========================================//

function musicSearch() {

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

		// Loop through the API musicarray
		for (var i = 0; i < musicarray.length; i++) {

			// Insert each song's image into the displaysongs array
			displaysongs.push("<table class='tablez'><tr><td><img src=" + musicarray[i].image[1]["#text"] + ">&nbsp;&nbsp;</td>");
			
			// Insert song names into the displaysongs array
		    displaysongs.push("<td><b>Song:</b> " + musicarray[i].name + "<br>");

		    // Insert artists names into the displaysongs array
		    displaysongs.push("<b>Artist:</b> " + musicarray[i].artist + "<br>");

		    // Insert song links into the array
		    displaysongs.push("<a href=" + musicarray[i].url +" target='_blank' class='btn btn-primary btn-xs'>More Info</a></td></tr></table><hr>");


		 };


		$(".results").html(displaysongs.join(""));

		//console.log(displaysongs);

		console.log(response);

		console.log(imagearray);

	});


}



});


