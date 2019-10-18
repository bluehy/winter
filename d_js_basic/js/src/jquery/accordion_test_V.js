// aacordion_test_V.js

(function($){

   const sideMenu = $('.menuu');
   const cnb = $('#cnb');
   const cnbEx = cnb.children('.cnbExit');
   const cnbDl = cnb.children('dl');
   const cnbDt = cnbDl.children('dt');
   const cnbDd = cnbDt.nextAll('dd');



   sideMenu.children('a').on('focus',function(){
      cnb.stop().fadeIn();
   })

   cnbEx.children('a').on('click',function(){
      cnb.stop().fadeOut();
   })

   cnbDd.children('a').on('mouseenter',function(){
      $(this).css({'textDecoration':'underline','fontSize':'1.2rem'});
      $(this).on('mouseleave',function(){
         $(this).css({'textDecoration':'none','fontSize':'1rem'})
      })
   })


})(jQuery);