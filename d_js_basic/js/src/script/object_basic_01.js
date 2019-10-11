// object_basic_01.js

// javascript에서는 배열과 객체 모두 형태입을 object 라고 본다. (엄밀히는 다름)

console.log("===# 배열 ===")

var mic = "microphone";
var arr = [1, 5, 'apple', mic];
// console.log(arr);

var fruits = ['딸기', '메론', '포도', 'gyul', 'gging-ggang'];
console.log(fruits);

console.log(fruits[4]);

var drinks = [['에스프레소','아메리카노','라떼'], 
              ['사과주스','딸바','샹그리아'], 
              ['블랙퍼스트','얼그레이','아쌈']];
console.log(drinks);
console.log(drinks[1]);
console.log(drinks[1][2]);


console.log("")
console.log("===# 객체 ===")


var obj = { 'korea':'이순신' , 'usa':'캡틴아메리카', 'wakanda':'블랙팬서'};
console.log(obj['korea']);
console.log(obj.usa);


// window.location ="?";
// var window = {location: '?'}