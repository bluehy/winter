(function($){

   const product = $('.product');
   const productUl = product.find('ul');
   let productLi = productUl.find('li');

   const btn = $('.btn').find('button');

   let productLen = productLi.length;



   for(let i=0;i <productLen;i++){
      productLi.eq(i).children('a').css({'backgroundImage':'url("../img/slide_test_01/slide_0' + (i+1) + '.png")'});
   };

// 가로형 슬라이드 기능
const HorizonSlide = function(){
   productLi.eq(-1).clone(true).prependTo(productUl);

   productLi = productUl.find('li');
   productLen = productLi.length;

   productUl.css({'width':100 * productLen + '%', 'marginLeft':'-100%', 'position':'relative', 'left':0});
   productLi.css({'width':100 / productLen + '%'});

      // ---------------------------------------------------------------------------


      let i = 0;
      
      btn.on('click',function(e){
         e.preventDefault();
         let btnL = $(this).hasClass('next');

         if(btnL){//다음버튼클릭시
            i++;
            if(i >= productLen - 1){
               i = 0;
               productUl.css({'left':'100%'});
            };
         }else{//이전버튼클릭시
            i--;
         }//버튼 클릭
         productUl.animate({'left': -100 * i + '%'},function(){
            if(i <= -1){
               i = productLen - 2;
               productUl.css({'left':-100 * i + '%'});
            };
         });//productUl.animate
      })
   };// HorizonSlide()
   // HorizonSlide();
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// 세로형 슬라이드 기능
productLi.eq(-1).clone().prependTo(productUl);
productLi = productUl.find('li');
productLen = productLi.length;
let productH = product.outerHeight();
// console.log(productH);

productUl.css({'width':'100%', 'height':100 * productLen + '%', 'transform': `translateY(${-productH}px)`,'position':'relative','left':0,'top':0});
productLi.css({'width':'100%', 'height':productH});



})(jQuery);