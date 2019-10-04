// data_type_01.js

/* 내용을 설명할 때 여러줄 주석을 씀
// 변수의 기초 개념 이해하기

var int;
console.log(int);

var 댕댕이;
console.log(댕댕이);

var 댕댕이 = "멍멍이";
console.log(댕댕이);

console.log(멍댕이);

// 결과값을 참고하여 
*값이 undefined라면, 변수명은 선언했지만 값은 지정하지 않은 형태 (error X)
*값이 is not defined라면, 변수조차 생성한 적이 없는 형태(error)
*/


// 스크립트기반 또는 언어라고 불리는 프로그래밍은 하나의 에러가 나면 이후의 내용은 동작하지 않는다.(거의) 에러를 해결하고 진행해야한다.

// let rel;
console.log('rel');
console.log(rel);
/* 
rel = "10시 40분";
console.log(rel); */

var rel = "10시 40분"

// HOIST현상

/* 
var : 오래전부터 사용하던 변수.
      * HOIST현상이 생김(호출하기 이전에도 해당하는 변수가 존재하는 것처럼 인지)

let : ECMA2015(es6) 버전부터 생성된 변수.
      * HOIST현상이 생기지 않음 (현재 많이 사용하는 변수)
      
const : ECMA2015(es6) 버전부터 생성된 변수.
        * 변수로 불리지만 한번 지정한 후에는 값을 변경할 수 없다. 상수, 라고 불린다.
*/

console.log("")
console.log("===# if 조건문 ===")

var card = 1000;
var chu = 500;
card = card - chu;
console.log(card);

card += 20000; // card = card + 5000;
console.log(card);

card -= 13000; // card = card - 13000;
// console.log(card);
if(card < 0){
   console.log('잔액이부족합니다.');
}else if(card < 10000){
   console.log('잔액이 얼마 남지 않았슴니다')
}else{
   console.log(card);
}

// 조건 ? 조건이 참일 경우 : 조건이 거짓일 경우 ;
(card < 0) ? console.log('잔액부족입니다.') : console.log(card);



/* 
* 사칙연산(+, -, *, /, %)
* +=, -=, *=, /=
* ++, --
* ==, ===, !=, !==
* <, >
*/

// 기본 연산자 ======================================
console.log("")
console.log("===# 기본 연산자 ===");

var int;
int = 10;
console.log(int);

int =int+10;
// var rel = int + 10;

console.log(int);
// console.log(rel);

int = int - 5;
console.log(int);

int = int * 4;
console.log(int);

int = int / 10;
console.log(int);

int = int % 4; // 몫을 뽑아내는 게 아닌 나머지를 구한다.
console.log(int);


// -========================================
console.log("")
console.log("===# 홀짝 구하기 ===")

var int2 = 67851860117;
int3 = int2 % 2;
int2 = int2 / 3; 
console.log(int3);
console.log(int2);


(int3 == 0) ? console.log("짝수") : console.log("홀수");

// =====================================================
console.log("")
console.log("===# 사칙연산 간단하게 표현하기 ===")

var i = 100;
i += 2019;
i -= 2019;
i /= 2019;
i *= 2019;
i %= 2019;
console.log(i);

var now_year_month_date = 20191004;
now_year_month_date = now_year_month_date + 1;
console.log(now_year_month_date);

now_year_month_date += 1;
console.log(now_year_month_date);

// =====================================================
console.log("")
console.log("===# 한국 표준시 ===")

var now = new Date();
console.log(now);

// =====================================================
console.log("")
console.log("===#  ===")

