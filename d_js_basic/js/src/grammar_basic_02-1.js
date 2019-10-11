
// for 테스트
console.log("  # for 테스트 ===========================");

// var product = document.getElementById('product');
let product = document.querySelector('#product');

product.style.width = "100%";
product.style.height = "auto";
product.style.minHeight = "300px";
product.style.backgroundColor = "#f96";

let ulV = document.createElement('ul');
product.appendChild(ulV);
ulV = document.querySelector('#product>ul')
ulV.style.width = "90%";
ulV.style.height = "auto";
ulV.style.minHeight = "400px";
ulV.style.backgroundColor = "#77f";

let ar = ['우유', '두유', '쥬스', '차', '커피', '슬러시', '요거트', '밀크티'];
console.log( ar.length ); //ar배열의 내용물 갯수 파악

for(let i=0; i < ar.length ; i++){
   let liV = document.createElement('li');
   let myText = document.createTextNode(ar[i]);
   liV.appendChild(myText);
   ulV.appendChild(liV);
}

