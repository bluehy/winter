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
const gnbDl = gnb.find('dl');
const gnbDd = gnb.find('dd');
const gnbDt = gnb.find('dt');
const gnbTitleLink = gnbDt.children('a');
const gnbListLink = gnbDd.children('a');

let time = 600;


openGnbBtn.on('click',function(e){
   e.preventDefault();
   // sideGnb.show();
   sideGnb.stop().fadeIn(time/2, function(){
      $(this).on('keyup',function(e){
         console.log(e.keyCode);
         //esc = 27
         if (e.keyCode == 27){
            sideGnb.stop().fadeOut(time*1.5);
            openGnbBtn.focus();
         }
         
      })
   });
   closeGnbBtn.focus();
   // sideGnb.css({'display':'block'}); //도 가능

});

closeGnbBtn.on('click',function(e){
   e.preventDefault();
   // sideGnb.hide();
   sideGnb.stop().fadeOut(time*1.5);
   // sideGnb.css({'display':'none'}); //도 가능
});



// #gnb에 마우스 올렸을 경우, dd를 나오게 만들기

   const addAction = function(){
      let li = $(this).parents('li');
      li.find(gnbTitleLink).addClass('action');
      li.siblings().find(gnbTitleLink).removeClass('action');
      // $(this).siblings().find(gnbTitleLink).removeClass('action')
      gnbDd.stop().slideDown();
   }

   // gnbDl.on('mouseenter', addAction);


   const removeAction = function(){
      $(this).parents('li').find(gnbTitleLink).removeClass('action');
      gnbDd.stop().slideUp();
   }


   // gnbDl.on('mouseleave',removeAction);

   gnbDl.on({'mouseenter':addAction, 'mouseleave':removeAction});


// #gnb에 Dt에 focus 처리되면 dd가 나타나게 만들기
// focus는 a, button, form(input, textarea, select)요소가 가능.


   // gnbTitleLink.on('focus',function(e){
   //    e.preventDefault();
   //    gnbDd.stop().slideDown();
   //    // $(this).on('focus',addAction);
   // });

   // gnbListLink.eq(-1).on('blur',function(e){
   //    e.preventDefault();
   //    gnbDd.stop().slideUp();
   //    // $(this).on('blur',removeAction);
   // });

   gnbTitleLink.on('focus',addAction);
   gnbListLink.on('blur',addAction);
   gnbListLink.eq(-1).on('blur',removeAction);
   
   
// .side_gnb_area 내부의 마지막 a요소에서 blur처리되면, .close_gnb_btn으로 다시 focus처리되어라.
// =****************************=현재 문제 있는 부분
   const sideLink = sideGnbArea.find('a');
   const sideLastLink = sideLink.eq(-1);
   // sideLastLink.css({'fontSize':'2rem'}); //선택 확인용

   // $('h1').find('a').on('focus'); // focus가 잡히면
   // $('h1').find('a').focus(); // focus를 잡아라.
      
   
   sideLastLink.on('blur',function(e){
      closeGnbBtn.attr({'tabindex':1});
      e.preventDefault();
      closeGnbBtn.focus(); // 
   }); 

// =****************************=현재 문제 있음

// .side_gnb_area에서 키보드 esc키를 누르면, 빠져나가고 이전의 위치로 돌아가라.
   // -> .side_gnb_area가 보이는 곳에서 수행.



})(jQuery);