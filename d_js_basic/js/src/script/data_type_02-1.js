//data_type_02-1.js

/* javascript 기본형 내용 정리하기
 
 * 변수 : var(오래도록 사용한 변수, hoist현상 문제), let(hoist현상을 막기위해 생성된 변수), const (최초에 생성후에 변경이 불가능하도록 처리된 변수-상수의 개념을 가짐)
 * 
 * 숫자(0), 문자('0'), 참과 거짓, null과 undefined
 * 배열(array = []), 객체(object = {a:a'})
 * --------------------------------------------------------------
 * 연산자 : operator, operation, reteral
 **/

console.log('  # hoist현상');


 console.log (myVar);

 var myVar = 0;

 console.log('  # 숫자와 문자 구분하기');

 var num = 100;
 console.log(num,typeof(num));

 var str = '100';
 console.log(str,typeof(str));

 console.log("  # 참과 거짓")
 
 var bool = true;
 console.log(!bool,typeof(bool));


 console.log("  # null과 undefined")

 var myrel;
 console.log(myrel, typeof(myrel));
 myrel = null;
 console.log(myrel, typeof(myrel));
 myrel = 123;
 console.log(myrel, typeof(myrel));

 
 console.log("  # 배열과 객체")

 var arr = ['사과', '귤', '파인애플']
 console.log(arr, typeof(arr));
 
 var obj = {"a":'pen', "b":'sketchbook', "c":'paint'}
 console.log(obj,typeof(obj));


 console.log(arr[2]);
 console.log(obj["c"]);
 console.log(obj.a);

 var reset = null;
 
 console.log( arr.constructor.name );
 console.log( obj.constructor.name );
 console.log( reset );


 console.log (" ===================================== ")
 console.log ("  # 연산자 ")

 var i = 10 + 2; //i=12
 i -= 6;//i = i - 6; //i=6
 i *= 2;//i = i * 2; //i=12
 i /= 4;//i = i / 4; //i=3
 i %= 2;//i = i % 2; //i=1
 i += 2;//i = i + 2; //i=3
 console.log(i);
 

 var n = 10;
 ++ n; //1을 더하다
 ++ n; //1을 더하다(전치 연산자)
 n ++; //1을 더하다(후치 연산자)
 console.log(n++);
 console.log(n);
  -- n; //1을 빼다
  -- n; //1을 빼다
  -- n; //1을 빼다
 console.log(n--);
 console.log(n);

 for(var i = 0 ; i < 10; i++){
    console.log(i);
 }

