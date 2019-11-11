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


   // con_02의 위치값 파악하기
   let con_02_offset = con_02.offset().top;

   //con_02의 위치에서 브라우저의 1/2높이만큼 전에서 구동 처리.
   let myCon02_offset = con_02_offset - (winH / 2);


   // con_03의 위치값 파악하기
   let con_03_offset = con_03.offset().top;

   //con_03의 위치에서 브라우저 1/2높이만큼 전에서 구동 처리.
   let myCon03_offset = con_03_offset - (winH / 2);

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
         con_01.find('.narr').children('.img_box').addClass('action');
         con_01.find('.narr').children('.nar_box').addClass('action');
      }else{
         con_01.find('.narr').children('.img_box').removeClass('action');
         con_01.find('.narr').children('.nar_box').removeClass('action');
      }


      // conBox2기능 : 뒤집기?
      if(winScroll > myCon02_offset){
         setTimeout(function(){  //일정시간만큼 지난 후에 작동.
            con_02.find('.con_02').addClass('action');
         },200);
      }else{
         con_02.find('.con_02').removeClass('action');
      }

      // conBox3기능 : scroll처리시 03이미지가  왼쪽에서 오른쪽으로 움직이게 만들기.
      let n = 0;
      
      if(winScroll > myCon03_offset){
         let myLeft = winScroll - myCon03_offset;
         
         let myn = Math.round(myLeft % 7);
         console.log(myn);
         if (myn < 10){
            n = '0' + myn;
         }else {n = myn;}
         con_03.find('.mv_bird').css({'left':myLeft + 'px','top':myLeft+ 'px','backgroundImage':'url("../../img/bird_foodieg/bird_' + n + '.png")'});
         
      }else{}


   });   // win.on('scroll')

   // let r = Math.random(); // 랜덤으로 숫자가 나오게 함.
   // let r = Math.round(4.2); // 반올림
   // let r = Math.ceil(4.9); // 올림
   // let r = Math.floor(4.9); // 내림
   // let r = Math.abs(-3.2); // 절대값

   // console.log(r);


})(jQuery);