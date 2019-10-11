// grammar_basic_02.js
// 반복문

console.log("  # 반복문 ==========")

// while(){}
console.log("  # while(){} ================")
var n = 0;
// console.log(n);

while(n <= 10){
   console.log(n);
   n++;
}


// do ~ while
console.log("  # do~while(){} =================")

var n=0;
do{
   console.log(n);
   n++;
} while(n <= 10)

console.log(n);



// for(){}
console.log("  # for(){} =====================")

var n = 0;
for (; n <= 10 ;) {
   console.log(n);
   n++;
}

console.log("  # for (초기값 선언; 조건; 연산 ){ 수행 } ================")

let m = 0;

for(/* let m =0 */; m <= 10 ; m++){
   console.log(m);
}
console.log(m); // for문을 벗어났기 때문에 (var는 오류X, 인식하려면 변수 선언을 for문에서 빼내면 가능.)


//for~in
console.log("  # for in =============================")

var arr = ['사과', '배', '바나나', '오렌지', '키위'];

// for (let i in arr){ 수행 }
for (let i=0; i < 5; i++) {
   console.log(arr[i]); 
} // ! for in은 배열에 쓰면 브라우저 속도가 현저하게 느려져서 쓰지 않는다.
// ! for in 은 객체에서 사용해야한다.

console.log("  ! for in은 객체에 활용할 것.")
let obj = {
   'red' : '사과',
   'yellow' : '바나나',
   'orange' : '귤',
   'green' : '키위',
   'purple' : '블루베리'
};

for (let l in obj) {
   console.log(l);
   console.log(obj[l]);
}


//forEach
console.log ("  # forEach ================================")
//[].forEach()

var myArr = ['빨강', '파랑', '노랑', '녹색', '보라'];

myArr.forEach( function(data){
   console.log(data);
} );



//for(let i = 0; i<10; i++){} // 일반형식, 배열
//for(let i in object){}      // 객체일 때 사용
//[].forEach( function(){} ); // 배열
