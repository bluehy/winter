// slide_indi_and_btn.js


(function($){
// 플러그인 화
$.fn.myIndiSlide = function(jsonList, imgList){

   // 1. data 불러오기
   let url = jsonList; //'../data/';
   let imgUrl = imgList; //"../img/slide_test_02/";
   let rel = null;

   $.ajax({
      async:false,
      dataType:'json',
      url: url + 'slide_indi_and_btn.json',
      success: function(data){
         return rel = data;
      }
   });
   
   // console.log(rel);

   // ----------------------------------------------------

   const slide = this;

   // slide 영역
   slide.append('<div class="slide_wrap"><ul></ul></div>');


   // btn 영역
   const slideWrap = slide.find('.slide_wrap');

   slideWrap.before('<div class="btn"><button type="button" class="next"><span>다음내용보기</span></button><button type="button" class="prev"><span>이전내용보기</span></button></div>')

   // indicator 영역(.slide_wrap이전에 생성)
   slideWrap.before('<ul class="indicator"></ul>');

   const indicator = slide.find('.indicator');

   // 각 영역에 필요한 내용 담기
   let slideLen = rel.length;
   console.log(slideLen);

   // const inForm = function(i){
   //    this.slideForm = `<li><span class="hidden">${rel[i].data}</span></li>`;
   //    this.indiForm = `<li><a href="#"><span class="hidden">${rel[i].data}</span></a></li>`;
   // };

   // let myForm = new inForm();

   for(let i = 0; i < slideLen; i++){
      let slideForm = `<li><span class="hidden">${rel[i].data}</span></li>`;
      let indiForm = `<li><a href="#"><span class="hidden">${rel[i].data}</span></a></li>`;
     
      /* inForm(i); */
      slideWrap.children('ul').append(slideForm);
      indicator.append(indiForm);
      slideWrap.find('li').eq(i).css({backgroundImage:'url('+ imgUrl + rel[i].img + ')'});

   } //form
   // -----------------------------------------------------------------------------------------
   // indicator 디자인
   indicator.parent().css({'position':'relative'});
   indicator.css({'position':'absolute','bottom':0, 'left':'50%','transform':'translateX(-50%)', width:'100%'});
   indicator.find('li').css({'display':'inline-block', marginRight:'0.5rem'});
   indicator.find('a').css({'display':'block','width': '26px', 'height':'26px','backgroundColor':'#ccc','borderRadius':'26px'});


   // button 디자인
   const btnArea = slide.find('.btn');
   const btn = btnArea.find('button');

   btnArea.css({position:'absolute',zIndex:'500',top:'50%', left: '5%', width: '90%', height: 0 });
   btn.css({width:'50px', height: '50px', transform:'translateY(-50%)'});
   btn.eq(0).css({float:'right'});

   // if(btn.hasClass('next')){
   //    .css({float:'right'});
   // }


   // slide 영역 디자인
   let thisH = slide.outerHeight();
   slideWrap.css({width: '100%', height:(thisH - 50)+'px'});
   const slideUl = slideWrap.children('ul');
   // ---------------------------------------
   // li 마지막요소 복제 첨부 후 디자인 수정
   slideUl.children('li').eq(-1).clone(true).prependTo(slideUl);
   const slideLi = slideUl.children('li');
   // ---------------------------------------
   slideLen++;

   slideUl.css({width:100 * slideLen + '%', height: '100%', marginLeft:'-100%',position:'relative',left:0});
   slideLi.css({width:100 / slideLen + '%', height: '100%', float:'left',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat',backgroundSize:'contain'});


   // 인디케이터 클래스 디자인
   let n = 0;
   let indiLi = indicator.children('li');
   let indiIndex = indiLi.eq(n);
   indiIndex.addClass('action');
   let indiDefault = indiIndex.children('a').css('backgroundColor');
   
   // const indiAction = function(){
   //    // let indiIndex = indiLi.eq(n);
   //    indiLi.eq(n).addClass('action');
   //    indiLi.siblings().eq(n).removeClass('action');
   //    indiIndex.siblings().children('a').css({backgroundColor:indiDefault});
   //    if(indiIndex.hasClass('action')){
   //       indiIndex.children('a').css({backgroundColor:'#f07'});
   //    }
      
   // }; //indiAction()

   $('head').append('<style class="myStyle"></style>');
   $('head').find('.myStyle').append('.indicator li.action > a{background-color:#70f !important}');

   // indicator 클릭 / focus
   indiLi.children('a').on('focus click',function(e){
      e.preventDefault();
      n = $(this).parent().index();
      indiLi.eq(n).addClass('action');
      indiLi.eq(n).siblings().removeClass('action');
      // indiAction();
      slideUl.stop().animate({'left':-100 * n +'%'});
   });


   // btn 클릭
   btn.on('click',function(e){
      e.preventDefault();
      let btnL = $(this).hasClass('next');

      if(btnL){
         n++;
         if(n >= slideLen -1){
            n = 0;
            slideUl.css({'left':'100%'});
         }
      }else{
         n--;
      }// if(btnL)
      slideUl.stop().animate({'left':-100 * n + '%'},function(){
         if(n <= -1){
            n = slideLen -2;
            slideUl.css({'left':-100 * n + '%'});
         }
      });
      indiLi.eq(n).addClass('action');
      indiLi.eq(n).siblings().removeClass('action');
   });



}; //$.fn.myIndiSlide   

})(jQuery);