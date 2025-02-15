(function($){
	"use strict";

$(document).ready(function() {
	$('#specker').hover(function() {
		$('.specker').stop().fadeToggle("slow");
        
    });
    
});

$(document).ready(function() {
	$('#moniter').hover(function() {
		$('.moniter').stop().fadeToggle("slow");
        
    });
    
});

$(document).ready(function() {
	$('#cpu').hover(function() {
		$('.cpu').stop().fadeToggle("slow");
        
    });
    
});

$(document).ready(function() {
	$('#mouse').hover(function() {
		$('.mouse').stop().fadeToggle("slow");
        
    });
    
});

$(document).ready(function() {
	$('#keyboard').hover(function() {
		$('.keyboard').stop().fadeToggle("slow");
        
    });
    
});




  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 10) {
    $("#mainNav").removeClass("affix_nav");
   }else{
    $("#mainNav").addClass("affix_nav");
   }
  });
  
	
	
// Rwd Image maping //	 
$(document).ready(function() {
	$('img[usemap]').rwdImageMaps();
	
	
});


// WOW Animated //
var wow = new WOW(
			{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function() {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
			}
			);
			wow.init();

	
	})
(jQuery);

/*
$(document).ready(function() {
	$('#specker').hover(function() {
		$('.specker').fadeToggle("slow");
        
    });
    
});
*/


$(document).ready(function() {
	"use strict";
	setTimeout(function(){
		$('body').addClass('loaded'); }, 3000);
	
});



$(document).ready(function(){
	"use strict";
	$('#advt_popup').css('display', 'block');
	$(".advt_popup-content").on('click',function(){
		if($(event.target).is(".advt_popup_close")){
			$("#advt_popup").fadeOut(1000);
		}
	});
}); 	