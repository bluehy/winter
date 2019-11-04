// slideAll_viewBox.js

(function($){
   const viewBox = $('#viewBox');
   const slideForm = viewBox.find('.slide_form');
   const slideWrap = viewBox.find('.slide_wrap');
   let slideEach = slideWrap.children('div');
// -------------------------------------------------

   // 마지막 슬라이드 복제 ==========================
   let slideLen = slideEach.length;
   console.log('슬라이드 갯수는 '+slideLen);
   slideEach.eq(-1).clone(true).prependTo(slideWrap);
   

   // 재선언 (갯수가 바뀌었기 때문에) ================
   slideEach = slideWrap.children('div');
   slideLen = slideEach.length;
   console.log('재선언된 슬라이드 갯수는 '+slideLen);


   // slide_wrap, slide_0$의 너비를 조정================
   slideWrap.css({width:100 * slideLen + '%', marginLeft: '-100%'})
   slideEach.css({width:100 / slideLen + '%'})

   slideForm.css({overflow:'hidden'});

   // 버튼부 생성 ======================================
   // 좌/우 버튼
   const slideBtn = function(rel){
      // let result = rel || true;     // true먹히면 버튼 생기게 조정하기 위한 변수였으나..false가 result로는 안 먹혀서...
      if(rel){
         slideForm.before('<div class="view_btn"><button type="button" class="next"><i class= "fas fa-chevron-circle-right"></i><span>다음내용 보기</span></button><button type="button" class="prev"><i class= "fas fa-chevron-circle-left"></i><span>이전내용 보기</span></button></div>');
      }// if()
   };// slideBtn(function(){ slide_form앞에 버튼 만들기 })

   slideBtn(true);  //    하나의 기능을 다른 데에 그대로 활용할 수 있게끔 함수화

   // 인디케이터 영역
   slideForm.before('<ul class="indicator"></ul>');
   const indi = viewBox.find('.indicator');
   
   for (let i = 0; i < slideLen-1; i++){

      indi.append('<li><a href="#"><span></span></a></li>');
      let indiLi = indi.children('li').eq(i);
      indiLi.find('span').text(slideEach.eq(i+1).text());
      indiLi.find('span').css({display:'block', width:0, height: 0, overflow: 'hidden'});
      
   };//   for () //  li 슬라이드 갯수만큼 생성, 내부 요소 채우기

   // 인디케이터 첫번째에 클래스 넣어두기
   const indiLi = indi.children('li');
   indiLi.eq(0).addClass('action');
   
   //=======================================================================
   // 좌우버튼 클릭시 이동
   let n = 0; 
   const viewBtn = viewBox.find('.view_btn').find('button');
   
   viewBtn.on('click',function(e){
      e.preventDefault();
      console.log($(this));
      let has = $(this).hasClass('next');
      indiLi.removeClass('action'); // 버튼 조작시에도 인디케이터가 변화하도록(일단 제거하고,)

      //선생님 풀이(클래스 확인)
      if( has ){ //next 버튼 클릭
         n++;
         if(n >= slideLen-1){
            n = 0;
            slideWrap.stop().css({left:'100%'});
         };
         // slideWrap.stop().animate({left:-100 * n +'%'});

      }else{ // prev버튼 클릭
         n--;
         // slideWrap.stop().animate({left: -100 * n + '%'},function(){
         //    if(n <= -1){
         //       n = slideLen - 2;
         //       slideWrap.stop().css({left:-100 * n + '%'})  // 맨 마지막 슬라이드를 이동
         //    };
         // }); //   slideWrap.animate()
      }; // if (next버튼인지 prev버튼인지 구분)
      indiLi.eq(n).addClass('action');       // 선택한 슬라이드에 맞는 인디케이터에 클래스값이 들어가도록 지정.
      slideWrap.stop().animate({left: -100 * n + '%'},function(){ //공통기능 (n값만 받아오면 되니까 공통으로 사용가능하다.))
         if(n <= -1){                                    // n이 클론해온 슬라이드로 이동하는 순간
            n = slideLen - 2;
            slideWrap.stop().css({left:-100 * n + '%'})  // 맨 마지막 슬라이드로 이동
         };
      }); //   slideWrap.animate()

      // console.log(n);


      // // 내풀이(몇번째 버튼_index)
      // if($(this).index() === 0 ){

      //    n++;
      //    if(n >= slideLen-1){
      //       n = 0;
      //       slideWrap.css({left: '100%'});
      //    };// if (마지막 슬라이드에서, 앞으로 보냈던 슬라이드 구역으로 간(css) 후, 원래 리스트의 첫번째요소로 이동(animate)하는 기능.)
      //    slideWrap.animate({left:-100 * n + '%'});

      // }else{

      //    n--;
      //    slideWrap.animate({left:-100 * n + '%'},function(){
      //       if(n <= -1){
      //          n = slideLen -2;
      //          slideWrap.css({left:-100 * n + '%'});
      //       };// if (일단 왼쪽으로 이동(animate) 후, 맨 마지막 슬라이드로 이동)
      //    });// slideWrap

      // }// if (next버튼을 눌렀는지, prev버튼을 눌렀는지 구분.)

   });//  viewBtn.on('click')

   // --------------------------------------------------------------------
   // 인디케이터 선택시
   indiLi.children('a').on('focus',function(e){
      e.preventDefault();
      n = $(this).parent('li').index();
      // console.log(n); //0,1,2,3,4
      indiLi.removeClass('action');
      // indiLi.eq(n).siblings().removeClass('action');
      $(this).parent('li').addClass('action');
      slideWrap.animate({left:-100 * n + '%'});
      
      // a를 클릭시에는 해당하는 광고배너로 포커스 처리하게 만들기
      $(this).on('click',function(e){
         e.preventDefault();
         slideEach.eq(n+1).find('a').focus();
      }); // 클릭시에는 링크로 넘어가게 만들기.


   }); //   indiLi.children('a').on('click')


})(jQuery);