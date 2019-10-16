// jq_05_event_02.js

(function($){
   let menu = $('.menu');
   let menuUl = menu.children('ul');
   let menuLi = menuUl.children('li');
   let menuLink = menuLi.children('a');

   let mLiBg = menuLi.css('backgroundColor');
   let mLiBdr = menuLi.css('borderRadius');
   let mLinkColor = menuLink.css('color');
   let mLinkWeight = menuLink.css('fontWeight');

   menuLink.css({'outline':'0'});

   // focus : 초점이 잡힌상태 (a, button, form내부의 요소)
   menuLi.children('a').on('focus', function(){
      let li_a_fb = $(this);
      li_a_fb.parent('li').css({'backgroundColor':'#0af', 'borderRadius':'0.5rem'});
      li_a_fb.css({'color':'#fff', 'fontWeight':'bold'});

   });

   // blur : 초점이 잡힌 요소가 초점이 해제되는 상황.
   menuLi.children('a').on('blur',function(){
      let li_a_fb = $(this);
      li_a_fb.parent('li').css({'backgroundColor':mLiBg, 'borderRadius':mLiBdr});
      li_a_fb.css({'color':mLinkColor, 'fontWeight':mLinkWeight});
   });


})(jQuery);