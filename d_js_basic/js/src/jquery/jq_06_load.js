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
wrap.append('<div class="foot_wrap"></div>')
   const footWrap = $('.foot_wrap');


headWrap.load('./temp/header.html',function(data){
   console.log(data);
   const headBox = $('#headBox');
   headBox.css({'backgroundColor':'#3ff'});
});

// ====================================== 
footWrap.load('./temp/footer.html',function(x){
   console.log(x);
});

// : load해온 파일간 컨트롤이 불가능.

// $.getJSON('../../data/test.json',function(x){console.log(x)});
// wrap.load('../../data/test.json',function(data){
//    console.log(data);
// })


})(jQuery);