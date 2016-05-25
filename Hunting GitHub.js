// Note that you will have to set up your html around this. This is just the JS code that will go in your script.js file
// Don't forget to get JQuery!
// Below we are asking JQuery to send a GET Ajax request to the "https://api.github.com/users/(your user name)" URL and we<br>// are passing it a "displayName" function to run as soon as the Github API sends us a response.
// $.get("https://api.github.com/users/(your user name)", displayName)
// // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
// function displayName(data) {
//   console.log(data);
// }

$(document).ready(function(){

	$('button').on('click',function(){

	    $.get("https://api.github.com/users/jmleszczynski", displayName)
	    function displayName(data) {
			//console.log(data);
			$('button').append('<p class="name">' + data.name + '</p>');

		}
	
	});

});