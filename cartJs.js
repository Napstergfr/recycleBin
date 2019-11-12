$.getJSON( "/cart.js", function( data ) {
		  var items = [];
		  $.each( data, function( key, val ) {
		    items.push( "<li id='" + key + "'>" + val + "</li>" );
		  });
		  console.log(items);
		 
		  
		});