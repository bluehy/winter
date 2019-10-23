// spigen_main.js

(function($){
const body = $('body');
const header = $('#headBox');
const adver = $('#viewBox');
const content = $('#conBox');
const content2 = $('#conBox2');
const footer = $('#footBox');

// =========================================
let tempUrl = "./spigen_temp_pc/";
let jsUrl = "../js/src/spigen_temp_pc/"

console.time();

header.load(tempUrl+'spigen_header.html',function(){
   body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
   //or 
   // $(this).after('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
});
console.timeEnd();

adver.load(tempUrl+'spigen_main_adver.html');

// content ==============================================

content.load(tempUrl+'spigen_main_content_01.html',function(){
   

   let conJs = jsUrl + 'spigen_content_01.js';
   let conJsCopy = jsUrl + 'spigen_content_01_copy.js';
  

   // body.append('<script src="../js/src/spigen_temp_pc/spigen_content_01.js"></script>');
   body.append('<script src="'+conJsCopy+'"></script>');

   
   // body.append(`<script src="${conJs}"></script>`);
   // ===================> 세 줄 모두 동일한 코드.
});

// content2 =================================================

content2.load(tempUrl+'spigen_main_content_02.html',function(){

   let conJs02 = jsUrl + 'spigen_content_02.js';

   body.append('<script src="'+conJs02+'"></script>');

});



// footer =====================================================

footer.load(tempUrl+'spigen_footer.html');

// body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>'); // 로드 속도 차이로 인해 기능이 안 먹힘

// setTimeout(function(){},'시간');
//자바스크립트 내장 함수.
// 일정 시간이 지난 후에 함수를 수행해라. (==css의 delay기능과 유사)

setTimeout(function(){
   // body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
}, 100); //1초가 지난 후에 수행해라. => 다른 것에도 영향을 줘야할 때 이런 걸 써도 되지만... 보통은 그냥 내부에 들어가는 게 낫다...

$.ready(function(){
   // body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
}); // 사이트가 준비되면 수행하기. (load는 포함 안 되네...)

})(jQuery);