// slideAll_viewBox.js

(function($){
   const viewBox = $('#viewBox');
   const slideForm = viewBox.find('.slide_form');
   const slideWrap = viewBox.find('.slide_wrap');
   let slideEach = slideWrap.children('div');
// -------------------------------------------------

   // 마지막 슬라이드 복제 ==========================
   let slideLen = slideEach.length;
   console.log('슬라이드 갯수는 '+slideLen);
   slideEach.eq(-1).clone(true).prependTo(slideWrap);
   

   // 재선언 (갯수가 바뀌었기 때문에) ================
   slideEach = slideWrap.children('div');
   slideLen = slideEach.length;
   console.log('재선언된 슬라이드 갯수는 '+slideLen);


   // slide_wrap, slide_0$의 너비를 조정================
   slideWrap.css({width:100 * slideLen + '%', marginLeft: '-100%'})
   slideEach.css({width:100 / slideLen + '%'})

   slideForm.css({overflow:'hidden'});

   // 버튼부 생성 ======================================
   // 좌/우 버튼
   const slideBtn = function(rel){
      // let result = rel || true;     // true먹히면 버튼 생기게 조정하기 위한 변수였으나..false가 result로는 안 먹혀서...
      if(rel){
         slideForm.before('<div class="view_btn"><button type="button" class="next"><i class= "fas fa-chevron-circle-right"></i><span>다음내용 보기</span></button><button type="button" class="prev"><i class= "fas fa-chevron-circle-left"></i><span>이전내용 보기</span></button></div>');
      }// if()
   }// slideBtn(function(){ slide_form앞에 버튼 만들기 })

   slideBtn(true);  //    하나의 기능을 다른 데에 그대로 활용할 수 있게끔 함수화

   // 인디케이터 영역
   slideForm.before('<ul class="indicator"></ul>');
   const indi = viewBox.find('.indicator');
   
   for (let i = 0; i < slideLen-1; i++){

      indi.append('<li><a href="#"><span></span></a></li>');
      let indiLi = indi.children('li').eq(i);
      indiLi.find('span').text(slideEach.eq(i+1).text());
      indiLi.find('span').css({display:'block', width:0, height: 0, overflow: 'hidden'});
      
   }//   for () //  li 슬라이드 갯수만큼 생성, 내부 요소 채우기


})(jQuery);