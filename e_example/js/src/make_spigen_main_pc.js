// make_spigen_main_pc.js

(function($){
   // 1. #gnb영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
   // .clone() 메서드를 사용

   const gnb = $('#gnb');
   const sideGnbArea = $('.side_gnb_area');
   let gnbContents = gnb.contents().clone();
   // console.log(gnbContents);
   sideGnbArea.append(gnbContents);

// =============================================================
// 버튼 클릭시 side_gnb 나타나고 사라지게 만들기

const sideGnb = $('.side_gnb');
const openGnbBtn = $('.gnb_btn>button');
const closeGnbBtn = $('.close_gnb_btn>button');
let time = 600;

openGnbBtn.on('click',function(e){
   e.preventDefault();
   // sideGnb.show();
   sideGnb.stop().fadeIn(time/2);
   // sideGnb.css({'display':'block'}); //도 가능
});

closeGnbBtn.on('click',function(e){
   e.preventDefault();
   // sideGnb.hide();
   sideGnb.stop().fadeOut(time*1.5);
   // sideGnb.css({'display':'none'}); //도 가능
});



// #gnb에 마우스 올렸을 경우, dd를 나오게 만들기
   const gnbDl = gnb.find('dl');
   const gnbDd = gnb.find('dd');

   gnbDl.on('mouseenter',function(){
      gnbDd.stop().slideDown();
   });

   gnbDl.on('mouseleave',function(){
      gnbDd.stop().slideUp();
   });


// #gnb에 Dt에 focus 처리되면 dd가 나타나게 만들기
// focus는 a, button, form(input, textarea, select)요소가 가능.
   const gnbDt = gnb.find('dt');
   const gnbTitleLink = gnbDt.children('a');
   const gnbListLink = gnbDd.children('a');

   gnbTitleLink.on('focus',function(e){
      e.preventDefault();
      gnbDd.stop().slideDown();
   });

   gnbListLink.eq(-1).on('blur',function(e){
      e.preventDefault();
      gnbDd.stop().slideUp();
   });


})(jQuery);