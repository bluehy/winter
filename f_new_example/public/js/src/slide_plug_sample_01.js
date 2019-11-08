// slide_plug_sample_01.js

// console.log($.fn); // 버전확인

$.fn.mySlide = function(){
   const slide = this;
   const product = $('.product');
   const productUl = product.find('ul');
   let productLi = productUl.find('li');

  

   let productLen = productLi.length;


   for(let i=0;i < productLen; i++){
      productLi.eq(i).children('a').css({'backgroundImage':'url("../img/slide_test_01/slide_0' + (i+1) + '.png")'});
   };

// ==================================================================================
// 버튼 생성
let btnIn = '<div class="btn"><button type="button" class="next"><i class="fas fa-angle-right"></i><span>다음내용보기</span></button><button type="button" class="prev"><i class="fas fa-angle-left"></i><span>이전내용보기</span></button></div>'

slide.prepend(btnIn);

const btn = $('.btn').find('button');

// ==================================================================================



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
         productUl.stop().animate({'left': -100 * i + '%'},function(){
            if(i <= -1){
               i = productLen - 2;
               productUl.css({'left':-100 * i + '%'});
            };
         });//productUl.animate
      })
   };    // HorizonSlide();
// ----------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------
// 세로형 슬라이드 기능
const VerticalSlide = function(){
   productLi.eq(-1).clone().prependTo(productUl);
   productLi = productUl.find('li');
   productLen = productLi.length;
   let productH = product.outerHeight();
   // console.log(productH);

   productUl.css({'width':'100%', 'height':100 * productLen + '%', 'transform': `translateY(${-productH}px)`,'position':'relative','left':0,'top':0});
   productLi.css({'width':'100%', 'height':productH});


   let i = 0;

   btn.on('click',function(e){
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      if(btnL){
      //next버튼
         i++;
         if(i >= productLen-1){
            i = 0;
            productUl.css({'top':productH+'px'});
         }
      }else{
      //prev버튼
         i--;
      }// if
      productUl.stop().animate({'top':-productH * i + 'px'},function(){
         if(i <= -1){
            i = productLen -2;
            productUl.css({'top':-productH * i + 'px'});
         };
      });
   });// btn.on('click')
   };    //VerticalSlide();
// ----------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------
// 간단하게 화면만 바뀌는 기능
const BasicSlide = function(){
   let i = 0;
   
   btn.on('click',function(e){
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      if(btnL){
         i++;
         if(i >= productLen){
            i = 0;
         }
      }else{
         i--;
         if(i <= -1){
            i = productLen-1;
         }
      }//버튼 뭘 눌렀지_판단
      productUl.css({'marginLeft':-100 * i + '%'});
   });
};       //BasicSlide();

// ----------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------
// z-index슬라이드형  기능
const ZIndexSlide = function(){
   productUl.css({'position':'relative','width':'100%'});
   productLi.css({'position':'absolute','width':'100%'});
   productLi.eq(0).nextAll().hide();

   productLen = productLi.length;

   let i = 0;

   btn.on('click',function(e){
      e.preventDefault();
      let btnL = $(this).hasClass('next');
      if(btnL){//next
         i++;
         if(i >= productLen){
            i = 0;
         }
      }else{//prev
         i--;
         if(i <= -1 ){
            i = productLen - 1;
         }
      };//if(btnL)
      productLi.eq(i).css({'zIndex':'100'});
      productLi.eq(i).fadeIn(function(){
         productLi.eq(i).siblings().fadeOut(function(){
            productLi.eq(i).css({'zIndex':0});
         });
      });
   });// btn.on('click')

}; //ZIndexSlide();

// ------------------------------------------------------------------------------------
product.css({'overflow':'visible'});
// ------------------------------------------------------------------------------------
// 함수를 객체화처리.
const obj = {
   t1 : '001',
   t2 : '002',
   t3 : '003'
}



// -------------------------------------------------------------------------------------
};// $.fn.mySlide;