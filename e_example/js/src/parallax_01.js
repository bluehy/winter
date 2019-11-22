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
      let scroll = win.scrollTop() / 4 * 3 ;
      console.log(scroll);
      $(par[0]).css({backgroundPositionY: -scroll/8})
      $(par[1]).css({backgroundPositionY: -scroll/7})
      $(par[2]).css({backgroundPositionY: -scroll/6})
      $(par[3]).css({backgroundPositionY: -scroll/5})
      $(par[4]).css({backgroundPositionY: -scroll/4})
      $(par[5]).css({backgroundPositionY: -scroll/3})
      $(par[6]).css({backgroundPositionY: -scroll/2})
      $(par[7]).css({backgroundPositionY: -scroll/1})
      $(par[8]).css({backgroundPositionY: -scroll/0}) // 가까울수록 움직임이 크다
   })
})(jQuery);