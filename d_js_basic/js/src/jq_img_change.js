// ja_img_change.js
(function($){
   const wrap = $('#wrap');
   const myForm = wrap.find('.mouse_form');
   const myLoca = wrap.find('.mouse_location');

   let url = '../../img/gear/';
   // myForm.css({'backgroundImage':'url("'+url + "gear_001" +'.png")'});
   for(let i = 1; i <= 79; i++){
      if(i <10){
         j = '00'+ i;
      }else if(i < 100){
         j = '0'+ i;
      }else{
         j = i;
      }// 001~100까지
      myForm.append(`<img src="${url}gear_${j}.png" alt = "이미지 삽입">`);
   };//for(이미지 미리 불러오기)

   const myImg = myForm.find('img');
   myImg.parent().css({'position':'relative', 'overflow':'hidden'})
   myImg.css({'position':'absolute','top':0,'left':0});
   myImg.eq(0).siblings().hide();

   myLoca.on('mousemove',function(e){
      let mv = e.originalEvent.offsetX;
      // offsetX,Y = 선택된 애의 범위 내에서 0~n까지의 x값)
      // clientX,Y = 브라우저 기준(position: fixed와 유사한 개념으로...?)
      // pageX,Y = 전체 스크롤페이지 기준으로

      let thisWidth = $(this).outerWidth();
      console.log(mv);
      let myi = Math.floor(mv / thisWidth * 79); // (마우스 위치값 / 전체값(width) * 사용하려는 이미지 갯수)의 정수값
      console.log(myi);

      myImg.eq(myi).siblings('img').hide();
      myImg.eq(myi).show();

      
      // let i;
      // if(myi <10){
      //    i = '00'+ myi;
      // }else if(myi < 100){
      //    i = '0'+ myi;
      // }else{
      //    i = myi;
      // }// 001~100까지
      // console.log(i);
      // myForm.css({'backgroundImage':`url("${url}gear_${i}.png")`});
   });

})(jQuery);

