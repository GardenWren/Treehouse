$(document).ready(function(){
	$	('button').click(function(){
		$('button').removeClass('selected');
		$(this).addClass('selected'); // show button as selected
		
		var flickrAPI ="http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; // flickr API link
		var animal = $(this).text();
		var flickrOptions = {tags: animal, format: "json"};// send correct search to flickr
		var displayPhotos = function (data){
	var photoHTML = "<ul>";
	$.each(data.items,function(i, photo){
		photoHTML+= '<li class="grid-25 tablet-grid-50">';
		photoHTML+= '<a href="'+photo.link+'" class="image">';
		photoHTML+='<img src="'+photo.media.m+'"></a></li>';
	});
	 photoHTML+= '</ul>';
	 $('#photos').html(photoHTML);		
			
		};
		
		$.getJSON(flickrAPI,flickrOptions, displayPhotos); // get photos from flickr
	});// end click handler
	
}); // end ready