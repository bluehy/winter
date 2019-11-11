(function($){
   const win = $(window);
   let winW = win.outerWidth();
   console.log(winW);

   // document.write(winW);
// --------------------------------------------
   // 현재 디바이스 크기 파악하여 정의
   let mob = 480, tab = 768, pc = 1280, laptop = 1366; // , pcFull; -> 일정 이상 크기에서 고정할 생각이라면 사용하는 것도 방법.
   let nowdevice = 0;   // 현재 디바이스 초기값설정

   const DeviceCheck = function(w){                // 함수가 수행될 때 값을 새로 받아오기 위해서 매개변수 활용.
      if (w <= mob){
         nowdevice = 'mobile';
      }else if (w > mob && w <= tab){            // mob < w <= 768 이 의미상으론 옳지만, 작성시에는 인식X
         nowdevice = 'tablet';
      }else if (w > tab && w <= pc){
         nowdevice = 'pc';
      }else if (w > pc && w <= laptop){
         nowdevice = 'laptop';
      }else{nowdevice = 'pcFull';}
      // console.log(nowdevice);
      return nowdevice;       // 함수의 결과값을 반환하게 만드는 기능 return. 변수 beforeDevice에서 받아올 수 있게끔 활용
   }; // DeviceCheck();

   let beforeDevice = DeviceCheck(winW);                 // 초기값이 적용된, 변경 이전의 사이즈 결과값.
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