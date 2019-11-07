// slide_test_02.js

(function($){

   const fullWrap = $('#wrap');
   const wrap = fullWrap.children('#miniProduct');

   const miniBtn = wrap.children('.mini_btn');
   const menuBtn = miniBtn.children('button');

   const indicator = wrap.children('.indicator');
   const indiLi = indicator.children('li');

   const productWrap = wrap.children('.product_wrap');
   const productUl = productWrap.children('.product');
   let productLi = productUl.children('li');
   const productLink = productLi.children('a');


   let timed = 1000;
   let productLen = productLi.length;

   productLi.find('a').attr({'tabindex':-1});
   let myN = 0;

   // 슬라이드 베이직 세팅 ======================================
   //슬라이드 영역 이미지 추가
   const imgUrl = "../img/slide_test_02/menu_0";
   const ext = ".png";

   for(let i = 0; i < productLen; i++){
      productLi.eq(i).css({'backgroundImage':'url("'+ imgUrl + (i+1) + ext +'")'})
   };


   // 리스트 클론 + 위치 초기값 지정
   productLi.eq(-1).clone(true).prependTo(productUl);
   productLi = productUl.children('li');
   productLen = productLi.length;
   console.log(productLen);
   productUl.css({'width':100 * productLen +'%','marginLeft' : '-100%'});
   productLi.css({'width':100 / productLen + '%'})

   // 버튼 영역 ==============================================
   // 버튼 호버시 투명도 변화
   menuBtn.on('mouseenter',function(){
      $(this).stop().animate({'opacity':'80%'});
   });

   menuBtn.on('mouseleave',function(){
      $(this).stop().animate({'opacity':'100%'});
   });


   // 버튼 클릭시 슬라이드 이동
   menuBtn.on('click',function(e){
      e.preventDefault();
      let has = $(this).hasClass('next');
      console.log(has);
      if(has){
         myN++;
         if(myN >= productLen - 1){
            myN = 0;
            productUl.stop().css({'left':100 + '%'});
         }
      }else{
         myN--;
      }
      console.log(myN);
      productUl.stop().animate({'left':-100 * myN +'%'},function(){
         if(myN <= -1){
            myN = productLen - 2;
            productUl.css({'left':-100 * myN + '%'});
         }
      });
      indiLi.eq(myN).siblings().removeClass('action');
      indiLi.eq(myN).addClass('action');
   }); // menuBtn.on('click')



   //인디케이터 영역 ==========================================
   // 초기값(첫번째 인디케이터 클래스 추가)
   indiLi.eq(0).addClass('action');


   // 인디케이터 클릭시 위치 이동   
   indiLi.children('a').on('focus',function(e){
      e.preventDefault();
      myN = $(this).parent('li').index();
      
      $(this).parent('li').addClass('action');
      $(this).parent('li').siblings().removeClass('action');
      productUl.stop().animate({'left':-100 * myN + '%'});
      
      //인디케이터 클릭시 슬라이드 링크로 이동.
      indiLi.children('a').on('click',function(e){
         e.preventDefault();
         productLi.eq(myN).children('a').focus();
      })// indiLink'click'
   })



   // 슬라이드 영역 ============================================
   // 자동 슬라이드
   let go;
   const GoSlide = function(){
      go = setInterval(function(){
         myN++;
         // console.log('1초지났슴니다')
         if(myN >= productLen - 1 ){
            myN = 0;
            productUl.stop().css({'left':100 +'%'});
         }
         productUl.stop().animate({'left': -100 * myN + '%'});
         indiLi.eq(myN).addClass('action');
         indiLi.eq(myN).siblings().removeClass('action');
      },timed); // go = setInterval
   }// GoSlide()
   GoSlide();

   const StopSlide = function(){
      clearInterval(go);
   };

   wrap.on('mouseenter',function(){
      StopSlide();
   });
   
   wrap.on('mouseleave',function(){
      GoSlide();
   });

   wrap.find('a').on('focus',function(){
      StopSlide();
   }); //내부의 a요소에 포커스가 잡혔을 때, 자동 슬라이드 X

   wrap.find('a').on('blur',function(){
      GoSlide();
   });

})(jQuery);