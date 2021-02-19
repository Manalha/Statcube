
$(function() {
	  $("#entity").selectmenu();
});

$(function() {
	  $("#ausbildungsfeld").selectmenu();
});
$(function() {
	$("#wohnort").selectmenu();
});


$(function() {
	$( "#Search" ).on("click", function(){
		
		var propType = $("#entity").val();
		var ausbildungsfeld =  $("#ausbildungsfeld").val();
		var wohnort =  $("#wohnort").val();
		
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( propType == data.properties[i].type) || (propType=="Sonstige-Ausbuildung"))
			   if (( ausbildungsfeld == data.properties[i].type) || (ausbildungsfeld=="AllgemineBuildungs"))
			   if (( wohnort == data.properties[i].type) || (wohnort=="Niederoestrreich"))
			   {
				   {
					   {
						   
							   output+="<h2><li>" + "£" + data.properties[i].cost +"</li></h2>" + "<img src=" + data.properties[i].picture + ">" + "<p>" + data.properties[i].description + "</p>" + "<button><a href='" + data.properties[i].url + "'>Visit Page</a></button>";
						   } } } } 
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
	});
	
	
$(function() {
	$( ".addFavourites" ).on("click", function(){
		
		try {
			$(this).attr('disabled', true);
			
			var propIdToAdd = $(this).closest("p").attr("id");
			
			var myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
			
			if(myFavouriteProp == null) {
				myFavouriteProp = [];
			}
			
			if(myFavouriteProp != null) {
				for ( var j = 0; j < myFavouriteProp.length; j++) {
					
					if ( propIdToAdd == myFavouriteProp[j]) {
						
						alert("This property is already in your favourites"); 
						myFavouriteProp = [];
					}
				}
			}
			
			myFavouriteProp.push(propIdToAdd);
			
			localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));
			
		}
		
		catch (e) {
			if (e==QUOTA_EXCEEDED_ERR) {
				console.log("Error: Local storage limit exceeds");
			}
			
			else {
				console.log("ERROR: Saving to local storge.");
			}
		}
	});
});




$(function() {
	$( ".removeFavourites" ).on("click", function(){
		
			$(this).attr('disabled', true);
			
			var propIdToRemove = $(this).closest("p").attr("id");
			
			 myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
			
			
			if(myFavouriteProp != null) {
				for ( var j = 0; j < myFavouriteProp.length; j++) {
					
					if ( propIdToRemove == myFavouriteProp[j]) {
						
						alert("This Property has been removed");
						
						delete myFavouriteProp[j];
						
						localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));
						
						myFavouriteProp[j] = [];
					}
				}
			}
			
			if(myFavouriteProp == null) {
				alert("You have no favourite items");
			}
		});
	});
	
	
$(function() {
	$( ".viewFavourites" ).on("click", function(){
		
		console.log("Restoring array data from local storage");
		
		myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
		
		var output = "<ul>";
		
		if (myFavouriteProp != null) {
			
			for (var i = 0; i < data.properties.length; i++) {
				for (j = 0; j < myFavouriteProp.length; j++) {
					
					if (data.properties[i].id == myFavouriteProp[j]) {
						
						output+="<h5><li>" + data.properties[i].bedrooms + " Bedroom" + " " + data.properties[i].type + "</li></h5>" + 
"<img src=" + data.properties[i].picture + ">" +"<li><button><a href=' " +data.properties[i].url + "'>Visit page</a></button></li>";
					}
				}
			}
		}
		output+="</ul>";
		
		document.getElementById( "Placeholder2" ).innerHTML = output;
	
	});
});


$(function() {
	$( ".clearFavourites" ).on("click", function(){
		
		$("#Placeholder2").remove();
		
		myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
		
		localStorage.clear();
		
	});
	
});
						
						
						