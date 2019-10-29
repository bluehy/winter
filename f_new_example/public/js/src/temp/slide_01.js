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
   const slidePage = guideBox.children('div');


   let time = 300;
   let j = 0;
   let maxj = slidePage.length;

// 슬라이드 이동 함수화 ==========================================
   const MovingSlide = function(n){
      indiLink.removeClass('action');
      indiLink.parent('li').eq(n).children('a').addClass('action');
      guideBox.stop().animate({'left': -100 * n + '%'});
   }
   MovingSlide(0);
// =========================================================

// 슬라이드 자동 이동===================================================
   let slide;
   const Sliding = function(){
      slide = setInterval(function(){
         j++;
         if(j >= maxj){
            j = 0;
         }
         MovingSlide(j);
      }, time * 10);
   }; //Sliding function()
const StopSliding = function(){
   clearInterval(slide);
}
Sliding();

viewBox.on({'mouseenter':StopSliding,'mouseleave':Sliding});

// 슬라이드 클릭시 이동 =============================================================

   indiLink.on('click focus',function(e){
      e.preventDefault();
      StopSliding();
      let i = $(this).parent('li').index();
      j = i;
      // console.log(i);
      MovingSlide(j);
   });

   

})(jQuery);