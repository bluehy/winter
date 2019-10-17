(function($){
   const menuV = $('.accordion_menu_v');
   const menuDt = menuV.find('dt');
   const menuDd = menuV.find('dd');

   // menuDd.hide();
   menuDd.eq(0).show();

   menuDt.on('click',function(){
      // $(this).siblings('dd').slideUp();
      
      $(this).next('dd').stop(/* 매개변수옵션존재 */).slideToggle(300);
      $(this).next('dd').siblings('dd').stop(/* 매개변수옵션존재 */).slideUp(300); 
      // $(this).next('dd').slideToggle(300);
      // $(this).next('dd').siblings('dd').slideUp(300); 
   });
})(jQuery);