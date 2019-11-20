// rwd_check.js
(function($){
   const body = $('body');
   const conBox = $('#conBox');

   // 각 디바이스별 크기 기준 설정
   let mobile = 480, tablet = 768, laptop = 1366, pc = 1600;

   // 기본 디바이스 명칭설정
   let nowSize;
   const device = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull']; // 사이즈별 기준 명칭 지정
   // let winW = $(window).outerWidth(); //width() : 데이터 상자, outerWidth() : padding까지 포함,
      // 브라우저 오픈 순간의 너비 측정됨.

   let beforeW = $(window).outerWidth(true);

   // -------------------------------------------------------
   //각 디바이스 상황에 맞는 data처리
   const DeviceData = function(wid){
      switch(wid){
         case device[0] : 
            //수행내용 작성
            conBox.load('./temp/main_mob.html');
         break;
         
         case device[1] :
            //수행내용 작성
            conBox.load('./temp/main_tab.html',function(){
               jsUrl = '../js/';
               conJs = 'main_tab.js';
               body.append('<script src ="' + jsUrl + conJs +'"></script>');
            });
         break;

         case device[2] :
            $('body').append('<script>console.log("laptop버전");</script>');
         case device[3] :
         case device[4] :
            //수행내용 작성
            conBox.load('./temp/main_pc.html',function(){
               $('head').find('title').before('<link rel="stylesheet" href="../css/pc.css">');
               $('body').append('<script>console.log("pc버전");</script>');
            }); // default값으로 pc로 하는 것도 가능.
         break;

      }// switch
   };//DeviceData(); 함수처리.

   // --------------------------------------------------------
   // 디바이스 크기 체크 및 지칭 판단.
   const DeviceSet = function(winW){    // winW는 매개변수
      if(winW <= mobile){
         nowSize = device[0]; //nowSize = 'mobile' 현재 사이즈의 기준 디바이스 설정됨.
      }else if (winW > mobile && winW <= tablet){
         nowSize = device[1]; //nowSize = 'tablet'
      }else if (winW > tablet && winW <= laptop){
         nowSize = device[2]; //nowSize = 'laptop'
      }else if(winW > laptop && winW <= pc){
         nowSize = device[3]; //nowSize = 'pc'
      }else {
         nowSize = device[4]; //nowSize = 'pcfull'
      }
      return nowSize;
   };//DeviceSet(); // 사이즈에 맞는 디바이스 명칭 붙여주는 기능 함수화.
   let beforeDevice = DeviceSet(beforeW); // beforeW에 맞는 디바이스 명칭은 무엇인지 지정.
   DeviceData(beforeDevice);  // beforeDevice에 맞게 해당하는 내용 집어넣기.

   console.log(nowSize); // 브라우저 오픈 순간의 너비는 기준 디바이스 명칭이 무엇인지 검증.


   // 브라우저가 파이어폭스인지 검증-----------------
   console.log(navigator.userAgent);
   let browser = navigator.userAgent.toLowerCase(); // 어떤 브라우저인지 알아내는 기능.(+소문자화)
   
   if(browser.indexOf('firefox') !== -1){ /// 'firefox'라는 글자가 존재한다면,
      nowb = 'firefox';
   }else{
      nowb = 'other';
   };
   console.log(nowb);
   // -------------------------------------------
   
   // 사이즈 변경 체크
   $(window).on('resize',function(){            // resize이벤트가 일어났을 때,
      let afterW = $(window).outerWidth(true);  // 새롭게 너비를 측정 (afterW)
      let afterDevice = DeviceSet(afterW);

      if(/* winW !== afterW &&  */beforeDevice !== afterDevice){
         if(nowb == 'firefox'){                 // 브라우저가 firefox인 경우,
            window.location = window.location;  // 강제 새로고침 (파이어폭스에서도 새로고침되게 하기 위해서)
         }else{                                 // other 브라우저인 경우,
            location.reload();                  // 해당 기능이 파이어폭스에서는 안되기때문에, 조건이 추가된 것.
         }
         
      }
      
   })


})(jQuery);