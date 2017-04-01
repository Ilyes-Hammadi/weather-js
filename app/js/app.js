import $ from 'jquery'

// Weather api key
const KEY = "782245ffa93c156b034edb59d3815fe5"

// Geolocation HTML API
if (navigator.geolocation) {
    // Take the getWeather callback
	navigator.geolocation.getCurrentPosition(getWeather);
} else {
	// In case of deny
    console.log("Can't get GEO")
}



function getWeather(position) {
    console.log(position)

    // The lat and lon that we get from the browser
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;


	// Get the data from the server
	$.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon +'&appid=' + KEY)
		.done(function (res) {
            // TODO: Parse the response here
			console.log(res)

		}).fail(function (err) {
            // This will fire in case of an error
            console.log(err)
		})

}
