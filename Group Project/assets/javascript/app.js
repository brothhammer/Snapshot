

// (function() {
//     var cors_api_host = 'cors-anywhere.herokuapp.com';
//     var cors_api_url = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=$X1-ZWz1fzlt3e34sr_76gmj&address=$2114+Bigelow+Ave&citystatezip=$Seattle%2C+WA" + cors_api_host + '/';
//     var slice = [].slice;
//     var origin = window.location.protocol + '//' + window.location.host;
//     var open = XMLHttpRequest.prototype.open;
//     XMLHttpRequest.prototype.open = function() {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//             targetOrigin[1] !== cors_api_host) {
//             args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//     };
// })();


function displayZillow (){
		var homeData = $(this).attr("data-name"); 

			var queryURL = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=$X1-ZWz1fzlt3e34sr_76gmj&address=$2114+Bigelow+Ave&citystatezip=$Seattle%2C+WA";
;

		//     $.ajax({
		//       url: queryURL,
		//       method: 'GET'
		//     }).done(function(data) {
		//     	console.log(data);

		//     	var results = data.response;
		//     	console.log (results);
		    
		//       });
		// }


		$.ajax({
                    type: 'GET',
                    url: queryURL,
                    contentType: 'text/plain',
                    xhrFields: { ithCredentials: false },
                    headers: {'Accept':'application/json'},
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                    }
                });
	}
	

	displayZillow();


//It looks like they have forbidden CORS (cross origin resource sharing)
//Zillow doesn't support a JavaScript API so you would need to create your own server-side service
// that queries it (forwards the query) and sits on the same domain as your HTML page. 
// Then you can call it (as a proxy).