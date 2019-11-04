// slideAll_viewBox.js

(function($){
   const viewBox = $('#viewBox');
   const slideWrap = viewBox.find('.slide_wrap');
   let slideEach = slideWrap.children('div');

   let slideLen = slideEach.length;
   console.log('슬라이드 갯수는 '+slideLen);
   slideEach.eq(-1).clone(true).prependTo(slideWrap);
   
   // 재선언 (갯수가 바뀌었기 때문에)
   slideEach = slideWrap.children('div');
   slideLen = slideEach.length;
   console.log('재선언된 슬라이드 갯수는 '+slideLen);


   // slide_wrap의 너비를 조정
   slideWrap.css({width:100 * slideLen + '%'})
   slideEach.css({width:100 / slideLen + '%'})

})(jQuery);