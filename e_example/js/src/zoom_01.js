(function($){
// ----------------------------------------------------------------
// 선택자 모음
   let url = "../img/zoom/";
   const thumnailImg = ['z01.jpg','z02.jpg','z03.jpg','z04.jpg'];
   
   const big = $('.big');
   const mLoca = $('.mouse_location');

   const smallLi = $('.small').find('li');
   const view = $('.view');

   const myLocation = $('.location');
   const myPer = $('.per');
   //offsetX(), offsetY()
   //pageX(),pageY()
   //clientX(), clientY()
   //screenX(), screenY()

   // 위치값 %로 전환하기
   // = 좌표 / 기준크기(원하는 요소의 사이즈) * 100

   let bigW = big.outerWidth(); // border 선까지 포함한 너비
   let bigH = big.outerHeight();   

// --------------------------------------------------------------------
   mLoca.hide();


// --------------------------------------------------------------------
   // 선택된 이미지 보이게 하기_함수
   const ImgSet = function(i){
      view.css({ backgroundImage: 'url("' + url + thumnailImg[i] + '")' });
      big.css({ backgroundImage: `url('${url + thumnailImg[i]}')` });
      mLoca.css({backgroundImage:`url('${url + thumnailImg[i]}')`});
   }//ImgSet();
   ImgSet(0);//최초로드시 첫번째 이미지 썸네일 떠있게끔

// ---------------------------------------------------------------
//
   smallLi.on('mouseenter focus',function(){
      let i = $(this).index();
      ImgSet(i);
   });

// ----------------------------------------------------------------



// ----------------------------------------------------------------
//
   
   big.on('mousemove',function(e){
      let ofx = e.offsetX;
      let ofy = e.offsetY;
      myLocation.find('span').text(ofx + ' , ' + ofy);

      let perx = parseInt(ofx / bigW * 100);
      let pery = Math.floor(ofy / bigH * 100);
      myPer.find('span').text(perx + ' , ' + pery);


      view.css({backgroundPosition: perx +'% ' + pery + '%'});

      mLoca.show(function(){
         mLoca.css({ 'top': ofy + 'px', 'left': ofx + 'px', backgroundPosition: perx +'% ' + pery + '%'});
      });
   });

   big.on('mouseleave',function(){
      mLoca.hide();
   })

   // Math함수
   // Math.round()    : 반올림
   // Math.ceil()    : 올림
   // Math.floor()   : 내림
   // Math.random()  : 0-1까지 랜덤숫자

   //소수점 3자리 숫자에서 올림
   // Math.ceil(N * 100) / 100



})(jQuery);