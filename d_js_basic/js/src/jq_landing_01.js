// jq_landing_01.js
(function($){
   // 스크롤시 header영역 크기 바꾸기

   const win = $(window);
   const headBox = $('#headBox');
   const viewBox = $('#viewBox');
   const con_01 = $('#conBox_01');
   const con_02 = $('#conBox_02');
   const con_03 = $('#conBox_03');


   let winH = win.outerHeight(); // 브라우저의 높이값 파악.

   // headBox의 높이값 파악하기.
   let headBoxH = headBox.outerHeight();

   // con_01의 위치값 파악하기.
   let con_01_offset = con_01.offset().top;  // con_01.이 top으로부터 얼마나 떨어저였는지 파악.
   
   // con_01의 위치에서 브라우저의 2/3높이만큼 전에서 구동처리.
   let myCon01_offset = con_01_offset - (winH / 3 * 2);


// -------------------------------------------------------------- 
   win.on('scroll',function(){
      let winScroll = win.scrollTop(); // 브라우저의 스크롤 위치값
      console.log(headBoxH +'&'+winScroll);

      //headBox 기능
      if(winScroll >= headBoxH){
         headBox.addClass('action');
      }else{
         headBox.removeClass('action');
      }

      // viewBox기능 : viewBox나타나게 만들기
      
      if (winScroll > headBoxH){
         viewBox.find('h2').addClass('action');
         viewBox.find('p').addClass('action');
      }else {
         viewBox.find('h2').removeClass('action');
         viewBox.find('p').removeClass('action');
      }

      // conBox01기능 : 밖에서 안으로 모이게 만들기
      if(winScroll > myCon01_offset){
         con_01.find('.narr').fadeIn(500);
      }else{
         con_01.find('.narr').fadeOut(500);
      }


   });   // win.on('scroll')

})(jQuery);