// jq_04_event.js

// 이벤트
// show(), hide(), fadeIn, fadeout, slideUp, slideDown, toggle, hasClass ....

(function($){
   // jquery 이벤트 이해하기
/*
   선택.on('이벤트',function(){
      해당이벤트 처리시(ex.클릭) 수행하는 기능.
   });
*/

/* $('#conBox').find('h2').on('click',function(){
   $('h2').css({'backgroundColor':"#aaf"})
}); */


const conBox = $('#conBox');
conBox.on('mouseenter',function(){
   $(this).find('h2').css({'backgroundColor':"#fff", 'transition':'all 400ms ease'});
});

conBox.on('mouseleave',function(){
   $(this).find('h2').animate({'backgroundColor':"transparent"},900);
});
// click, dblclick, mousedown, mouseup, mousewheel
// keypress, keydown, keyup
// scroll, resize
// load


const con = $('#conBox');
const conUl = con.children('ul');
const conLi = conUl.children('li');

// console.log(conLi);
// conLi.eq(0).css({'color':'#fff', 'fontWeight':'bold'});
conLi.eq(0).on('click',function(){
   $(this).css({'backgroundColor':'#fff'});
});

conLi.eq(1).on('dblclick',function(){
   $(this).css({'backgroundColor':"#777"});
});


conLi.eq(2).on('mousedown',function(x){
   console.log(x.button, x.buttons);
   /*
   switch(x.button){
      case 0:
         $(this).css({'backgroundColor':"#07f"});
         break;
      case 1:
         $(this).css({'backgroundColor':"#f70"});
         break;
      case 2:
         $(this).css({'backgroundColor':"#333", 'color':'#fff'});
         break;
      default:
         $(this).css({'backgroundColor':"#aaa"});
         break;
   }
   */

   if (x.button === 0) {
      $(this).css({'backgroundColor':"#07f"});
   } else if(x.button === 1){
      $(this).css({'backgroundColor':"#f70"});
   } else if(x.button === 2){
      $(this).css({'backgroundColor':"#333", 'color':'#fff'});
   } else {
      $(this).css({'backgroundColor':"#aaa"});
   }
});

conLi.eq(2).on('mouseup',function(){
   $(this).css({'backgroundColor':"#fa0"});
});


conLi.eq(3).on('mousewheel DOMMouseScroll',function(x){
   console.log(x);
   $(this).css({'backgroundColor':'#04f'})
});


conLi.eq(4).on('mousemove', function(e){
   console.log(e.clientX, e.clientY);
   // : 사용자가 보고있는 화면 왼쪽 상단을 0점 기준으로 한 좌표값
   // console.log(e.offsetX, e.offsetY);
   // : $(this)의 왼쪽 상단을 0점 기준으로 한 좌표값
   // console.log(e.pageX, e.pageY);
   // : 브라우저 문서의 왼쪽 상단을 0점 기준으로 한 좌표값
   // console.log(e.screenX, e.screenY);
   // : 브라우저의 왼쪽 상단을 0점 기준으로 한 좌표값
   let x = e.offsetX;
   let y = e.offsetY;
   // $('.ball').css({'transform':'translate('+ -x +'%,'+ -y +'%)'});
   $('.ball').css({'transform':`translate(-${x}%,-${y}%)`});
});

conLi.eq(5).children('input').on('keyup',function(x){
   console.log(x.key, x.keyCode);
   console.log(x);
});

})(jQuery);
