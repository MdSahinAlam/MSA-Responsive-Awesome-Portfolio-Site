$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
 
    
    
/*    magnific popup*/
    $(document).ready(function() {
      $('#youtube-video').magnificPopup({
          type:'iframe',
            iframe: {
              patterns: {
                youtube: {
                  index: 'youtube.com/', 
                  id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                },
               },

              srcAction: 'iframe_src', 
            }
      });
    });
    

/*    portfolio popup*/
    $('#portfolio-popup').magnificPopup({type:'image'});
    
    
/*    owl-caursel*/
}(jQuery));