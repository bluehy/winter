// slide_all.js

(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.append('<section id = "viewBox"></section>');
   const viewBox = wrap.find('#viewBox');

   viewBox.load('./temp/slideAll_viewBox.html', function(){ 
                  // 불러온 html기준 상대 경로
      body.append('<script src="../js/src/temp/slideAll_viewBox.js"></script>')
   });

})(jQuery);
