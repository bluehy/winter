// gnb_01.js

/* 
* 1. 마우스 또는 키보드 포커스처리시, 하위메뉴 전체 나타나게 만들기(배경이 하얗게)
* 2. 마우스 또는 키보드 포커스처리시, 하위메뉴 전체가 나타나게 만들기(별도배경없이)
* 3. 마우스 또는 키보드 포커스처리시, 해당 메뉴 하위하나만 나타나게 만들기
*/

// (function(){
   
//    const gnb = $('#gnb');
//    const gnbUl = gnb.children('ul');
//    const gnbLi = gnbUl.children('li');
//    const gnbLink = gnbLi.children('a');

//    const subUl = gnbLink.next('ul');
//    const subLi = gnbUl.children('li');

//    // .hide();

//    gnbLink.on('focus',function(){
//       // $(this).closest('ul').find('ul').stop().slideUp(300);
//       subUl.stop().slideDown(300);
//       gnbUl.css({'backgroundColor':'#fff'});
//    });
//    gnbLink.on('blur',function(){
//       $(this).closest('ul').find('ul').stop().slideUp(300);
//    })


//    // gnbLink.on('focus',function(){
//    //    // subUl.slideUp();
//    //    subUl.stop().slideDown();
//    // }).on('blur',function(){
//    //    subUl.stop().slideUp();
//    // });



//    // gnbLink.on('focus',function(){
//    //    $(this).next('ul').slideUp(300); 
//    //    $(this).next('ul').slideToggle(300); 
//    // });
//    // gnbLink.on('blur',function(){
//    //    $(this).next('ul').slideUp(300);
//    // });
// })(jQuery);





(function(){
   const gnb = $('#gnb');
   const gnbArea = gnb.children('ul');
   const gnbArLi = gnbArea.children('li');

   // gnbArLi.children('a').attr('class':'titleLink');
   gnbArLi.children('a').addClass('titleLink');

   const titleLink = $('.titleLink');
   const partList = titleLink.next('ul');
   const subLi = partList.find('li');
   const subLink = subLi.find('a');

   let timed = 500;

   // =======================================================
   // 1번 기능 수행하기
   gnb.css({'backgroundColor':'transparent'});
   gnbArea.css({'height':'auto'/* ,'backgroundColor':'rgba(0,0,0,0.5)' *//* ,'box-shadow':'0.3rem 0.3rem 0.3rem rgba(0,0,0,0.5)' */});

   //focus잡히면 보이게하기
   titleLink.on('focus',function(e){
      e.preventDefault(); // 실제 이동해야한다면 사용해서는 안됨.
      partList.stop().slideDown(timed);
      gnbArea.css({'backgroundColor':'rgba(0,0,0,0.5)'});
   });

   // 블러처리되면 사라지기
   subLink.eq(-1).on('blur',function(e){
      e.preventDefault()
      partList.stop().slideUp(timed);
      gnbArea.css({'backgroundColor':'transparent'});
   });

   //gnbArea에 마우스 올렸을 때 나타나게 하기
   gnbArea.on('mouseenter',function(){
      partList.stop().slideDown(timed);
   });
   
   gnbArea.on('mouseleave',function(){
      partList.stop().slideUp(timed);
   });


   // ============================================================
   // 2번 기능 수행하기 (배경이 따라오지X)
   gnbArea.css({'height':'100%'})
   //이외는 1번기능과 동일


   // =============================================================
   // 3번기능 수행하기  

   



})(jQuery);