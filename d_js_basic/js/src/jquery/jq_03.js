// jq_03.js


(function($){
// $()

$('#myBox').css({'width':'80%', 'height':'900px','margin':'auto', 'backgroundColor':'#ddd'});

// 생성(요소, 값)
   /* # javascript =================================
   const myBox = document.querySelector('#myBox');
   const myT = document.createElement('h2');
   let h2Text = document.createTextNode('jQuery text 생성하기');

   myT.appendChild(h2Text);
   myBox.appendChild(myT);
   =============== ES6 기반 */

   // # jquery =============================
   const mBox = $('#myBox');
   mBox.append('<h2>1234</h2>');
   const myh2 = mBox.find('h2');
   myh2.append('<i>jquery를 통해 text 생성하였습니다.</i>');
   let Text = myh2.text();
   console.log(Text);
   
   // html(), append(), prepend(), appendTo(), prepentTo(), before(), after()
   // text()

   let con = mBox.html()
   console.log(con);
   mBox.html('<p>요소를 생성하였습니다.</p>');
   // : 기존 요소를 삭제하고, 새롭게 추가. 내용을 파악할 때 사용.
   
   mBox.append('<p>기존 요소는 그대로, 내용을 뒤에 추가</p>');
   // : 기존 요소를 그대로 두고, 내용을 뒤에 추가

   mBox.prepend('<h2>기존 요소는 그대로, 내용을 앞에 추가</h2>');
   // : 기존 요소를 그대로 두고, 내용을 앞에 추가

   let myT = $('#footBox > h2')
   myT.appendTo(mBox);
   // : myT를 mBox의 내용 뒤에 집어넣는다.
   myT.prependTo(mBox);
   // : myT를 mBox의 내용 앞에 집어넣는다.

   // append, prepend, appendTo, prependTo : 
   // 값을 내부에 삽입하는 기능. 해당요소를 만들어서 삽입 or 기존의 요소를 끌어와서 삽입하는 기능.
   // To 가 붙으면 주어와 목적어가 바뀐다.

   // before, after
   mBox.before('<div class="beforeBox"></div>');
   mBox.after('<div class="afterBox"></div>');
   // : tag를 직접적으로 앞,뒤에 추가. 

   let myBefore = mBox.prev();
   let myafter = mBox.next();
   console.log(myBefore, myafter);


// =====================================================
// 확인(크기, 속성)
// width(), height(), 
// innerWidth(), outerWidth(), outerWidth(true)
// innerHeight(), outerHeight(), outerHeight(true)
// 위와 유사 : css('width'), css('height')
// attr(), removeAttr();

// parseInt(), parseFloat(); 

const rBox = $('#resultBox');

console.log("   # width ===============")
let rWidth = rBox.width(); 
console.log(rWidth);
//padding,border를 제외한 width값

let r_innerWidth = rBox.innerWidth();
console.log(r_innerWidth); 
//padding 값을 포함한 width값

let r_outerWidth = rBox.outerWidth();
console.log(r_outerWidth); 
// border 값을 포함한 width값

let r_outerWidthTrue = rBox.outerWidth(true);
console.log(r_outerWidthTrue);
// margin 값을 포함한 width값

let rBoxWidth = rBox.css('width');
let rPLWidth = rBox.css('paddingLeft');
let pasWidth = parseInt(rBoxWidth);
console.log(pasWidth);
console.log(rPLWidth);

let rPWidth = parseInt(rBox.css('paddingLeft')) + parseInt(rBox.css('paddingRight')) + pasWidth;

console.log(rPWidth + 'px');

console.log("   # height ===============");


let rHeight = rBox.height(); 
console.log(rHeight);
//padding,border를 제외한 height값

let r_innerHeight = rBox.innerHeight();
console.log(r_innerHeight); 
//padding 값을 포함한 height값

let r_outerHeight = rBox.outerHeight();
console.log(r_outerHeight); 
// border 값을 포함한 height값

let r_outerHeightTrue = rBox.outerHeight(true);
console.log(r_outerHeightTrue);
// margin 값을 포함한 height값

let rBoxHeight = rBox.css('height');
let pasHeight = parseInt(rBoxHeight);
console.log(pasHeight);


console.log("   # attr =====================")
let url = "http://www.naver.com"
rBox.attr({'class':'adC', 'data-class':url});


rBox.on('click',function(){
   rBox.after('<a href="'+ url +'">클릭하면 이동합니다.</a>');
   rBox.after(`<a href="${url}">클릭하면 이동합니다.2</a>`);
   rBox.removeAttr('class');
});

console.log(url);
console.log(rBox.attr('class'));

// =====================================================
// 변경
   mBox.empty();
   // : 선택한 것의 내부 기능들을 삭제
   mBox.remove();
   // : 선택한 것을 그대로 삭제


// jQuery 기초개념: 메소드 체인, 콜백
console.log("   # jQuery 기초개념 : 메소드 체인, 콜백");

$().find().animate();
// 메소드 체인 : 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것

$().animate({}, function(){
   $().animate({}, function(){
      $().animate();
   });
});

// 콜백 함수 : 하나의 함수 내에서 다시 함수를 호출하여 사용하는 기능.


})(jQuery);