// main_02.js

(function($){
   // #wrap
   const body = $('body'); //body
   const wrap = $('#wrap'); //wrap
   wrap.append('<section id="viewBox"></section>'); //viewBox
   const viewBox = $('#viewBox'); //viewBox

   // script내용(js) 간편작성함수 생성
   const JsLink = function(temp){
      return body.append(`<script src="../js/src/temp/${temp}.js"></script>`)
   };

   viewBox.load('./temp/slide_02.html',function(){
      JsLink('slide_02');
   });

})(jQuery);