// paul_scroll.js

(function($){
   // offset().top   : 브라우저 최상단에서 얼만큼 떨어져있는가를 판단하는 기능.
   // offset().left  : 브라우저 왼쪽에서 얼만큼 떨어져있는가를 판단하는 기능.
            // bottom/right는 존재X
   // scrollTop()    : 브라우저의 위치(스크롤)이 이동되었을 때의 위치값을 판단하는 기능.
   
   const viewBox = $('#viewBox');
   const con1 = $('#conBox');
   const con2 = $('#conBox2');


   let viewLocation = viewBox.offset().top ;
   console.log(viewLocation);

   let con1Location = con1.offset().top ;
   console.log(con1Location);
   
   let con2Location = con2.offset().top ;

   let winScroll;
   console.log(winScroll);


   let scrollResult = 0;
   let n = 0;

   $(window).on('mousewheel DOMMouseScroll',function(e){
      console.log(e.originalEvent.wheelDelta);  // 크롬에만 존재하는 기능.(120)
      console.log(e.detail);                    // 파이어폭스에만 값이 3으로 움직임.

      let delta = e.originalEvent.wheelDelta;
      (delta) ? scrollResult = delta : scrollResult = e.detail * -40;      // if 와 같은 의미, 연산자이기 때문에 속도가 좀더 빠름.
      (scrollResult >= 0) ? n++ : n--;                         // scrollResult숫자가 절대값이 어떻게 튀든, 음수 양수만 구분해서 횟수측정하는 느낌의 개념.

      // if(e.originalEvent.wheelDelta){ //크롬0
      //    scrollResult = e.originalEvent.wheelDelta;
      // }else{
      //    scrollResult = e.detail * -40;      // 크롬에서는 스크롤을 내릴 때 -120이고, 파이어폭스에서는 스크롤일 내릴 때, 3이 뜨기 때문에.
      // }

      console.log(scrollResult + '스크롤결과'); // 맥에서, 트랙패드 스크롤조작 등은 결과값이 좀 다르지만, 음수 양수만이라도 통일된 걸 확인할 것.
      console.log(n); 



      winScroll = $(window).scrollTop();
      if(winScroll >= con1Location){
         con2.css({'backgroundColor':'#fa7', 'marginLeft':'-50vw', 'transform':'rotate(45deg)','transition':'all 300ms ease'},500)
      }else{
         con2.removeAttr('style');
      }
   

   });

})(jQuery);