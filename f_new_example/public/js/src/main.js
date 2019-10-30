// main.js

(function($){
   // #wrap
   const body = $('body');    //body
   const wrap = $("#wrap");   //#wrap
   wrap.append('<section id="viewBox"></section>'); // #viewBox 생성
   const viewBox = $('#viewBox');

   
   // script 내용 간편작성함수 생성
   const JsLink = (temp) => {
      return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
      // return은 공식적으론 써야하지만 안 써도 되긴 함.
   };


   // 광고영역 1 생성
   viewBox.load('./temp/slide_01.html',() => {
                                 // function(){}와 동일한 형태
      JsLink('slide_01');
   });


   // 광고영역 2 생성 (선생님 풀이)
   wrap.append('<section id="viewBox_02"></section>');
   const vB2 = $('#viewBox_02');

   vB2.load('./temp/slide_03.html',() => {
      JsLink('slide_03');
   });
   //- 자동슬라이드 내용에서 중첩기능 수정요망.


   // 광고영역 3 생성 (맨뒤에서 처음으로 돌아가기, 좌우버튼)
   wrap.append('<section id="viewBox_03"></section>');
   const VB3 = $('#viewBox_03');

   VB3.load('./temp/slide_04.html',() => {
      JsLink('slide_04');
   });
   

   // 광고영역 4(5) 생성 (슬라이드)
   wrap.append('<section id ="viewBox_05"></section>');
   const VB5 = $('#viewBox_05');
   
   VB5.load('./temp/slide_05.html',function(){
      return JsLink('slide_05');
   });

})(jQuery);