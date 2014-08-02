$(document).ready(function() {
	if (Modernizr.csstransforms3d) {
		$("#listen").click(function(e){
			e.preventDefault();
			albumBack();
		});
		$("#back-link").click(function(e){
			e.preventDefault();
			albumFront();
		});
	} else {
		$("#listen,#back-link").click(function(e){
			e.preventDefault();
			flipAlbum();
		});
	}
});

function albumBack() {
	$("#album").addClass("flipped");
	$("#listen-link").hide();
	$(".back").show();
}

function albumFront() {
	$("#album").removeClass("flipped");
	$("#listen-link").show();
	$(".front").show();
}

function flipAlbum() {
	$(".front").toggle();
	$(".back").toggle();
}
