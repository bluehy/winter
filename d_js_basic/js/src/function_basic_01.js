// function_basic_01.js

// 'use strict';

/**함수에 대해  => function () {}
 *
 * 선언식, 표현식
 * 익명함수, 즉시실행함수, (ECMA6: 화살표함수)
 * 
 * 
*/


function myCoffee(a) {
   return a * 4100;
}

myCoffee(3);

var rel_1 = myCoffee(3);
var rel_2 = myCoffee(5);

console.log("오늘의 커피값은 ", rel_1,"원이 나왔다.");
console.log("오늘의 커피값은 ", rel_2,"원이 나왔다.");

function userName(a){
   var b = a + "님 어서오세요.";
   return b;
}

let u_01 = userName('예지');
console.log(u_01);

function test(color){
   var web = document.getElementsByTagName('body')[0];
   return web.style.backgroundColor='#'+color;
   // web.style.backgroundColor='#'+color; -> 가능하지만 undefined뜸
}

t2();

function t2() {
   return console.log('t2 실행');
}


console.log('  # 함수 선언식과 표현식');
// 함수 선언식 : 함수에 이름을 붙여서 사용하는 것
// function t2(){}

// 함수 표현식 : 변수에 함수(익명함수:이름이 없는 함수)를 대입하여 사용하는 것
// var t3 = function(){}


var variableFn = function(n){
   return (n + 100) * 10;
}; 

var v = variableFn(4);
console.log(v);


console.log(' ================================= ');
console.log('  # 함수를 통해 외부의 접근을 불가능하게 만들기');
// 이름조차 지정하지 않고, 딱 한번만 수행하게끔 하는 기능
// 즉시 실행함수
// (익명함수)(); : 해당함수를 그대로 수행하세요.

(function(){
   console.log(1+1);
})();


console.log(' ================================= ');
console.log('  # 즉시 실행함수, 선언식, 표현식');

var pr = 100;

(function(myp){
   console.log(myp+1);
})(pr); // 즉시 실행함수 : 외부변경이 불가능하게 만든다.(외부에서 불러낼 방법X)

function Fn(myp){
   console.log(myp+1);
}
Fn(pr); // 선언식

var Fn2 = function(myp){
   console.log(myp+1);
};
Fn2(pr); // 표현식


console.log(' ================================= ');
console.log('  # 화살표함수  ');
// 

var f1 = function (a) {return a + 10; };
console.log(f1(2));

var f2 = (  (a) => {return a + 20; }  );
console.log(f2(2));


console.log( ' ============================= ');
console.log( '  # 내장함수 .메소드  ');

// var myName = function(b){return b};
// myName("b");

var myCon = {
   name : function(b){return b}
};
console.log(myCon.name('xido'));

// 함수는 여러기능을 하나로 묶어서 처리하는 것을 의미하며,
// 생성과 동시에 실행되지는 않는다.
// 대신 호출하면 동작하고, 함수를 객체 내부에 생성시킨 후에 해당 객체를 실행하면 함수가 동작한다.
// 이때, 동작하는 객체명을 메소드라고 부른다.
// .blah(  ) -> 함수의 호출... .메소드

// 함수 : (){};
// 선언식, 표현식
// 익명함수, 즉시실행함수(IIFE), 화살표함수
// 복잡한 수식을 하나의 묶음으로 처리해서, 간단하게 호출함으로 결과를 바로 얻을 수 있게 처리하는 방법.

// .hidden{}