// jq_mousewheel_01.js
(function($){
   let myarr = [];
   let myplus = [11,'aa',900];
   myarr.push(10);
   myarr.push(499);     // .push(); 배열의 뒤에 추가하는 기능.
   myarr.push(123);
   myarr.unshift(321);  // .unshift(); 배열의 앞에 추가하는 기능.
   console.log(myarr);
   
   myarr.pop();         // .pop(); 뒤에서부터 하나 제거하는 기능.
   myarr.shift();       // .shift(); 앞에서부터 하나 제거하는 기능.
   // console.log(myarr);

   let myarrPlus = myarr.concat(myplus);// 두개의 배열 메소드를 하나로 합친다.
   console.log(myarrPlus);

   // ----------------------------------------------------------------
   const htmlEl = $('html, body');
   const wrap = $('#wrap');
   const scrollEl = wrap.find('.scroll');
   // 최초의 스크롤 위치값 설정.
   // $('html, body').scrollTop(myScrollElTop[0]); //위치 고정
   htmlEl.animate({scrollTop:0});

   let myScrollElTop = [];
   let scrollLen = scrollEl.length;
   let timed = 700;
   let easing = ['easeInOutBack', 'easeOutBounce'];


   for(let i = 0; i < scrollLen; i++){
      let scrTop = scrollEl.eq(i).offset().top; // 각 .scroll의 위치값(offset().top)을 추출.
      myScrollElTop.push(scrTop);   // 추출해낸 위치값을 순서대로 배열에 추가.
   }; //for문 .scroll들의 위치값을 배열화
   console.log(myScrollElTop);



   // -------------------------------------------------------------------
   let myStatus = true; // ?
   let useN = 0; 

   $(window).on('mousewheel DOMMouseScroll',function(e){
      // e.preventDefault();
      console.log(e.detail);  //firefox 3과 -3
      console.log(e.originalEvent.wheelDelta);  // chrome -120과 120
      
      let n;
      
      if(e.originalEvent.wheelDelta){
         n = e.originalEvent.wheelDelta * -1;
      }else{
         n = e.detail * 40 ;
      }// if (크롬과 파이어폭스 구분+ 임의로 수치를 한쪽에 맞춰두기. // 아래로 스크롤시 + , 위로 스크롤시 -)
      console.log(n);

      // -------------------------------------------------------------------
      // 스크롤하면 화면 이동

      // 함수화 -------------------------
      const ScrollMagic = function(){
         // htmlEl.stop().animate({scrollTop:myScrollElTop[useN % scrollLen]},function(){
         htmlEl.stop().animate({scrollTop:myScrollElTop[useN]}, timed, easing[0], function(){
            myStatus = true;
         });
      };//ScrollMagic();
      // -------------------------------

      if(myStatus){
         myStatus = false; // 트랙패드오류를 막기 위해 들어오자마자 붙잡아두는 기능(?)
         if(n > 0){
            useN++;
            if(useN >= scrollLen){
               useN = scrollLen - 1;
            }
         }else{
            useN--;
            if(useN <= -1){
               useN = 0;
            }
         }  // useN값 추출.
         console.log(useN);         
         ScrollMagic();
      }// if(myStatus) = true


   });// $(window).on('mousewheel DOMMouseScroll')

})(jQuery);