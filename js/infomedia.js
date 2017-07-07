$(document).ready(function() {

$(".footer").hide();

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


//=================================================//

function musicSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();

	// Ajax call to Last.fm API
	$.ajax({

		url: "https://ws.audioscrobbler.com/2.0/?method=track.search&limit=20&track="+ searchTerm +"&api_key=3ed080989b346fe17d267cb64b68d169&format=json",
		method: "GET"

	}).done(function(response){

		// Put the API response array into a variable
		var musicarray = response.results.trackmatches.track;

		// Create empty array to display songs on left side
		var displaysongsleft = [];

		// Create empty array to display songs on right side
		var displaysongsright = [];

		// Loop through the API musicarray - results 1 to 10
		for (var i = 0; i < 10; i++) {

			// Insert each song's image into the displaysongs array
			displaysongsleft.push("<table class='song-table'><tr><td><img src=" + musicarray[i].image[1]["#text"] + ">&nbsp;&nbsp;&nbsp;</td>");
			
			// Insert song names into the displaysongs array
		    displaysongsleft.push("<td><b>Song:</b> " + musicarray[i].name + "<br>");

		    // Insert artists names into the displaysongs array
		    displaysongsleft.push("<b>Artist:</b> " + musicarray[i].artist + "<br>");

		    // Insert song links into the array
		    displaysongsleft.push("<a href=" + musicarray[i].url +" target='_blank' class='btn btn-primary btn-xs'>More Info</a></td></tr></table><hr>");


		 };

		 // Loop through the API musicarray - results 10 to 20
		for (var i = 10; i < 20; i++) {

			// Insert each song's image into the displaysongs array
			displaysongsright.push("<table class='song-table'><tr><td><img src=" + musicarray[i].image[1]["#text"] + ">&nbsp;&nbsp;</td>");
			
			// Insert song names into the displaysongs array
		    displaysongsright.push("<td><b>Song:</b> " + musicarray[i].name + "<br>");

		    // Insert artists names into the displaysongs array
		    displaysongsright.push("<b>Artist:</b> " + musicarray[i].artist + "<br>");

		    // Insert song links into the array
		    displaysongsright.push("<a href=" + musicarray[i].url +" target='_blank' class='btn btn-primary btn-xs'>More Info</a></td></tr></table><hr>");


		 };

		// display songs info array on page left side
		$(".left-side").html(displaysongsleft.join(""));

		// display songs info array on page right side
		$(".right-side").html(displaysongsright.join(""));

		console.log(response);

		console.log(imagearray);

	});

	$(".footer").show();

}



});


