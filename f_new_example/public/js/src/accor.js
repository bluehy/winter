// accor.js

(function($){
   const accorDl = $('.accor');
   const accorDt = accorDl.find('dt');
   const accorDd = accorDl.find('dd');

   accorDd.hide();

   accorDt.children('a').on('click',function(e){
      e.preventDefault();
      
      let myThis = $(this).parent('dt');
      let has = myThis.hasClass('action');
      if(has){
         myThis.removeClass('action');
         // myThis.find('i').css({'transform':'rotate(0deg)'})
         myThis.next('dd').stop().slideUp();
      }else{
         accorDt.removeClass('action');
         myThis.addClass('action');
         // myThis.find('i').css({'transform':'rotate(540deg)'},300)
         myThis.siblings('dd').stop().slideUp();
         myThis.next('dd').stop().slideDown();
      }
   })

   
})(jQuery);