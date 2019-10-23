// spigen_content_01.js

(function($){

/*    const conArea= $('.content_area');
   const conDl = conArea.children('dl');
   const conDt = conDl.children('dt');
   const conDtLink = conDt.children('button');
   const conDd = conDl.children('dd');

   conDtLink.on('focus',function(){
      let tabMenu = $(this).parent('dt');

      tabMenu.siblings('dt').children('button').removeClass('action');
      $(this).addClass('action');

      tabMenu.siblings('dd').removeClass('action');
      tabMenu.next('dd').addClass('action');
   }); */

   

   const conArea = $('.content_area');
   const conDt = conArea.find('dt');
   const conDtBtn = conDt.children('button');
   const conDd = conArea.find('dd');

   conDt.children('button').on('click focus',function(e){
      e.preventDefault();
      let btn = $(this);
      let btnParent = btn.parent();
      let parNext = btnParent.next('dd');

      btn.addClass('action');
      btnParent.siblings('dt').children('button').removeClass('action');
      // 선택한 버튼의 부모의 형제('dt중')의 자식인 버튼의 클래스를 제거한다.
   // step _ 1
      // parNext.addClass('action');
      // parNext.siblings('dd').removeClass('action');

   // step _ 2
      // parNext.siblings('dd').css({'zIndex':10}); // 먼저 있던 요소 앞으로 배치
      // parNext.addClass('action'); // 사용할 기능에 class요소 주고
      // parNext.css({'zIndex':5}); // 동시에 zIndex값을 작게 주어 뒤에 배치
      // parNext.siblings('dd').fadeOut();
      // parNext.siblings('dd').removeClass('action');
      // parNext.siblings('dd').removeAttr('style');

      parNext.stop().fadeIn();
      parNext.siblings('dd').stop().fadeOut();
      //action 클래스 이름으로 구분만 할 수있도록 처리하고, (의미상 메세지)
      //css에서 동작하지 않도록 처리.
   });

   console.log('   # 이미지에 넣고, ');
   // ==============================================================
   
   
/* 배열 불러오기  
var arr = ['a','b','c'];
arr[0];

객체 불러오기
var obj = {'sam':'gallaxy', 'app':'i-phong'}
obj.app;
*/

let imgUrl = "../img/spigen/";

   const mediaList = [
      {text:'[youtube] 아마존으로 2600억 매출', 
      date:'2019.10.22',
      img:'media_01.jpg' }, 
      {text:'슈피겐코리아 미국 아마존 독점 유통', 
      date:'2019.10.12',
      img:'media_02.jpg' }, 
      {text:'[youtube] \'취업비자\' 기업 탐방',
      date:'2019.09.10',
      img:'media_03.jpg'}]; 
      // 목록 3개
      // mediaList[0].text == [youtube] 아마존으로...
      // mediaList[1].date == 2019.10.12

   const blogList = [
      {text:'아무리 급해도 놓칠 수 없는 한 가지', 
      date:'2019.09.22',
      img:'blog_01.jpg' }, 
      {text:'업무중 즐기는 문화예술공연, 여가활동어쩌구', 
      date:'2019.04.12',
      img:'blog_02.jpg' }, 
      {text:'풀필먼트(fulfillment) 서비스의 새로운 바람, 슈피겐코리아 창고세이버', 
      date:'2019.02.10',
      img:'blog_03.jpg' }]; 




      const blog = conArea.find('.blog');
      // const imgUrl = "../../../img/spigen_0";
      
      
      // for(최초의 값; 조건비교; 값의 증감){}

// ForList([selector],[array]);

const ForList = function(mySel, myList, myText){
   let tabBox = conArea.find( mySel );
   const bmText = '<div class="album"><a href="#"><h4></h4><p class="con"></p><p class="date"></p></a></div>';
   for(let i = 0; i < myList.length; i++){
      tabBox.append(bmText);

      let myNth = tabBox.children('.album').eq(i);
      myNth.find('h4').text(myText);
      myNth.find('.con').text(myList[i].text);
      myNth.find('.date').text(myList[i].date);

      let myImg = imgUrl + myList[i].img;
      myNth.css({'backgroundImage':'url('+myImg+')',
                  'backgroundPosition':'50% 50%',
                  'backgroundSize':'cover'});
      // myNth.css({'backgroundImage':`url(${myImg})`});
   }
}; //ForList() End

ForList('.media',mediaList,'media');
ForList('.blog',blogList,'blog');


   // for(let i = 0; i < blogList.length; i++){
   //    blog.append(bmText);
   //    let myNth = blog.children('.album').eq(i);
   //    let j = i+1;
   //    if (i < 10) {
   //       j = '0' + (i+1);
   //    }
   //    myNth.css({'backgroundImage':'url("../img/spigen/blog_'+ j +'.jpg")'});

   //    myNth.find('h4').text('blog');
   //    myNth.find('.con').text(blogList[i].text);
   //    myNth.find('.date').text(blogList[i].date);
   // }

   //  ====================== 키보드로 포커스 이동하기
   console.log('   # 키보드로 포커스 이동하기');

   // conDt.children('button').on('keyup',function(e){
   //    console.log(e.keyCode);
   //    //left: 37 / right: 39
   //    if(e.keyCode === 39){
   //       $(this).parent('dt').siblings('dt').children('button').focus();
   //    }else if(e.keyCode === 37) {
   //       $(this).parent('dt').siblings('dt').children('button').focus();
   //    }
   // });
   // ===내 풀이
   

conDtBtn.on('keyup',function(e){
   e.preventDefault();
   console.log(e.keyCode);
   // 왼 : 37 , 위 :38,  오 : 39, 아래 : 40
   let num = e.keyCode;
   let beforeKey = num === 37 || num === 38; 
                  // 둘 중 하나가 참이면 참의 결과값 도출
   let afterKey = num === 39 || num === 40;
   let pdt = $(this).parent('dt');

   // if (beforeKey){
   //    console.log('이전으로 포커스 이동하기');
   //    pdt.prevAll('dt').find('button').focus();
   // }else if(afterKey){
   //    console.log('다음으로 포커스 이동하기');
   //    pdt.nextAll('dt').find('button').focus();
   // }
   
   switch(num){
      case 37:
      case 38:
         pdt.prevAll('dt').find('button').focus();
      break;
         
      case 39:
      case 40: 
         pdt.nextAll('dt').find('button').focus();
      break;
      
   }




   // let myThis = $(this).parent('dt').siblings('dt').find('button');
   // switch(e.keyCode){
   //    case 37 :
   //    case 38 :
   //       // myThis.focus();
   //       myThis.prevAll('dt').find('button').focus();
   //    break;

   //    case 39 :
   //    case 40 :
   //       // myThis.focus();
   //       myThis.nextAll('dt').find('button').focus();
   //    break; 
   // }

   // if(e.keyCode === 37 || e.keyCode === 38){

   // }else if(e.keyCode === 39 || e.keyCode === 40){

   // }

});
   


   // ==============================================================

})(jQuery);

