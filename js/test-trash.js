function newsSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();


	$.ajax({

		url: "http://webhose.io/filterWebContent?token=c537c39b-7fba-4903-8a9d-32cb4221dbfd&format=json&ts=1499584225000&sort=relevancy&q="+ searchTerm +"%20language%3Aenglish",
		method: "GET"


	}).done(function(response){

		console.log(response);

		var newsarray = response.posts;

		var newsresults = [];

		for (var i = 0; i < 20; i++) {

			newsresults.push("<h2><b>" + newsarray[i].title + "</b></h2><br><br>");

			newsresults.push("<img src='"+ newsarray[i].thread.main_image +"' width=400 height=300><br>");
			
			newsresults.push("<b>Link for More:</b> " + newsarray[i].url + "<br><hr><br>");


		}

		$(".results").html(newsresults.join(""));

	});



}

//==============================================================//
//==============================================================//
//==============================================================//

function newsSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();


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
		  
		  console.log(result);

		  var newsarray = result.response.docs;

		  var newsresults = [];

		  for (var i = 0; i < newsarray.length; i++) {

		  	// Insert each movie's image into the results array
			newsresults.push("<table><tr><td><img src='https://www.nytimes.com/"+ newsarray[i].multimedia[1].url +"'></td>&nbsp;&nbsp;&nbsp;&nbsp;");

			// Insert each movie's title into the results array
			newsresults.push("<td><b>Title:</b> " + newsarray[i].headline.main + "<br>");

			// Insert each movie's date into the results array
			newsresults.push("<b>what:</b> " + newsarray[i].lead_paragraph + "<br>");

			// Insert each movie's overview into the results array
			// movieresults.push("<b>Overview:</b> " + moviearray[i].overview + "</td></tr></table><br><hr>");

		  }

		  $(".results").html(newsresults.join(""));

		}).fail(function(err) {
		  throw err;
		});


}

//===============================================================//
//===============================================================//

function newsSearch() {

	// Get the user input in text field
	var searchTerm = $(".user-input").val().trim();

	// Ajax call to the Movie DB API
	$.ajax({

		url: "https://content.guardianapis.com/search?q="+ searchTerm +"&api-key=1f2f58f7-9d5b-48c6-b4b4-6bf5b61afba3",
		method: "GET"


	}).done(function(response){

		console.log(response);

	});


}