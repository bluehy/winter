// spigen_content_02.js

(function($){
   console.log('휙');
   const irArea = $('.investor');
   const irUl = irArea.children('ul');
   const irLi = irUl.children('li');
   const irLiLink = irLi.children('a');

   const irDl = irLiLink.children('dl');
   const irDt = irDl.children('dt');
   const irDd = irDl.children('dd');


  /*  const irList = [
      {title: 'ir 행사', data:'당사의 기업설명회 및 주요공고사항을 확인하실 수 있습니다.'},
      {title: '공시정보', data:'당사의 기업설명회 및 주요공고사항을 확인하실 수 있습니다.'},
      {title: '공시정보', data:'당사의 기업설명회 및 주요공고사항을 확인하실 수 있습니다.'}
   ]; */

   /* for(i==0; i < irList.length ; i++){
      
   }; */



   irLiLink.on('mouseenter',function(e){
      e.preventDefault();
      console.log('휙');
      $(this).children('dl').addClass('action');
      $(this).children('dl').children('dt').fadeIn();
      $(this).children('dl').children('dd').fadeIn();
      // $(this).parent('li').siblings('li').children('a').removeClass('action');

   });
   
   irLiLink.on('mouseleave',function(){
      $(this).children('dl').removeClass('action');
      $(this).children('dl').children('dd').stop().hide();
   });

})(jQuery);