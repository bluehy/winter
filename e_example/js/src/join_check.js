// join_check.js

(function($){
   // form 기능에서 사용하는 jQuery 메소드
   // Val(); -> value 값을 가져오는 기능.
   // hasClass('class이름') -> class이름의 유무 판단.
   // is(':checked') -> 속성의 기능의 상태(hover, focus, checked...등)를 확인하는 기능.
   // prop() -> 속성의 상황묘사
   // prop('checked',true) -> 속성의 상황묘사에서 역할 부여

   
   // ------------------------------------------------------
   // 전체 동의 클릭시, 전체가 체크되게 만들기
   const allCheck = $('#allCheck');
   allCheck.on('click',function(e){
      e.preventDefault();
      // console.log(e);
      let thisCheck = $(this).is(':checked');
      let thisC2 = $(this).prop('checked');
      let checkAttr = $(this).is('checked');
      console.log(checkAttr);

      if (!checkAttr){
         $(this).attr({'checked':'checked'});
         // $(this).prop('checked',true);
      }else{
         $(this).removeAttr('checked');
         // $(this).prop('checked',false);
      }
   });



})(jQuery);