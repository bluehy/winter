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

   let timed = 300;
   let myn = 0;
   let maxn = slideEach.length;

   // # 슬라이드 이동에 따른 변화 함수화 ==================================================
   // ==================================================================================
   // indiLi.eq(0).children('a').addClass('action');
   // slideEach.eq(0).addClass('action');

   const MoveSlide = function(n){
      indiLink.removeClass('action');
      indiLi.eq(n).children('a').addClass('action');

      slideGuide.stop().animate({'marginLeft': (-100 * n) + '%'}, function(){ //콜백 가능
         slideEach.removeClass('action');

         setTimeout(function(){
            slideEach.eq(n).addClass('action');
         }, timed); //setTimeout(function(){ } , delay시간);
      });
   };// MoveSlide function
   MoveSlide(0);
   // =======================================================================================
// ------------------------------------------------
// 일정시간마다 광고배너 움직이게 하기

let go;
const GoSlide = function(){
   go = setInterval(function(){
      console.log(myn);
      myn++;
      if (myn >= maxn){
         myn = 0;
      }
      MoveSlide(myn);
   },timed * 10);
}; // # GoSlide function
const StopSlide = function(){ clearInterval(go);};
GoSlide();

// viewBox2.on('mouseenter', StopSlide ); // stopSlide
// viewBox2.on('mouseleave',GoSlide ); // replay Slide
viewBox2.on({'mouseenter':StopSlide, 'mouseleave':GoSlide});
//--------------------------------------------------------------
// ---------------------------------------------------------------
// 클릭할 때, 배너 움직이게 하기 (+ 포커스일 때, 움직이지 않음.)
   indiLink.on('click focus',function(e){
      e.preventDefault();
      StopSlide();
      let myThis    = $(this);
      let myThisPar = myThis.parent('li')
      let i         = myThisPar.index();
      myn = i;

      MoveSlide(myn);

   }); // indiLink('click')
// -----------------------------------------------------------------

   // ============================================
   // let i = 0;
   // setInterval(function(){
   //    i++;
   //    indiLink.parent().eq(i).trigger('click');
   // },timed * 3);
   // // scroll magic, mousewheel 기능과 함께 사용..
   // ============================================

   // 변수 i = 외부에서 공용으로 사용할 수 있도록, 전역변수로 처리해야한다.
   // 인디케이터, 광고배너 이동 후에 처리하는 부분 등의 내용은 별도의 함수 처리.
   // setInterval(), clearInterval()


})(jQuery);
// setTimeout()   : 일정시간 뒤에 수행
// setInterval()  : 일정시간마다 수행
// clearInterval(): setInterval의 기능을 취소, 정지하는 기능.

// let i = 0 ;
// let maxi = 4
//     timed = 1000;
// let go;
// let Goslide = function(){
//    go= setInterval(function(){
//       i++;
//       if(i >= maxi){
//          i = 0;
//       } // 4보다 크거나 같은 숫자가 되면, i는 0이 된다.
//       console.log(i);
//    }, timed); 
// };//Goslide()

// Goslide(); //최초의 수행

// // 커피숍에서 텀블러에 아메리카노를 주세요. = 함수
// // 텀블러 안에 아메리카노 = setInterval()
// // 다마심 = clearInterval()
// // 또주세요 = 함수 실행



// // setTimeout(function(){
// //    clearInterval(go);
// // },timed*15);

// $(document).on('mouseenter',function(){
//    clearInterval(go);
// });

// $(document).on('mouseleave',function(){
//    Goslide();
// });