(function($){
   const menuV = $('.accordion_menu_v');
   const menuDt = menuV.find('dt');
   const menuDd = menuV.find('dd');
   
   // menuDd.hide();
   menuDd.eq(0).show();

   // let t = menuDt.eq(0).contents(); //내용에 들어있는 모든 요소 파악.
   // menuDt.wrap('<div>'); // wrap : 부모요소를 생성하거나 파악.

   menuDt.contents().wrap('<a href=""></a>'); //js사용시엔 반복문으로 처리해야한다.
   const menuDtLink = menuDt.find('a');
   menuDtLink.css({'display':'block', 'width':'100%','height':'100%','color':'inherit'});

   //javascript
   //jQuery (javascript에 포함_라이브러리(요약체계로 바꾸어둔것))
   // 프레임워크(정해져있는 규격, 틀, 제어흐름을 스스로가 가짐.) vs 라이브러리(제어 흐름을 사용자가 가진다.)


   console.log('   # 클릭시 dd 슬라이드 토글 되는 기능 1 ========')

   // menuDtLink.on('click',function(){
   //    // $(this).siblings('dd').slideUp();
      // $(this).parent('dt').nextAll('dd').next('dt').prev('dd');
   //    $(this).parent('dt').next('dd').stop(/* 매개변수옵션존재 */).slideToggle(300);
   //    $(this).parent('dt').next('dd').siblings('dd').stop(/* 매개변수옵션존재 */).slideUp(300); 
   //    // $(this).next('dd').slideToggle(300);
   //    // $(this).next('dd').siblings('dd').slideUp(300); 
   // });
  
   //  # 클릭시 dd 슬라이드 토글 되는 기능 1 ======================= 



   console.log('   # 클릭시 dd 슬라이드 토글 되는 기능 2 ========')

   menuDt.on('click',function(e){
      e.preventDefault(); //a href="#"이벤트를 삭제해줌.
      let i = $(this).index()/2;
      // console.log(i); // i는 모든 형제 중 순서값.
      menuDd.eq(i).stop().slideToggle(300); //eq는 형제 중 같은 태그간 순서를 지정.
      menuDd.eq(i).siblings('dd').stop().slideUp(300);
   });


   //  # 클릭시 dd 슬라이드 토글 되는 기능 2 ======================= 



   
   console.log('   # 포커스, 블러일 때 클래스 추가하기 1 ========')

   const addC = function() {
      $(this).addClass('action');
   };
   const removeC = function() {
      $(this).removeClass('action');
   }
   // menuDtLink.on('focus', addC());
   // menuDtLink.on('blur', removeC());
   menuDtLink.on({'focus':addC, 'blur':removeC});
   
   //  # 포커스, 블러일 때 클래스 추가하기 1 ===========================
   


   console.log('   # 포커스, 블러일 때 클래스 추가하기 2 ========')

   menuDtLink.on('focus',function(){
      // $(this).css({'backgroundColor':'#0f9', 'color':'#000'});
      
      
      $(this).addClass('action');
      // $('head').contents('style').remove();
      $('head').find('title').before('<style>a.action{background-color:#578;}</style>');
   }).on('blur',function(){
      // $(this).css({'backgroundColor':'#0f9', 'color':'#000'});
      $(this).removeClass('action');  
      $('head').contents('style').remove();    
   });

   //  # 포커스, 블러일 때 클래스 추가하기 2 ===========================

})(jQuery);