$(document).ready(function(){

	getPictures();

	function getPictures(){
		var queryURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyD5dj6sTAyGKxhzt9pd2gAo7Kp2JfOacLc"
	
		$.ajax({
			url: queryURL,
			method: "GET",
		})
		.done(function(response){
			console.log(response);
			imgReturn = response;
			console.log(imgReturn);
			console.log(imgReturn.result.photos[0].photo_reference);

			for(var i = 0; i<imgReturn.result.photos.length; i++){
				var photoReference = imgReturn.result.photos[i].photo_reference;

				var addImg = $("<img>");
				addImg.attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+photoReference+"&key=AIzaSyB9AoAaWYF4vAGf2GWpFH4OgXQOIoIPFok");

				$("#pictures").append(addImg);
			}
		})

	}

});