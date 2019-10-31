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
   
   for(let i = liLen - 1; i >= 0; i--){         // 역순 반복문 
                                                // (i가 0보다 크거나 같을 때(조건이 참일 때,), 수행하는 반복문.)
      slideLi.eq(i).css({'zIndex':liLen - i});  // i가 커질수록 zIndex의 값이 줄어든다.(3-1=2 > 3-2=1 > 3-3=0... )
   }  

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

// 버튼 클릭 ----------------------------------------------------------

indiBtn.on('click',function(e){
   e.preventDefault();
   if($(this).index() == 0){     //    next 버튼 클릭
      textN++;
      if(textN >= liLen){        // textN 이 3보다 크거나 같아지면, 수행할 것. (페이지 넘버 처음으로 돌아감)
         textN = 0;
      }
      pageNum(textN);
   }else{                        //    prev 버튼 클릭
      textN--;
      if(textN <= -1){           // textN이 -1보다 작거나 같아지면, 수행할 것. (페이지 넘버 마지막으로 돌아감)
         textN = liLen - 1;
      }
      pageNum(textN);
   }
});

// --------------------------------------------------------------------




})(jQuery); //   최신형. head 태그 안에서는 작동 X. 
            // 다른 프레임워크나 라이브러리에서 $의 쓰임과 뒤섞이지 않게끔 개선한 형태.


//  head태그 안에 넣어주면 작동하는 js
// window.jQuery(document).ready(function(){});  //   expand
// $(document).ready(function(){});  //   과거형
// $(function(){})   // 과거형의 축약형