
	const token = "pk.eyJ1IjoiY3J1Ynk5MzM5IiwiYSI6ImNrcHBuODQ2bTA3dDkyd2w3eXRqemt4ZDgifQ.gfcDZ2mHj-bZDUVbLMwI4w"
	mapboxgl.accessToken = token

	var map = new mapboxgl.Map({
	container: 'map',
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-95.5537, 29.7037],
	zoom: 5
});

	var restaurantArr = [
	{
		address: "9889 Bellaire Blvd Suite C317, Houston, TX 77036",
		popUp: "<p>GO GO Curry,9889 Bellaire Blvd Suite C317, Houston, TX 77036</p>"
	},
	{
		address: "1242 Babcock Rd, San Antonio, TX 78201",
		popUp: "<p>Mi Sierra Jalisco,1242 Babcock Rd, San Antonio, TX 78201</p>"
	},
	{
		address: "9030 Wurzbach Rd, San Antonio, TX 78240",
		popUp: "<p>Fujiya Japenese Garden,9030 Wurzbach Rd, San Antonio, TX 78240</p>"
	}
	];


	restaurantArr.forEach(function (place) {
	geocode(place.address, token)
		.then(function (location) {
			var marker = new mapboxgl.Marker()
				.setLngLat(location)
				.addTo(map);

			var popup = new mapboxgl.Popup().setHTML(place.popUp)

			marker.setPopup(popup)
		})
})


