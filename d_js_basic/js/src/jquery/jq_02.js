// jq_02.js

console.log($.fn); /* 버전확인 */

(function(my/* $ */){
// jQuery 내용작성하는 곳
// 선택자
/*
document.getElementById('box');
document.querySelector('#box');
$('#box')

document.getElementsByTagName('p')[0];
// 몇번째인지 지정해줘야함.
document.querySelector('p');
// document.querySelector('p')[0];
// document.querySelectorAll('p'); 도 가능
$('p')
*/

my('.box p').css({"padding":'0.5rem', "backgroundColor":"#fa0"});    //자손 : find
my('.box').find('p').css({"color":"#fff", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});

my('.box > p').css({"borderBottom":"2px solid #333"});  //자식 : children
my('.box').children('p').css({"transform":"translateY(-20px) rotate(15deg)"})



my('.box > dl > dt + dd').css({"backgroundColor":"#acc"}); //인접형제선택자 : next
my('.box > dl').children('dt').next('dd').css({"fontSize":"2rem"});

my('.box > dl > dt ~ dd').css({"marginLeft":"2rem"}); //형제s 선택자 : nextAll
my('.box > dl').children('dt').nextAll('dd').css({"color":"#f03"});



my('.box > ul > li:nth-child(1)').css({"backgroundColor":"#ffa"});
my('.box > ul').children('li:nth-child(1)')
my('.box > ul').children('li:nth(0)').css({"color":"#f0f"});
my('.box > ul').children('li:nth(-1)').css({"backgroundColor":"#aff"});
my('.box > ul').children('li').eq(0).css({"borderBottom":"2px solid #333"});
my('.box > ul').children('li').eq(-1).css({"borderTop":"2px solid #333"});


my('.box > p').parent('.box').css({"border":"2px dotted #00f"});
my('.box > ul').parents('div').css({"borderBottom":"2px dotted #333"});
my('.box > ul').parentsUntil('.conBox').css({"padding-right":"1rem"});
my('.box > ul').closest('div').css({"border-radius":"50%"});

my('.box > dl').find('dd:eq(-1)').prevAll().css({"color":"#00f"});
my('.box > dl').find('dd:eq(-1)').prev().css({"color":"#0a0"});

my('.box > ul').find('li:eq(-2)').siblings().css({"borderLeft": "3px solid #f06"});
//자손 : find
//자식 : children
//인접형제선택자 : next
//형제s 선택자 : nextAll

// 부모 : parent
// 부모 위의 부모..(그 위도 포함 조상신이네) : parents, parentsUntil,closest
// 형제(바로 위 형) : prev
// 형제(형들) : prevAll
// 다른 형제(나를 제외한 형제 전부) : siblings

let first = my('#first');
let str = first.find('strong');

first.css({"padding":"0.5rem", "backgroundColor":"#fcc"});
str.css({"color":"#07f"});

//===========================================
str.parent().css({'padding':'0.3rem','backgroundColor':'#ccf'});
str.parents('div').css({'padding':'0.2rem','border':'1px solid #333'});
str.parentsUntil('#first').css({'padding':"0.2rem",'borderLeft':'3px dotted #5f5'});
str.closest('div').css({'borderBottom':'2px dotted #f04'})

//https://oscarotero.com/jquery/

/* 
parent() : 부모만(값을 작성하지 않아도 동작)

parents() : 부모 전부
parents([selector]) : 부모이자 조상에 해당하는 요소. 선택값을 작성하면 선택요소만 의미한다.

parentsUntil() : 부모 전부
parentsUntil([selector]) : 선택값을 작성하면 선택요소의 자식까지 의미한다.

closest() : 동작 안함.
closest([selector]) : 선택값을 작성하면 가장 근접한 선택요소만(1.8까지)
*/


})(jQuery);