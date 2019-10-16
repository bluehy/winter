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
   let mLinkText = menuLink.text();
   console.log(mLinkText);

   menuLink.css({'outline':'0'});

   let set = {
      licolor : mLiBg,
      liborder: mLiBdr,
      linkcolor: mLinkColor,
      linkbold: mLinkWeight
   };
   // : 이중으로 세팅 -> 외부에 노출되는 건 set이므로, 보안처리 용도로 사용하는 경우가 있음.
   


   // focus : 초점이 잡힌상태 (a, button, form내부의 요소)
   menuLi.children('a').on('focus', function(){
      let li_a_fb = $(this);
      li_a_fb.parent('li').css({'backgroundColor':'#0af', 'borderRadius':'0.5rem'});
      li_a_fb.css({'color':'#fff', 'fontWeight':'bold'});

   });

   // blur : 초점이 잡힌 요소가 초점이 해제되는 상황.
   menuLi.children('a').on('blur',function(){
      let li_a_fb = $(this);
      li_a_fb.parent('li').css({'backgroundColor':set.licolor, 'borderRadius':set.liborder});
      li_a_fb.css({'color':set.linkcolor, 'fontWeight':set.linkbold});
   });


   let mytop = $('.top_link').children('button');
/*
      mytop.on('mouseenter',function(){});
      mytop.on('mouseleave',function(){});

      mytop
         .on('mouseenter',function(){})
         .on('mouseleave',function(){});
         // 메소드 체인으로 이을 수 있음
*/
      let topColor = mytop.css('backgroundColor');
      mytop.hover(function(){
                     $(this).animate({'backgroundColor':'#0ef'},function(){
                        $(this).animate({'width':'300%'},function(){
                           $(this).animate({'backgroundColor':'#f06'});
                        });
                     });
                  },   // 마우스 올렸을 경우
                  function(){
                     $(this).animate({'backgroundColor':topColor});
                  });  // 마우스 벗어났을 경우

      mytop.on('click',function(event){
         event.preventDefault(); // 선행되는 이벤트 제거.
         $('html, body').animate({'scrollTop':0},1000);
      });

      /* 
      * css()  => css기능을 거의 다 쓸 수 있다.
      * animate()는 css의 기능을 쓸 수 있지만, 모두 쓸 수는 없다.
      * transform, transition, animation, borderRadius 등
      * 흔히 말하는 css3기능은 동작하지 않는다.
      * 또한, backgroundColor, color 등 색상과 관련된 기능은 jquery-ui에서 사용되는 기능
      * animate는 css와는 다른 기능 일부가 첨부되어 있다. (ex. scroppTop)

      */

      const win = $(window);
      const conBox = $('#conBox');
      
      win.on('scroll', function(){
         let myscroll = $(this).scrollTop();
         // console.log(myscroll);
      
         if(myscroll > 150){
            // conBox.stop().animate({'backgroundColor':'#aca'},300);
            conBox.css({'backgroundColor':'#aca','transition':'all 300ms ease'});
         } else /* if(myscroll <= 150) */{
            // conBox.stop().animate({'backgroundColor':'#fca'},300);
            conBox.css({'backgroundColor':'#fca','transition':'all 300ms ease'});
         };

         // animate의 색상은 ui이므로 css로도 변하는 걸 알아두는 게 좋음.
         // (myscroll > 150) ? conBox.css({'backgroundColor':'#aca'}) : conBox.css({'backgroundColor':'#fca'});
      });


      // 크기값이 변경되었을 때 사용하는 기능(가로,세로 일부기능 제한 두고 사용)
      let beforeWidth = win.width(); //크기값이 변경되기 전 가로값
      win.on('resize',function(){
         let afterWidth = win.width();// 크기값이 변경된 후 가로값
         if (beforeWidth !== afterWidth){
            console.log('크기가 변경되었습니다.')
            history.go(0);
         }         
      })

      /*  새로고침의 방법
      * location.reload(true);         // 새로고침(F5)
      * location.href = location.href; // 상단 주소창에 적힌 주소로 이동 (권장X)
      * history.go(0);                 // 사용기록 중 가장 최근 기록 위치로 이동(제자리)
      */

                  //선택자.기능('기능이름',function(){});
   // : 모두 동일한 이벤트를 지정하는 방법. (hover는 그렇게 권장X)
})(jQuery);