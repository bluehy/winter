// jq_mousewheel_01.js
(function($){
   let myarr = [];
   let myplus = [11,'aa',900];
   myarr.push(10);
   myarr.push(499);     // .push(); 배열의 뒤에 추가하는 기능.
   myarr.push(123);
   myarr.unshift(321);  // .unshift(); 배열의 앞에 추가하는 기능.
   console.log(myarr);
   
   myarr.pop();         // .pop(); 뒤에서부터 하나 제거하는 기능.
   myarr.shift();       // .shift(); 앞에서부터 하나 제거하는 기능.
   // console.log(myarr);

   let myarrPlus = myarr.concat(myplus);// 두개의 배열 메소드를 하나로 합친다.
   console.log(myarrPlus);

   // ----------------------------------------------------------------
   const htmlEl = $('html, body');
   const wrap = $('#wrap');
   const scrollEl = wrap.find('.scroll');
   // 최초의 스크롤 위치값 설정.
   // $('html, body').scrollTop(myScrollElTop[0]); //위치 고정
   htmlEl.animate({scrollTop:0});

   let myScrollElTop = [];
   let scrollLen = scrollEl.length;
   let timed = 700;
   let easing = ['easeInOutBack', 'easeOutBounce'];

   // Box별 위치값 구하여 배열화(myScrollElTop)하기
   for(let i = 0; i < scrollLen; i++){
      let scrTop = scrollEl.eq(i).offset().top; // 각 .scroll의 위치값(offset().top)을 추출.
      myScrollElTop.push(scrTop);   // 추출해낸 위치값을 순서대로 배열에 추가.
   }; //for문 .scroll들의 위치값을 배열화
   console.log(myScrollElTop);


   // -------------------------------------------------------------------
   // 스크롤 이벤트 발생
   let myStatus = true; // 작동하게 하는 조건을 걸어주는 단계.
   let useN = 0; // 초기값

   // 스크롤 이동 모션 함수화 -------------------------
   const ScrollMagic = function(){
      // htmlEl.stop().animate({scrollTop:myScrollElTop[useN % scrollLen]},function(){
      htmlEl.stop().animate({scrollTop:myScrollElTop[useN]}, timed, easing[1], function(){
         myStatus = true;
      });
   };//ScrollMagic();
   // -------------------------------

   $(window).on('mousewheel DOMMouseScroll',function(e){
      // e.preventDefault();
      console.log(e.detail);  //firefox 3과 -3
      console.log(e.originalEvent.wheelDelta);  // chrome -120과 120
      
      let n;
      
      if(e.originalEvent.wheelDelta){
         n = e.originalEvent.wheelDelta * -1;
      }else{
         n = e.detail * 40 ;
      }// if (크롬과 파이어폭스 구분+ 임의로 수치를 한쪽에 맞춰두기. // 아래로 스크롤시 + , 위로 스크롤시 -)
      console.log(n);

      // -------------------------------------------------------------------
      // 스크롤하면 화면 이동

      if(myStatus){
         myStatus = false; // 트랙패드오류를 막기 위해 들어오자마자 붙잡아두는 기능(?)
         if(n > 0){
            useN++;
            if(useN >= scrollLen){
               useN = scrollLen - 1;
            }
         }else{
            useN--;
            if(useN <= -1){
               useN = 0;
            }
         }  // useN값 추출.
         console.log(useN);         
         ScrollMagic();
      }// if(myStatus) = true


   });// $(window).on('mousewheel DOMMouseScroll') //마우스 휠

   //-------------------------------------------------------------
   // 네비게이션 메뉴에서 버튼 클릭시 해당 위치 찾아가기 (현재 페이지에서의 네비게이션 활용에 유용)
   const gnb = $('#gnb');
   const gnbUl = gnb.find('ul');
   const gnbLi = gnbUl.find('li');
   const gnbLink = gnbLi.find('a');

   gnbLink.on('click',function(e){
      e.preventDefault();
      // let thisLink = $(this).attr('href');   // href에 정확한 id 경로가 지정되어있어야 가능.
      // let thisOffset = $(thisLink).offset().top; // ex) $('#viewBox').offset().top;
      // htmlEl.animate({scrollTop:thisOffset}, timed , easing[1]);
      // --------------------------------------------------------------------
      useN = $(this).parent('li').index();   // 순서값(index)사용할 경우, (href경로 관련X)
      ScrollMagic();
   });

   // ------------------------------------------------------------
   // 터치패드사용시(탭,모바일)
   let startP, endP;
   
   $(window).on('touchstart',function(e){
      startP = e.originalEvent.touches[0].pageY;
   });// touchstart;
   
      // useN 
   $(window).on('touchmove',function(){
      htmlEl.animate({scrollTop:myScrollElTop[useN]},0);
      // ScrollMagic();
   });   //touchmove

   $(window).on('touchend',function(e){
      endP = e.originalEvent.changedTouches[0].pageY;
      console.log(startP, endP,'start-end');

      if(myStatus){
         myStatus = false; // 트랙패드오류를 막기 위해 들어오자마자 붙잡아두는 기능(?)
         if(endP < startP){
            useN++;
            if(useN >= scrollLen){
               useN = scrollLen - 1;
            };
         }else if(endP > startP){
            useN--;
            if(useN <= -1){
               useN = 0;
            };
         }  // useN값 추출.
         console.log(useN);
         ScrollMagic();
      }// if(myStatus) = true
      
   });// touchend;

   // });// touchstart;

   // $(window).on('touchmove',function(){

   // });

   // $(window).on('touchend',function(e){
   //    e.preventDefault();
   //    console.log(e.originalEvent.changedTouches[0].pageY);
   // })

})(jQuery);