(function($){   
   let win = $(window);
   let p00 = $('.par_00');
   let p01 = $('.par_01');
   let p02 = $('.par_02');
   let p03 = $('.par_03');
   let p04 = $('.par_04');
   let p05 = $('.par_05');
   let p06 = $('.par_06');
   let p07 = $('.par_07');
   let p08 = $('.par_08');

   let par = [];

   const vb = $('#viewBox');

   for(let i = 0; i < vb.children('div').length; i++){
      let p = '.par_0' + i;
      par.push(p);
   }


   // let winW = win.outerWidth();
   // if(winW <= 1600){
   //    vb.children('div').css({backgroundSize:'170%'});
   // }


   let winH = win.outerHeight();

   win.on('scroll',function(){
      let scroll = win.scrollTop();
      console.log(scroll);
      // $(par[0]).css({top: -scroll/8})
      // $(par[1]).css({top: -scroll/7})
      // $(par[2]).css({top: -scroll/6})
      // $(par[3]).css({top: -scroll/5})
      // $(par[4]).css({top: -scroll/4})
      // $(par[5]).css({top: -scroll/3})
      // $(par[6]).css({top: -scroll/2})
      // $(par[7]).css({top: -scroll/1})
      // $(par[8]).css({top: -scroll/1}) // 가까울수록 움직임이 크다

      for(let j = 0; j < par.length; j++){
         $(par[j]).css({top: -scroll / (par.length -j)});
      }
      
   });
   

   // 하단의 이미지 여백을 해결하는 법
   

})(jQuery);