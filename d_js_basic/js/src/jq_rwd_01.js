(function($){
// ------------------------------------------
   // 반응형 크기에 따라 불러오는 파일 정의
   //mob, tab, pc, laptop, pcFull
   let mob = 480, tab = 768, pc = 1280, laptop = 1366; // , pcFull; -> 일정 이상 크기에서 고정할 생각이라면 사용하는 것도 방법.
   let mySet = ['mobile', 'tablet', 'pc', 'laptop', 'pcFull'];
   let tempFile = './rwd_temp/';
   const wrap = $('#wrap');
   const LoadFile = function(w){
      switch(w){
         case mySet[0]:
            wrap.load(tempFile + 'mob.html');  // 현재 js를 불러들은 html기준 경로
            break;

         case mySet[1]:
            wrap.load(tempFile + 'tab.html');
            break;

         case mySet[2]:
            wrap.load(tempFile + 'pcbase.html');
            break;

         case mySet[3]:
            wrap.load(tempFile + 'laptop.html');
            break;

         case mySet[4]:
            wrap.load(tempFile + 'pcfull.html');
            break;
      }  // switch -> for문으로 수정도 가능하다.
   }// LoadFile(); 

// --------------------------------------------
   // 현재 디바이스 크기 파악하여 정의
   let nowdevice = 0;   // 현재 디바이스 초기값설정

   const DeviceCheck = function(w){                // 함수가 수행될 때 값을 새로 받아오기 위해서 매개변수 활용.
      if (w <= mob){
         nowdevice = mySet[0];
      }else if (w > mob && w <= tab){            // mob < w <= 768 이 의미상으론 옳지만, 작성시에는 인식X
         nowdevice = mySet[1];
      }else if (w > tab && w <= pc){
         nowdevice = mySet[2];
      }else if (w > pc && w <= laptop){
         nowdevice = mySet[3];
      }else{nowdevice = mySet[4];}
      // console.log(nowdevice);
      return nowdevice;       // 함수의 결과값을 반환하게 만드는 기능 return. 변수 beforeDevice에서 받아올 수 있게끔 활용
   }; // DeviceCheck();
// ----------------------------------------------

   const win = $(window);
   let winW = win.outerWidth();
   console.log(winW);


   let beforeDevice = DeviceCheck(winW);                 // 초기값이 적용된, 변경 이전의 사이즈 결과값.
   LoadFile(beforeDevice);
   console.log('beforeDevice', beforeDevice);
   
// --------------------------------------------
   win.on('resize',function(){
      let nowWinW = win.outerWidth();
      // console.log(nowWinW);   // 변경된 사이즈 값 뜨게 됨.
      let afterDevice = DeviceCheck(nowWinW);         // 변경된 사이즈가 적용된, 변경 후의 사이즈 결과값.
      console.log(afterDevice);

      if(winW !== nowWinW && beforeDevice !== afterDevice){      
      // 변경된 width 사이즈가 이전 사이즈와 다를 경우, 전과 변경 후 디바이스 사이즈 범위가 서로 달라질 경우를 모두 충족했을 때.
         location.reload();      // 새로고침하기
      }
   });





})(jQuery);