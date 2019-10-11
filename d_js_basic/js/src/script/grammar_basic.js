// grammar_basic.js
// javascript기초 이해하기

/* *문법
*조건문: 특정한 조건을 이용하여 해당 조건이 참이면 수행하고,
         거짓이면 수행하지 않도록 처리하게 만드는 것
*반복문: 2번 이상의 반복수행할 경우, 단순반복하여 수행하게 하는 것이 아니라 자동으로 수행하도록 처리

*/

// 조건문 
// - 단순분기(하나의 조건을 기준으로 참/거짓) : if ~ else
// - 다수분기(다양한 조건 중에 하나) : switch


console.log("  # 조건문_단순분기 ============= ")

var myNum = function(i){

   var i = i;
   var text;

   if(i < 10) {
      text = "주어진 숫자는 10보다 작은 수입니다."
   }else if(i === 10) {
      text = "주어진 숫자는 10입니다."
   }else{  
      text = "주어진 숫자는 10보다 큰 수입니다."
   }

   return console.log(text);
};

myNum(10);

// 삼항연산자 와 if조건문

// () ? 참이면 수행 : 거짓이면 수행;
// if(){참이면 수행}else{거짓이면 수행}
/* 
() ? 참 : () ? 참 : () ? 참 : 거짓 ; 

if(){
   참
}else if(){
   참
}else if(){
   참
}else{
   거짓
}

 */


console.log("  # 조건문_다수분기_switch case문 ===============")
/* function(){}
if(){}
for(){} */


var myChoice = function(coffee){
var coffee = coffee;
var text;
var menu = ['ice americano', 'latte', 'mocha'];

switch(coffee){
   case menu[0]:
      text = "얼죽아";
   break;

   case menu[1]: 
      text = "커피우유파";
   break;

   case menu[2]: 
      text = "달달느끼";
   break;

   default :
      text = "커피 안먹어요.";
   break;
}
console.log(text);
};

myChoice('water');


console.log ("  # switch case문 =================")


var myMenu = function(){

let coffee,text,menu;

menu = ['americano', 'latte', 'mocha', 'vanilla', 'espresso'];
coffee = prompt('원하시는 메뉴를 입력해주세요 \n메뉴: '+ menu);

switch(coffee){
   case menu[0]:
      text = "얼죽아";
   break;

   case menu[1]: 
      text = "커피우유파";
   break;

   case menu[2]: 
      text = "달달느끼";
   break;

   case menu[3]:
      text = "달콤바닐라";
   break;

   case menu[4]:
      text = "쓰게마실래";
   break;

   default :
      text = "커피 안먹어요.";
   break;
}
// console.log(text);

let myP = document.getElementsByTagName('p')[0]; // p{}
myP.innerHTML = text;

};

let myBtn = document.getElementById('coffeeMenu'); // #coffeeMenu
myBtn.addEventListener('click', function(){
   myMenu();
});


