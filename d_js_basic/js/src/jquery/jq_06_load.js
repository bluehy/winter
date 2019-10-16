// jq_06_load.js

(function($){
//jquery기초
/* 
* (html문서에서 불러왔을 경우)
   js문서에서는 기준경로가 작성하고 있는 js문서가 아니다.
   html문서로 연결된 경우는 '불러온 html문서기준'으로 경로를 설정한다.

* header.html을 불러온다면,
   ../../html/jquery/temp/header.html이 아니라
   ./temp/header.html이 된다.
*/

const wrap = $('#wrap');
wrap.prepend('<div class="head_wrap"></div>');

const headWrap = $('.head_wrap');
headWrap.load('./temp/header.html');

})(jQuery);