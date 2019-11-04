// slide_all.js

(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.append('<section id = "viewBox"></section>');
   const viewBox = wrap.find('#viewBox');

   viewBox.load('./temp/slideAll_viewBox.html', function(){ 
                  // 불러온 html기준 상대 경로
      body.append('<script src="../js/src/temp/slideAll_viewBox.js"></script>');
                  // <script>$('#viewBox').slideAll({slideBtn : true});</script>
                  // 이런 식으로 넣을 요소는 넣고(true) 안 넣을 요소는 안 넣는(false) 식의 플러그인(?)을 생성 가능.
   });

})(jQuery);
