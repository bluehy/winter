// spigen_content_02.js

(function($){

   // # 내 풀ㅇ ㅣ ================================
   // console.log('휙');
   // const irArea = $('.irArea');
   // const irUl = irArea.children('ul');
   // const irLi = irUl.children('li');
   // const irLiLink = irLi.children('a');

   // const irDl = irLiLink.children('dl');
   // const irDt = irDl.children('dt');
   // const irDd = irDl.children('dd');


  /*  const irList = [
      {title: 'ir 행사', data:'당사의 기업설명회 및 주요공고사항을 확인하실 수 있습니다.'},
      {title: '공시정보', data:'당사의 기업설명회 및 주요공고사항을 확인하실 수 있습니다.'},
      {title: '공시정보', data:'당사의 기업설명회 및 주요공고사항을 확인하실 수 있습니다.'}
   ]; */

   /* for(i==0; i < irList.length ; i++){
      
   }; */



   // irLiLink.on('mouseenter focus',function(e){
   //    e.preventDefault();
   //    console.log('휙');
   //    $(this).children('dl').addClass('action');
   //    $(this).children('dl').children('dd').stop().fadeIn(500);
   //    // $(this).parent('li').siblings('li').children('a').removeClass('action');

   // });
   
   // irLiLink.on('mouseleave blur',function(){
   //    $(this).children('dl').removeClass('action');
   //    $(this).children('dl').children('dd').stop().fadeOut();
   // });


   // # 내 풀ㅇ ㅣ ================================


   // # 선생님 풀이이ㅣ
   const conBox2 = $('#conBox2');
   const irArea = conBox2.children('.irArea');   
   const conBoxLink = irArea.find('ul>li>a');
   console.log(conBox2.offset().top);   // conBox2의 위치

         //.action
         conBoxLink.on('mouseenter focus',function(){
            $(this).addClass('action');
         })
         .on('mouseleave blur',function(){
            $(this).removeClass('action');
         });
            
   
   
   // # 선생님 풀이이ㅣ

// =======================================================
// ** 스크롤바가 일정량 움직였을 때, top_move_btn 나타나게 만들기
//  사용된 이벤트는 scropp
// * scrollTop() : 스크롤바의 움직인 위칙밧을 파악
// * offset().top , offset().left   :
// * mousewheel   , DOMMouseScroll  : 
// * BOM , DOM ??
// 상단 내비게이션 js 기능으로 처리! 

let conBoxOffset = conBox2.offset().top-1200;
const topBtn =  $('.top_move_btn');
const win = $(window);
// win.on('scroll',function(e){});
win.on('scroll',(e) => {

   // console.log(e);
   let scrollResult = $(this).scrollTop();
   console.log(scrollResult);

   if(scrollResult > conBoxOffset){
      topBtn.stop().fadeIn(200);
   }else{
      topBtn.stop().fadeOut(200);
   }
}); // 익플 하위버전에서는 안 먹음.


topBtn.on('click',(e) => {
   e.preventDefault();
   // $(window).scrollTop(0);
   // $(window).animate({'scrollTop':0});
   $('html,body').stop().animate({'scrollTop':0},1000,'easeOutQuint',() => {
      $('h1>a').focus();
   });
   });




})(jQuery);


/* 자주 사용하는 이벤트1 
* mouseenter, mouseleave
* click, focus, blur
* keyup
* =========================
   * 자주 사용하는 메소드
* 선택자(자식, 부모, 형제)
* show/hide, addClass/removeClass
* attr, removeAttr
* =========================
   * 불러오거나 삽입하는 기능
* text, append, prepend
* load
* ==========================
   * 자주 사용하는 문법
* 연산자
* if, switch
* for
* function(){}
* var, const, let
* parseInt()
* ==========================
* eq(), index()

*/