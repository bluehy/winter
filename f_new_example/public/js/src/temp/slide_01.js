// slide_01.js

(function($){
   console.log('slide_01.js 적용되고 있습니다');
   // .view_indicator 내부의 li(a)를 선택하면, 
   // #viewBox내부의 .guide 가 이동하게 만들어라.

   //index() : 순서 가져오는 것. // eq() : 순서를 주는 것
   //margin-left : -100%, -200% ...  || position:relative; left: -100%; -200% ....

   const viewBox = $('#viewBox');
   const indicator = viewBox.find('.view_indicator');
   const indiLi = indicator.find('li');
   const indiLink = indiLi.children('a');

   const guideBox = viewBox.find('.guide');


   indiLink.on('click focus',function(e){
      e.preventDefault();
      let i = $(this).parent('li').index();
      // console.log(i);
      indiLink.removeClass('action');
      $(this).addClass('action');

      guideBox.stop().animate({'left': -100 * + i + '%'});

   });

})(jQuery);