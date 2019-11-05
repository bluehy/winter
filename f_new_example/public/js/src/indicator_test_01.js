// indicator_test_01.js
(function($){
   const miniProduct = $('#miniProduct');

   const indicator = miniProduct.children('.indicator');
   const indiLi = indicator.children('li');
   const indiLink = indiLi.children('a');
   
   const product = miniProduct.children('.product');
   const productWrap = product.children('ul');
   const productEach = productWrap.children('li');
   
   const slideLen = productEach.length;

   productEach.find('a').attr({'tabindex':-1}); // 슬라이드로 링크 이동한후에, 다시 인디케이터 탭으로 돌아올 수 있게.
   indiLi.eq(0).addClass('active');
// ---------------------------------------------------------------
   let i = 0;
   // 인디케이터 클릭시
   indiLink.on('focus click',function(e){
      e.preventDefault();
      i = $(this).parent('li').index();
      productWrap.stop().animate({'marginLeft':(-100 * i) + '%'});

      indiLi.eq(i).addClass('active');
      // $(this).parent('li').addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
      // $(this).parent('li').siblings('li').removeClass('active');

      $(this).on('keyup',function(e){
         e.preventDefault();
         if(e.keyCode == 13){
            productEach.eq(i).children('a').focus();
         }// if 엔터를 쳐야만, 링크로 이동하게끔. 가능하다면, 좌우 키눌렀을 때, 포커스 이동할 수 있게 지정도 해줄 것.
      });
      
   });

   // 자동슬라이드 기능
   let go, timed =3000; 
   const GoSlide = function(){
      go = setInterval(function(){
         console.log('gogo');
         i++;
         if(i >= slideLen){
            i = 0;
         };// i의 수치가 배너갯수를 넘어서는 순간, 초기값으로 돌려보냄
         productWrap.stop().animate({'marginLeft':(-100 * i) + '%'});
         indiLi.eq(i).addClass('active');
         indiLi.eq(i).siblings('li').removeClass('active');
      },timed); // setInterval() 일정시간마다

   };//GoSlide
   GoSlide();

   // 마우스 올리면 자동슬라이드 멈춤
   
   const StopSlide = function(){
      clearInterval(go); // setInterval을 취소하는 기능.
   }; // StopSlide
   
   miniProduct.on('mouseenter',function(){
      StopSlide();
   }); // miniProduct.on('mouseenter')

   miniProduct.on('mouseleave',function(){
      GoSlide();
   });// miniProduct.on('mouseleave')

})(jQuery);