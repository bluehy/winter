(function($){
   // -------------------------------------------------------------------
   // 정규표현식을 활용한 유효성검사용 변수

   let checkPw = /^(?=.*[a-zA-Z]![0-9])(?=.*[^a-zA-Z0-9]|.*[0-9]).{6,15}$/;
   // ^(?=.*[a-zA-Z]) : 대소문자 가리지 않는 영문으로 시작하고,
   // (?=.*[^a-zA-Z0-9]|.*[0-9]) : 영문,숫자 또는 숫자로 이루어져있는
   // {6,15}$ : 6글자부터 15글자

   let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[/w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
   // ^([\w-]+(?:\.[\w-]+)*)  : 어떤 글자든 입력
   // @                       : 이메일 형식의 @문자.
   // ((?:[\w-]+\.)*\w[\w-]{0,66})  : 이메일 주소 파트
   // \.([a-z]{2,6}(?:\.[a-z]{2})?)$   : \.는 정규표현식 기능이 아님을 의미하는 \, 이메일 형식 체크 ex) .co.kr

   let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
               // ^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$] : 전화번호 형태 (000-0000-0000)
   
   // ----------------------------------------------------------------------
   
   
   // ---------------------------------------------------------------
   // id
   const userId = $('#userId');
   // pw
   const userPw = $('#userPw');
   const userPwR = $('#userPwR');
   const pwLabel = $('label[for="userPw"]');

   // ---------------------------------------------------
   // 아이디 입력창 입력되었는지 확인 & 아이디의 형태가 이메일의 형태인지 확인(정규표현식 활용)
   
   userId.on('blur',function(){
      let thisVal = $(this).val();
      console.log(thisVal);

      if(thisVal == ""){
         // console.log('내용을 입력하지 않았음');
         $(this).closest('li').addClass('error');
         $(this).closest('li').find('.narr').text('이메일을 입력하세요.');
      }else if(!emailCk.test(thisVal)){
         $(this).closest('li').addClass('error');
         $(this).closest('li').find('.narr').text('이메일 형식에 맞게 내용을 입력하세요.');
      }else{
         $(this).closest('li').removeClass('error');
      }

   });//userId.on('blur');
   // ---------------------------------------------------------



   // --------------------------------------------------------
   // pwlabel누를 때는 비밀번호가 텍스트형태로 보이게 만들기
   pwLabel.on('mousedown',function(e){
      console.log(e.which); // 왼버튼:1 오른버튼:3 가운데버튼:2로 구분됨 
      if(e.which == 1){
         userPw.attr({'type':'text'});
      }
   });//pwLabel.on('mousedown');
   
   pwLabel.on('mouseup',function(e){
      if(e.which){
         userPw.attr({'type':'password'});
      };
   });//pwLabel.on('mouseup');


   // -------------------------------------------------------
   // pw비교해서 일치여부 확인하기 & 글자수 제한 & 영문,숫자(특문)혼용 확인(정규표현식)

   let beforePwVal, afterPwVal;

   userPw.on('blur',function(){
      beforePwVal = userPw.val();
      let thisVal = $(this).val();
      let thisLi = $(this).closest('li');

      if(thisVal == ""){
         thisLi.addClass('error');
         thisLi.find('.narr').text('비밀번호를 입력하세요.');
      }else if(thisVal.length > 0 && thisVal.length <= 5){
         thisLi.addClass('error');
         thisLi.find('.narr').text('비밀번호를 6~15자리로 입력하세요.');
      } else if (!checkPw.test(thisVal)){
         thisLi.addClass('error');
         thisLi.find('.narr').text('영문대소문자,숫자,특수문자를 혼용하여 비밀번호를 입력하세요.')
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


   // 영문대/소문자 및 숫자(특수문자)포함하여 6~15글자까지
// let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{6,15}$/;
//             // ^(?=.*[a-zA-Z]) : 대소문자 가리지 않는 영문으로 시작하면서,
//             // (?=.*[^a-zA-Z0-9]|.*[0-9]) : 영문,숫자 또는 숫자로 이루어져있는
//             // {6,15}$ : 6글자부터 15글자

// let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[/w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
//             // ^([\w-]+(?:\.[\w-]+)*)  : 어떤 글자든 입력
//             // @                       : 이메일 형식의 @문자.
//             // ((?:[\w-]+\.)*\w[\w-]{0,66})  : 이메일 주소 파트
//             // \.([a-z]{2,6}(?:\.[a-z]{2})?)$   : \.는 정규표현식 기능이 아님을 의미하는 \, 이메일 형식 체크 ex) .co.kr

// let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
//             // ^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$] : 전화번호 형태

   // 
   let t = /^a&f/.test('after school');
   console.log(t);


})(jQuery);