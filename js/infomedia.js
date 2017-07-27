$(document).ready(function() {

// Variable to reset the results field
var resetresults = $(".results").html();

// Menu Buttons click selection

$(".music").click(function(){

	// Change button focus on click
	$('.music').addClass('active');
	$('.movies').removeClass('active');
	$('.news').removeClass('active');
	$('.gifs').removeClass('active');

	// Reset fields
	$(".results").html(resetresults);
	$(".user-input").val('');
});

$(".movies").click(function(){

	// Change button focus on click
	$('.movies').addClass('active');
	$('.music').removeClass('active');
	$('.news').removeClass('active');
	$('.gifs').removeClass('active');

	// Reset fields
	$(".results").html(resetresults);
	$(".user-input").val('');


});

$(".news").click(function(){

	// Change button focus on click
	$('.news').addClass('active');
	$('.movies').removeClass('active');
	$('.music').removeClass('active');
	$('.gifs').removeClass('active');

	// Reset fields
	$(".results").html(resetresults);
	$(".user-input").val('');
});

$(".gifs").click(function(){

	// Change button focus on click
	$('.gifs').addClass('active');
	$('.news').removeClass('active');
	$('.movies').removeClass('active');
	$('.music').removeClass('active');

	// Reset fields
	$(".results").html(resetresults);
	$(".user-input").val('');
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

	// if the music handle is selected, call its function
	if ($('.music').hasClass('active')) {
		musicSearch();
   	} // if the movie handle is selected, call its function
   	else if ($('.movies').hasClass('active')) {
   		movieSearch();
   	} // if the news handle is selected, call its function
   	else if ($('.news').hasClass('active')) {
   		newsSearch();
   	} // if the gifs handle is selected, call its function
   	else if ($('.gifs').hasClass('active')) {
   		gifSearch();
   	}

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

		// Create empty array to display Last.fm Logo
		var displaylogo = [];

		// Loop through the API musicarray - results 1 to 10
		for (var i = 0; i < 10; i++) {

			// Insert each song's image into the displaysongs array
			displaysongsleft.push("<table class='song-table'><tr><td><img class='music-pic' src=" + musicarray[i].image[1]["#text"] + "></td>");
			
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
			displaysongsright.push("<table class='song-table'><tr><td><img class='music-pic' src=" + musicarray[i].image[1]["#text"] + "></td>");
			
			// Insert song names into the displaysongs array
		    displaysongsright.push("<td><b>Song:</b> " + musicarray[i].name + "<br>");

		    // Insert artists names into the displaysongs array
		    displaysongsright.push("<b>Artist:</b> " + musicarray[i].artist + "<br>");

		    // Insert song links into the array
		    displaysongsright.push("<a href=" + musicarray[i].url +" target='_blank' class='btn btn-primary btn-xs'>More Info</a></td></tr></table><hr>");


		 };

		// Insert logo into array
		displaylogo.push("<center><img src='images/lastfm.png' width=160 height=50></center>");

		// display songs info array on page left side
		$(".left-side").html(displaysongsleft.join(""));

		// display songs info array on page right side
		$(".right-side").html(displaysongsright.join(""));

		// display logo in footer
		$(".footer").html(displaylogo.join(""));

	});

}

//===============================================================//

function movieSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();

	// Ajax call to the Movie DB API
	$.ajax({

		url: "https://api.themoviedb.org/3/search/movie?api_key=0bf8a8c93d69a18b3d61366957b2e726&query="+ searchTerm +"",
		method: "GET"


	}).done(function(response){

		//console.log(response);

		// Put the API response array into a variable
		var moviearray = response.results;

		// Create empty array to display the movie results
		var movieresults = [];

		// Loop through the 20 results of the API moviearray 
		for (var i = 0; i < 20; i++) {

			// Insert each movie's image into the results array
			movieresults.push("<table class='movie-text'><tr><td class='mobile-movie'><img class='movie-pic' src='https://image.tmdb.org/t/p/original"+ moviearray[i].poster_path +"' width=150 height=200></td>&nbsp;&nbsp;&nbsp;&nbsp;");

			// Insert each movie's title into the results array
			movieresults.push("<td class='mobile-movie top-margin'><b>Movie Title:</b> " + moviearray[i].title + "<br>");

			// Insert each movie's date into the results array
			movieresults.push("<b>Release Date:</b> " + moviearray[i].release_date + "<br>");

			// Insert each movie's overview into the results array
			movieresults.push("<b>Overview:</b> " + moviearray[i].overview + "</td></tr></table><br><hr>");

		}
		// display MovieDB icon on footer
		movieresults.push("<center><img src='images/moviedb.png' width=160 height=60></center>");

		// display movie results array on the page
		$(".results").html(movieresults.join(""));

	});

}

//===============================================================//

function newsSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();

	// Ajax call to the New York Times API
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({
		  'api-key': "575b62a9683544cebd2f87a73bf83854",
		  'q': searchTerm,
		  'sort': "newest"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {

			// Array with the API results
		  var newsarray = result.response.docs;

		  // Create empty array to store info to be displayed
		  var newsresults = [];

		  // For loop through the API results array
		  for (var i = 0; i < newsarray.length; i++) {
	
		  	// If the article has a image available, display image - otherwise display our placeholder
			if (newsarray[i].multimedia.length != 0) {

				newsresults.push("<table><tr><td><img src='http://www.nytimes.com/"+ newsarray[i].multimedia[1].url +"' width=150 height=150 class='news-image'></td>&nbsp;&nbsp;&nbsp;&nbsp;");
			} else {
				newsresults.push("<table><tr><td><img src='images/no-image.png' width=150 height=150 class='news-image'></td>&nbsp;&nbsp;&nbsp;&nbsp;");
			}

			// Insert each articles title into the results array
			newsresults.push("<td><h3>" + newsarray[i].headline.main + "</h3>");

			// Insert each articles paragraph into the results array
			newsresults.push("" + newsarray[i].lead_paragraph + "<br><br>");

			// Create button with article link
			newsresults.push("<a href=" + newsarray[i].web_url + " target='_blank' class='btn btn-primary btn-sm'>Read More</a></td></tr></table><hr>");
			
		  }
		  // display the NYT logo on page
		  newsresults.push("<center><img src='images/new-york-times.png' width=210 height=55></center>");

		  // display news results array on the page
		  $(".results").html(newsresults.join(""));

		}).fail(function(err) {
		  throw err;
		});


}

//=================================================================//

function gifSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();

	// Ajax call to the Giphy API
	$.ajax({

		url: "https://api.giphy.com/v1/gifs/search?q="+ searchTerm +"&api_key=7b327206a9284ab988a6d8be3fa003a2&limit=30",
		method: "GET"


	}).done(function(response){

		// Array with the API results
		var gifarray = response.data;
		// Empty array to store results to be displayed
		var gifresults = [];

		// Loop through API results array
		for (var i = 0; i < gifarray.length; i++) {

			// add all GIFs to the empty array
			gifresults.push("&nbsp;&nbsp;<img src='"+ gifarray[i].images.fixed_width.url +"' class='gif-images'>&nbsp;&nbsp;&nbsp;&nbsp;");

		}
			// display GIPHY logo
		gifresults.push("<hr><center><img src='images/giphy.png' width=160 height=45></center>");

		// display GIFs results array on the page
		$(".results").html(gifresults.join(""));

	});

}
});