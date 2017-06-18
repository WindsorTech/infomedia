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

	// $('.results').text(searchTerm);

	// console.log(searchTerm);

	spotifyCall(searchTerm);

});

function spotifyCall(searchTerm) {

    spotify.search({ type: 'track', query: searchTerm }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log('Artist: ' + data.tracks.items[0].album.artists[0].name);
    console.log('Song Name: ' + data.tracks.items[0].name);
    console.log('Album: ' + data.tracks.items[0].album.name);
    console.log('Preview Link: ' + data.tracks.items[0].preview_url);   
});

}





});


