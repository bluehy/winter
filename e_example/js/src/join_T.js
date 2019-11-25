(function($){
   // id
   const userId = $('#userId');
   // pw
   const userPw = $('#userPw');
   const userPwR = $('#userPwR');

   // ---------------------------------------------------
   // 아이디입력창 입력되었는지 확인
   
   userId.on('blur',function(){
      let thisVal = $(this).val();
      console.log(thisVal);

      if(thisVal == ""){
         // console.log('내용을 입력하지 않았음');
         $(this).closest('li').addClass('error');
      };

   });//userId.on('blur');


   // -------------------------------------------------------
   // pw비교해서 일치여부 확인하기

   let beforePwVal, afterPwVal;

   userPw.on('blur',function(){
      beforePwVal = userPw.val();
      let thisVal = $(this).val();
      let thisLi = $(this).closest('li');

      if(thisVal == ""){
         thisLi.addClass('error');
         thisLi.find('.narr').text('비밀번호를 입력하세요.')
      }if(thisVal.length > 0 && thisVal.length <= 5){
         thisLi.addClass('error');
         thisLi.find('.narr').text('비밀번호를 6~15자리로 입력하세요.')
      }else{
         thisLi.removeClass('error');
      }
   });//

   userPwR.on('blur',function(){
      afterPwVal = userPwR.val();
      // console.log(beforePwVal + ' : ' + afterPwVal);
      if(beforePwVal !== afterPwVal){
         $(this).closest('li').addClass('error');
         console.log('비밀번호가 일치하지 않습니다.');
      }else{
         $(this).closest('li').removeClass('error');
      }
   });//userPwR.on('blur')


   // -------------------------------------------------------
   // 정규 표현식
   // regular expression(RegExp)

   let a = 10;// let r = 'a';
   let b = 4; // let n = 0;
   let c = 8;// let v = r;
   // let a = [];
   // let o = {};
   let re = a + c ;                 // = 18
       re = /a + c/;                // = /a + c/ <- 권장되는 형태
   let re2 = new RegExp('a + c');   // = /a + c/
   console.log(re);
   // 위의 re와 re2 중 권장되는 형태는 re.

   // 정규표현식 메소드
   // 1. exec     : 대응되는 문자열을 찾는 메소드(배열반환)
   // 2. test     : 해당하는 문자열이 있는지 파악(true/false)
   // 3. match    : 해당하는 문자열이 있는지 파악(배열반환)
   // 4. search   : 해당하는 문자열이 있는지 파악(인덱스 파악)
   // 5. replace  : 찾아서 바꾸기
   // 6. split    : 문자열을 배열로 반환(string메소드)


})(jQuery);