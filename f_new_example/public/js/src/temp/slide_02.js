// slide_02.js

(function($){
   const slideBox = $('.slide_temp');

   const viewBtn = slideBox.children('.view_button');
   const nextBtn = viewBtn.children('.next');
   const prevBtn = viewBtn.children('.prev');
   const playBtn = viewBtn.children('.play_btn');


   const viewIndi = slideBox.children('.view_indicator');
   const indiUl = viewIndi.children('ul');
   const indiLi = indiUl.children('li');
   const indiLink = indiLi.children('a');

   const slideArea = slideBox.children('.slide_form');
   const guideArea = slideArea.children('.guide');


   

   // 좌우버튼
   // nextBtn.on('click focus',function(e){
      
   // });

   playBtn.on('click focus',function(e){
      $(this).toggleClass('play');
   });
   

   // 인디케이터

   indiLink.on('click focus',function(e){
      e.preventDefault();
      let i = $(this).parent('li').index();

      $(this).parent('li').siblings('li').children('a').removeClass('action');
      // indiLink.removeClass();
      $(this).addClass('action');

      guideArea.stop().animate({'left': -100 * +i + '%'});
      slideArea.addClass('active');
   });



   // 슬라이드영역


})(jQuery);