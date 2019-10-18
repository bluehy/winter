// accordion_test.js

(function($){

   const gnb = $('#gnb');
   const gnbUl = gnb.children('ul');
   const gnbLi = gnbUl.children('li');
   const gnbLink = gnbLi.children('a');

   const subUl = gnbLink.next('ul');
   const subLi = subUl.children('li');
   const subLink = subLi.children('a');

   gnbUl.css({'height':'auto'});

   gnbLink.on('mouseenter focus',function(e){
      e.preventDefault();
      gnb.addClass('gnbmenuStyle');
      $(this).addClass('gnbLiStyle');
      subUl.stop().slideDown();

      $(this).next('ul').find(subLink).on('focus',function(){
         $(this).addClass('subLiStyle');
      });
      $(this).next('ul').find(subLink).on('blur',function(){
         $(this).removeClass('subLiStyle');
      })


      $(this).next('ul').find(subLink).eq(-1).on('mouseleave blur',function(){
         subUl.stop().slideUp();
         gnbLink.removeClass('gnbLiStyle');
         gnb.removeClass('gnbmenuStyle');
      });
   });
   gnbLink.on('mouseleave',function(){
      // gnb.removeClass('gnbmenuStyle');
      gnbLink.removeClass('gnbLiStyle');
      // subUl.stop().slideUp();
   });


})(jQuery);