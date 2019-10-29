// slide_03.js

(function($){
   console.log($.fn);
   const viewBox2 = $('#viewBox_02');

   const indicator = viewBox2.find('.indicator');
   const indiLi = indicator.find('li');
   const indiLink = indiLi.children('a');

   const viewBtn = viewBox2.find('.view_btn');
   const playBtn = viewBtn.find('.play');
   const pauseBtn = viewBtn.find('.pause');

   const slideForm = viewBox2.find('.slide_02_form');
   const slideGuide = slideForm.children('.guide');
   const slideEach = slideGuide.children('.banner_area');

   let timed = 300;
   let myn = 0;
   let maxn = slideEach.length;

   let mybool = true;

   // # 슬라이드 이동에 따른 변화 함수화 (공통) ==================================================
   // ==================================================================================
   // indiLi.eq(0).children('a').addClass('action');
   // slideEach.eq(0).addClass('action');

   const MoveSlide = function(n, bool){
      indiLink.removeClass('action');
      indiLi.eq(n).children('a').addClass('action');

      slideGuide.stop().animate({'marginLeft': (-100 * n) + '%'}, function(){ //콜백 가능
         slideEach.removeClass('action');
         setTimeout(function(){
            slideEach.eq(n).addClass('action');
         }, timed); //setTimeout(function(){ } , delay시간);
      });
      // play, stop 버튼 동작유무 판단하기
      if(!bool){
         playBtn.show();
         pauseBtn.hide();
      }else{
         pauseBtn.show();
         playBtn.hide();
      }
   };// MoveSlide function

   // MoveSlide(0);
   MoveSlide(0, true);
   // =======================================================================================
   
// ------------------------------------------------
// 일정시간마다 광고배너 움직이게 하기
// GoSlide / StopSlide / == > PlayBanner

let go;

const GoSlide = function(){
   go = setInterval(function(){
      // console.log(myn);
      myn++;
      if (myn >= maxn){
         myn = 0;
      }
      MoveSlide(myn, true);
   },timed * 10);
}; // # GoSlide function

const StopSlide = function(){ 
   clearInterval(go);
};// #StopSlide function
// GoSlide();

const PlayBanner = function(bool){
   if(bool){
      GoSlide();
   }else{
      StopSlide();
   }
}; // PlayBanner() function
PlayBanner(mybool);

// --------------------------------------------------------------
// 마우스 오버했을 때, 슬라이드 자동재생 멈춤. 벗어났을 때, 슬라이드 자동재생 재시작.
// viewBox2.on('mouseenter', StopSlide ); // stopSlide
// viewBox2.on('mouseleave',GoSlide ); // replay Slide
// 또는
viewBox2.on('mouseenter', function(){
   PlayBanner(false);
});

viewBox2.on('mouseleave', function(){
   PlayBanner(true);
});
// viewBox2.on({'mouseenter':StopSlide, 'mouseleave':GoSlide});
//--------------------------------------------------------------

// -------------------------------------------------------------------
// 자동재생멈춤 / 자동재생시작 버튼
// playBtn.hide(); // bool 추가하면서 의미없음.
// pauseBtn.on('click',StopSlide);
pauseBtn.on('click',function(){
   // StopSlide();
   // $(this).hide();
   // $(this).siblings().show();
   PlayBanner(false);
});

// playBtn.on('click',GoSlide);
playBtn.on('click',function(){
   // GoSlide();
   // $(this).hide();
   // $(this).siblings().show();
   PlayBanner(true);
});
// ---------------------------------------------------------------------


// ---------------------------------------------------------------
// 클릭할 때, 배너 움직이게 하기 (+ 포커스일 때, 움직이지 않음.)
   indiLink.on('click focus',function(e){
      e.preventDefault();
      e.stopPropagation();
      // StopSlide();
      console.log(e.bubbles);
      let myThis    = $(this);
      let myThisPar = myThis.parent('li')
      let i         = myThisPar.index();
      myn = i;

      MoveSlide(myn, true);
      PlayBanner(false);

   }); // indiLink('click')
// -----------------------------------------------------------------

})(jQuery);




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