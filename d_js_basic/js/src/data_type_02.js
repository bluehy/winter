// data_type_02.js

// 자료형 파악하기
console.log("===# 자료형 파악하기 ===")

let i = 0;
let myType = typeof(i);
console.log(i, myType);

let s = "mytext";
let myType2 = typeof(s);
console.log(s, myType2);

let is = i+s;
let myT3 = typeof(is);
console.log(is, myT3);

let n = null; // undefined 까지 둘 모두 특수형 
let myT4 = typeof(n);
console.log(n, myT4);

let bool = !true;
let myT5 = typeof(bool);
console.log(bool, myT5);

// =========================================================
console.log("");
console.log("===# 객체 배열 ===")


var arr = ['samsung','lg','apple'];
console.log(arr[2]);
console.log(arr[0]);
var arrT = typeof(arr) == 'object'; // 검증
console.log(arrT);
var arrT = typeof(arr)
console.log(arrT);
/* 
* arr = {
   0: "samsung"
   1: "lg"
   2: "apple"
}

*/


var obj = {'samsung':'☆galaxy',
           'lg':'v50s',
           'apple':'iphone'};
console.log(obj['samsung']);
console.log(obj['lg']);
var objT = typeof(obj) == 'object'; // 검증
console.log(objT);
var objT = typeof(obj)
console.log(objT);
