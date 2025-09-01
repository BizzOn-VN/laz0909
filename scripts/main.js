'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});



   // $("#md-popup-1").fancybox({
   //                 clickSlide: false,
   //                clickOutside: false,
   //             }).trigger('click');

 // $("#md-popup-2").fancybox({
 //                   clickSlide: false,
 //                  clickOutside: false,
 //               }).trigger('click');
 // $("#md-popup-3").fancybox({
 //                   clickSlide: false,
 //                  clickOutside: false,
 //               }).trigger('click');


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})