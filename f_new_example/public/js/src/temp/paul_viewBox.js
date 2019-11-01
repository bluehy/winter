// paul_viewBox.js


(function($){
   const viewBox = $('#viewBox');
   
   // 버튼 및 인디케이터 영역
   const indi = viewBox.find('.indicator');
   
   const indiCon = indi.find('p').children('em');
   const indiBtn = indi.find('.view_btn').children('button');


   // 슬라이드 영역
   const slide = viewBox.find('.slide_form');
   const slideUl = slide.find('ul');
   const slideLi = slideUl.find('li');
// --------------------------------------------------------------// 선택자

//  1. 슬라이드 영역 순서에 맞게 배치하기 -------------------------------
let liLen = slideLi.length;            // == 3
   
   const slideZindexSet = function(){            // zIndex조절을 위해 함수화하여 가져간다. (zIndex초기화)
   for(let i = liLen - 1; i >= 0; i--){         // 역순 반복문 
                                                // (i가 0보다 크거나 같을 때(조건이 참일 때,), 수행하는 반복문.)
      slideLi.eq(i).css({'zIndex':liLen - i});  // i가 커질수록 zIndex의 값이 줄어든다.(3-1=2 > 3-2=1 > 3-3=0... )
   }  
   }//   const slideZindexSet
   slideZindexSet();                            // 최초 수행
   // console.time();
   // for(let i = 0; i < liLen; i++){            // + 반복문
   //    slideLi.eq(i).css({zIndex:liLen - i});    // i가 커질수록 zIndex의 값이 줄어든다.(3-1=2 > 3-2=1 > 3-3=0... )
   // }
   // console.timeEnd();


   // slideLi.eq(0).css({zIndex:3});
   // slideLi.eq(1).css({zIndex:2});
   // slideLi.eq(2).css({zIndex:1});      // 원리 이해하기


   let textN = 0;       // 현재 0, 1, 2 까지 가능. why ? 총 3개의 리스트 목록갯수만큼.

   const pageNum = function(n){
      indiCon.text('0' + (n + 1));
   }
   pageNum(textN);      // pageNum함수의 n에 textN을 대입시켜 수행한다.


// --------------------------------------------------------------------

// li 보이지 않게 하고,  -> li 요소의 첫번째만 보이게 만들고,
// slideLi.hide();   ->
slideLi.eq(0).siblings().hide();
slideLi.eq(0).find('dl').addClass('action');

// -----------------------------------------------------------------------


const fakeBtn = $('.fake_btn');
fakeBtn.hide();

// 버튼 클릭 ----------------------------------------------------------

indiBtn.on('click',function(e){
   e.preventDefault();
   // e.stopPropagation();          // 버블링 현상 제거(크게 효과는X).  (버블링 현상 해소법 1)
   fakeBtn.show();               // 페이크버튼

   // indiBtn.hide();               // 수행이 끝날 때까지 버튼사용을 불가하게 만들기. (버블링 현상 해소법 2)
   // indiBtn.attr({'disable':'true'}); // 버튼 비활성화 (버블링 현상 해소법 3) (잘 안먹힘)

   if($(this).index() == 0){     //    next 버튼 클릭
      textN++;
      if(textN >= liLen){        // textN 이 3보다 크거나 같아지면, 수행할 것. (페이지 넘버 처음으로 돌아감)
         textN = 0;
      }
      pageNum(textN);
      indiBtn.eq(0).addClass('action');
   }else{                        //    prev 버튼 클릭
      textN--;
      if(textN <= -1){           // textN이 -1보다 작거나 같아지면, 수행할 것. (페이지 넘버 마지막으로 돌아감)
         textN = liLen - 1;
      }
      pageNum(textN);
      indiBtn.eq(1).addClass('action');
   }

// 버튼 클릭시 해당하는 순서에 맞는 li 요소를 나타나게 만들기 ------------------
// 옆에서부터 들어오는 슬라이드 만들기 ----------------------------------------

   // let slideThis = slideLi.eq(textN);                             // 변수화

   // slideThis.css({'zIndex':liLen + 2, 'left': -100 + '%'});       // 선택된 슬라이드를 강제적으로 위쪽, 왼쪽으로 배치하여,
   //    slideThis.stop().slideDown(function(){                      // 슬라이드 다운으로 내린 후에,
   //       slideThis.animate({'left':0},function(){                 // 옆에서부터 들어오게 만들기.(그 후에 슬라이드가 사라져야 함.)
   //          slideThis.siblings().hide();                          // 다른 내용들을 지우고,
   //          slideZindexSet();                                     // zIndex를 다시 초기화
   //       }); //      slideThis.animate({'left':0},function(){});
   //    });//    slideThis.slideDown(function(){});

// ----------------------------------------------------------------------------
   
// 슬라이드가 늘어나면서 나타나게 만들기-------------------------------------------

   let slideThis = slideLi.eq(textN);                             // 변수화

   slideThis.css({'zIndex':liLen + 2, 'width':0, /* 'overflow':'hidden', */'padding':0});             // 선택된 슬라이드를 강제적으로 위쪽, 크기를 0으로,
      slideThis.css({'display':'block', 'padding':'5vw 0'});                        // 일단 나타나게 한 후에,(패딩값 조절)
         slideThis.stop().animate({'width':100 + '%','paddingLeft':'5vw'},1000, 'easeOutCubic' ,function() {     // 크기를 늘리면서 등장, 
                                                                                    // + (안에 내용물도 등장한 후에 나타나게 하는 것도 방법)   
            slideThis.siblings().hide();                                            // 다른 내용들을 지우고,
            slideZindexSet();                                                       // zIndex를 다시 초기화
            
            // indiBtn.show();                                                         // (버블링 현상 해소법 2)
            // indiBtn.attr({'disable':'false'});                                      //(버블링 현상 해소법 3) (잘 안됨)
            fakeBtn.hide();

            slideThis.siblings().find('dl').removeClass('action');
            slideThis.find('dl').addClass('action');

            indiBtn.removeClass('action');
         });//    slideThis.animate({'width':100 + '%'},function(){...}};
     

// --------------------------------------------------------------------------

});//    indiBtn.on('click')

// --------------------------------------------------------------------



})(jQuery); //   최신형. head 태그 안에서는 작동 X. 
            // 다른 프레임워크나 라이브러리에서 $의 쓰임과 뒤섞이지 않게끔 개선한 형태.


//  head태그 안에 넣어주면 작동하는 js
// window.jQuery(document).ready(function(){});  //   expand
// $(document).ready(function(){});  //   과거형
// $(function(){})   // 과거형의 축약형