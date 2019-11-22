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
      // console.log(scroll);
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

// ----------------------------------------------------------
// 내가 풀어본 이미지별 움직임..

   // win.on('scroll',function(){
      // const cb = $('#conBox');
      // const cbUl = cb.children('ul');
      // const cbLi = cbUl.children('li');
      // let cbLen = cbLi.length;
      // let cbLiScr = [];

      // for (let k = 0; k < cbLen; k++){
      //    let scroll = win.scrollTop();
      //    let st = cbLi.eq(k).offset().top;
      //    cbLiScr.push(st);
      //    cbLi.eq(k).find('span').css({ transform: 'translateY(' + (scroll - cbLiScr[k]) / 15 +'px)'});
      // }
      // console.log(cbLiScr);
   // }); 
// ----------------------------------------------------------

// ----------------------------------------------------------
// 선생님이 풀어주신 이미지

   const conBox = $('#conBox');
   const conList = conBox.find('li');
   const liOffset = [];


   for(let i = 0; i < conList.length; i++){
      liOffset.push(conList.eq(i).offset().top);//const로 선언된 배열에 추가하는 건 가능.
      // liOffset[i] = conList.eq(i).offset().top;
   };
   console.log(liOffset);
   
   
   win.on('scroll',function(e){
      e.preventDefault();
      let scroll = win.scrollTop();
      let scRel = [];
      for (let i = 0; i < conList.length; i++){
         scRel[i] = liOffset[i] - scroll - (winH / 2);   // winH를 더 연산해주는 이유 : 이미지 움직임의 시작점 조절을 위해서
         conList.eq(i).find('span').css({transform:'translateY('+ -scRel[i] / 10 +'px)'});
      }
      console.log(scRel[0]);
   })
// ----------------------------------------------------------

})(jQuery);