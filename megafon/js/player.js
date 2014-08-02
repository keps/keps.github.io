$(document).ready(function(){

    $("#jplayer").jPlayer({
    	ready: function(){
    		$(this).jPlayer("setMedia", {
    			mp3: "https://dl.dropbox.com/u/15317/kepsmusic/Megafon/keps.mp3"
    		});
    	},
    	ended: function(){
    		if ($(".selected.song").next(".song").length > 0) {
    			$(".selected.song").next(".song").click();
    		} else {
    			$(".selected.song").removeClass("selected playing paused");
    		}
    	}
    });
    
    $(".song").each(function(){
    	$(this).click(function(e){
    		e.preventDefault();
    		
    		if ($(this).hasClass("playing")) {
    			$("#jplayer").jPlayer("pause");
    			$(this).removeClass("playing").addClass("paused");
    		} else if ($(this).hasClass("paused")) {
				$("#jplayer").jPlayer("play");
				$(this).removeClass("paused").addClass("playing");
			} else {
	    		$("#jplayer").jPlayer("setMedia", {
	    			mp3: $(this).attr("href")
	    		}).jPlayer("play");
	    		$(".selected").removeClass("selected playing paused");
	    		$(this).addClass("selected playing");
	    	}
    	});
    });
});