window.onload = function() {

	
	$(".lightbox_trigger").click(function(e){


		//prevent default action (make picture not clickable)
		e.preventDefault();

		//get clicked links href
		var image_href = $(this).attr("href");
		console.log(image_href);

		 //var picCaption = $(this).attr("title");
			//console.log(picCaption);

		//setup the lighbox if not already setup or usethe lightbox if it exists

		if($("#lightbox").length>0){
			//lightbox div is already created = we can use it

			//place the clicked href into our lightbox div
			$("#content").html('<img src="' + image_href + '" />');

			$('#lightbox').fadeIn(1000);

		} else {
			//lightbox div will not exist 1st time

			var picCaption = $(this).attr("title");
			//console.log(picCaption);

			var lightbox = 
				'<div id="lightbox">' +
				'<button>Click to Close</button>' +
				'<div id="content">' +
				//insert the clicked link href into an image
				'<img src="' + image_href + '" />' +
				'</div>' + //ends content div
				'<p>' + picCaption + '</p>' +
				'</div>' //closes lightbox div

				//insert the lightbox html into our page
				$("body").append(lightbox);

				$("#lightbox").fadeIn(1000);

		};


	});

	//setup the click to close button
	$("#lightbox").live('click', function(){

		$('#lightbox').fadeOut(1000);


	});
}









