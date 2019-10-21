// index.js

(function($){

   const header = $("#headBox");
   const gnb = $('#gnb');
   const gnbUl = gnb.children('ul');
   const gnbLi = gnbUl.children('li');
   const gnbDl = gnbLi.children('dl')

   const gnbDt = gnbDl.children('dt')
   const gnbDtLink = gnbDt.children('a')
   const gnbDd = gnbDl.children('dd')
   const gnbDdLink = gnbDd.children('a')


   gnbLi.on('mouseenter', function(){
      gnbDd.stop().slideDown();
      gnb.addClass('action');
      $(this).find('dt').children('a').addClass('action');
   });

   gnbLi.on('mouseleave',function(){
      $(this).find('dt').children('a').removeClass('action');
   })

   gnbDtLink.on('focus',function(){
      gnbDd.stop().slideDown();
      gnb.addClass('action');
      $(this).addClass('action');
   });

   gnbDtLink.on('blur',function(){
      $(this).removeClass('action');
   });
   
   header.on('mouseleave',function(){
      gnbDd.stop().slideUp();
      gnb.removeClass('action');
      
   });


   gnbDdLink.on('mouseenter focus',function(){
      $(this).addClass('action');
   });

   gnbDdLink.on('mouseleave blur',function(){
      $(this).removeClass('action');
   });
   
   gnbDdLink.eq(-1).on('blur',function(){
      gnbDd.stop().slideUp();
      gnb.removeClass('action');
   });

   
})(jQuery);