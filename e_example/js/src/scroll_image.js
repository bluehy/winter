(function($){
   const win = $(window);
   const wrap = $('#wrap');
   const viewBox = wrap.children('#viewBox');

   viewBox.css({'position':'fixed','top':0,'backgroundColor':'#fff'});
   viewBox.find('.title').css({'position':'relative','top':0})


// ------------------------------------------------------------------------
// 이미지 담기
   const viewFix = viewBox.find('.fix_img');
   let url = '../img/apple/large_';
   let j;
   for(let i =0; i <123; i++){
      if(i<10){
         j = '000' + i;
      }else if(i<100){
         j = '00' + i;
      }else if(i<1000){
         j = '0' + i;
      }else{
         j = i;
      }
      j += '.jpg'
      viewFix.append(`<img src="${url+j}" alt="맥북 16인치_${j}">`);
      viewFix.children('img').eq(i).css({'zIndex':123 - i});
   }//for

   viewFix.css({zIndex:50});
   viewFix.children('img').eq(0).show();
// ------------------------------------------------------------------------------
// 스크롤 기능
   win.on('scroll',function(){
      let thisS = $(this).scrollTop();
      // console.log(thisS);
      // console.log(thisS * 0.001);
      let op = 1 - (thisS * 0.001);
      if(op < 0) {
         op = 0;
      }
      // console.log(op);
      viewBox.find('.title').css({ 'top': (-thisS / 5) + 'px', 'opacity': op});
      // ---------------------------------------------------------------------
   
      
   })// win.on('scroll')

})(jQuery);
