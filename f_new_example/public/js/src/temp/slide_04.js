// slide_04.js

(function($){
   console.log("slide_04.js를 불러왔어요.");

   const slideForm = $('.slide_03_form');
   const slideGuide = slideForm.children('ul');
   let slideLi = slideGuide.find('li');

   // ============================================
   // li에 이름(class) 붙이기 (slide_03_con_0$)
   for (let i = 0; i <= slideLi.length; i++){
      let classname = 'slide_03_con_' + (i + 1);
      slideLi.eq(i).addClass(classname);
   };

   let cloneLi = slideLi.eq(-1).clone(true);

   cloneLi.prependTo(slideGuide);
   // slideGuide.prepend(slideLi.eq(-1)); 와 같음

//    # 주의점! ******************
   // 1. prepend, prependTo 의 역할을 정확하게 구분.
   /* : 감싸는 영역.prepend(담는 내용)
        담는 내용.prependTo(감싸는 영역)  */

   // 2. 마지막 영역을 복제(clone)한 후에 앞에 담을 것.

   // 3. css작업시 nth-child()를 이용하여 이미지/기능을 담으면...순서가 의도한 대로 안 나올 가능성이 있음.
   //    => 각각 class이름을 부여하여 이미지/기능을 처리해야한다.
   //    (복제 전에 이름을 부여!!!!!!!)

   // 4. 또한, 그 부모인 영역의 넓이는 기존 갯수 + 1 만큼의 크기값으로 재설정해야한다.
   
// ------------------------------------------------------------
   const slide03Btn = $('.slide_03_btn');
   const nextBtn = slide03Btn.children('.next');
   const prevBtn = slide03Btn.children('.prev');

   let myn = 0;
       slideLi = slideGuide.find('li'); 
       // 처음 선언했던 slideLi와는 다른 상태(clone해서 붙여넣었기 때문에 갱신해줘야 함!) _ 6개.
   const bannerLen = slideLi.length;
   console.log(bannerLen);

   nextBtn.on('click',function(e){
      e.preventDefault();
      myn++;                                // +1; 다음 이미지로 가기 위한 연산
      if(myn >= bannerLen -1 ){             // '0' 1 2 3 4... 마지막에서 처음으로 넘어갈 때의 myn값은 전체 길이보다 1 작을 수 밖에 없음.
         slideGuide.css({'left': '100%' }); // 마지막 이미지에서 클론해왔던 앞의 이미지(100%) 로 이동하게 만들고, 
                                            // (+100%로 순식간에 바뀜. css는 transition을 넣기 전엔 애니메이션 효과X)
         myn = 0;                           // 그 다음 첫번째 이미지(리스트 내용상 실제 첫번째 이미지)로 이동하기
      }
      let per = -100 * myn + '%' ;
      slideGuide.stop().animate({'left': per }); // 다음 이미지로 이동하는 기능 수행
   });

   prevBtn.on('click',function(e){
      e.preventDefault();
      myn--;                                                // 이전 이미지로 가기 위한 연산
      let per = -100 * myn + '%' ;                          // per 변수 설정
      slideGuide.stop().animate({'left': per },function(){  // 바로 앞의 이미지로 이동하기 기능 수행
         if(myn <= -1){                                     // 맨 앞에서는 마지막 이미지로 이동하기 
            myn = bannerLen -2 ;                            // (전체 갯수에서 -2인 이유 : 첫 이미지로부터 -400%만큼 가야해서(?))
            per = -100 * myn + '%' ;
            slideGuide.css({'left': per });                 // 위치 css로 재지정해주기
         }
         // per = -100 * myn + '%' ;
         // slideGuide.css({'left': per });                 // (위치 css로 재지정해주기. (맨앞에서->맨뒤로 가는 기능에서만 유효한 정도..,.?))
      });

   });

})(jQuery);