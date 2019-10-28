// slide_03.js

(function($){
   console.log($.fn);
   const viewBox2 = $('#viewBox_02');

   const indicator = viewBox2.find('.indicator');
   const indiLi = indicator.find('li');
   const indiLink = indiLi.children('a');

   const viewBtn = viewBox2.find('.view_btn');

   const slideForm = viewBox2.find('.slide_02_form');
   const slideGuide = slideForm.children('.guide');
   const slideEach = slideGuide.children('.banner_area');

   let timed = 500;

   indiLi.eq(0).children('a').addClass('action');
   slideEach.eq(0).addClass('action');

   indiLink.on('click',function(e){
      e.preventDefault();
      let myThis    = $(this);
      let myThisPar = myThis.parent('li')
      let i         = myThisPar.index();
      
      indiLink.removeClass('action');
      myThis.addClass('action');

      slideGuide.animate({'marginLeft': (-100 * i) + '%'}, function(){ //콜백 가능
         slideEach.removeClass('action');

         setTimeout(function(){
            slideEach.eq(i).addClass('action');
         }, timed); //setTimeout(function(){ } , delay시간);
      });

   });
   
   // 변수 i = 외부에서 공용으로 사용할 수 있도록, 전역변수로 처리해야한다.
   // 인디케이터, 광고배너 이동 후에 처리하는 부분 등의 내용은 별도의 함수 처리.
   // setInterval(), clearInterval()

   let go;
   const Goslide = function(){
      go = setInterval(function(){
         /* 기능 */  
      }, timed * 5);
   };
   const StopSlide = clearInterval(go);
   viewBox2.on('mouseenter',StopSlide);
   viewBox2.on('mouseleave',GoSlide());


})(jQuery);