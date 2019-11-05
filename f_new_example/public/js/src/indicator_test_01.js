// indicator_test_01.js
(function($){
   const miniProduct = $('#miniProduct');

   const indicator = miniProduct.children('.indicator');
   const indiLi = indicator.children('li');
   const indiLink = indiLi.children('a');
   
   const product = miniProduct.children('.product');
   const productWrap = product.children('ul');
   const productEach = productWrap.children('li');
   
   
   indiLi.eq(0).addClass('active');

   // 인디케이터 클릭시
   indiLink.on('focus',function(e){
      e.preventDefault();
      let i = $(this).parent('li').index();
      productWrap.stop().animate({'marginLeft':(-100 * i) + '%'});

      indiLi.eq(i).addClass('active');
      // $(this).parent('li').addClass('active');
      indiLi.eq(i).siblings('li').removeClass('active');
      // $(this).parent('li').siblings('li').removeClass('active');

      $(this).on('click',function(e){
         e.preventDefault();
         productEach.eq(i).children('a').focus();
      });
      
   });

   
   
})(jQuery);