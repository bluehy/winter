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
   // const conDtBtn = conDt.children('button');
   const conDd = conArea.find('dd');

   conDt.children('button').on('click focus',function(e){
      e.preventDefault();
      let btn = $(this);
      let btnParent = btn.parent();

      btn.addClass('action');
      btnParent.siblings('dt').children('button').removeClass('action');
      // 선택한 버튼의 부모의 형제('dt중')의 자식인 버튼의 클래스를 제거한다.
      btnParent.next('dd').addClass('action');
      btnParent.next('dd').siblings('dd').removeClass('action');

   });
   
})(jQuery);

