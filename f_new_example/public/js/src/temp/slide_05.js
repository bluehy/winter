// slide_05.js

(function($){
   console.log('slide_05.js불러왓슴니다.');
   // 이미지 경로와 이미지 파일명
   const url = "../img/slide_01/";           // main.html기준으로 경로 지정
   let imgList;
   
   $.ajax({
      async:false,                              //false : 외부 공개
      type:'GET',
      url:'../data/slide_05.json',
      dataType:'json',
      error:function(){console.log('data error');},
      success:function(data){
         imgList = data;                        // data를 대입
         return imgList;                        // imgList를 
      }
   });

   console.log(imgList);

   // const imgList = ['mySlideImage_01.jpg',
   //                  'mySlideImage_02.jpg',
   //                  'mySlideImage_03.jpg',
   //                  'mySlideImage_04.jpg',
   //                  'mySlideImage_05.jpg' ];

// --------------------------------------------------------------------------
// 기본선택자 및 내용(기본틀) 생성
   const slide_04 = $('#viewBox_05');
   slide_04.append('<div class="slide_form"></div>');
   const slideForm = slide_04.children('.slide_form');
   slideForm.append('<ul></ul>');
   const slideGuide = slideForm.children('ul');

   let imgLen = imgList.length;
   console.log('이미지 객체의 갯수는' + imgLen + ' 개입니다.');
   let slideCon = '<dl><dt></dt><dd class="con"></dd><dd class="link"><a href=""></a></dd></dl>';

   for(let i = 0 ; i < imgLen; i++){
      if (i < 10){
         // slideGuide.append('<li></li>');
         slideGuide.append('<li class="slide5th_0' + (i+1) + '"></li>');
      }else{
         slideGuide.append(`<li class="slide5th_${i}"></li>`);         
      }
      // slideGuide.append('<li class="slide5th_0' + (i +1) + '"></li>');
      // slideGuide.append(`<li class="slide5th_0${i+1}"></li>`);
      let li_nth = slideGuide.children('li').eq(i);
         
         // li_nth.append('<h3></h3><p></p><button></button>');
         li_nth.append(slideCon);    //html(); -> 지정된 요소 안의 내용을 지워내고 채우기.
         li_nth.find('dt').text(imgList[i].title);
         li_nth.find('.con').append(imgList[i].content);

      let link = li_nth.find('.link').children('a');
         link.append(imgList[i].linkText);
         link.attr({'href':imgList[i].link, 'target':'_blank'});   // attr('속성','값'); = attr({'속성':'값'});
                                             // target 속성 : 새창에서 열기(blank), 현재 창에서 열기 등...
         // li_nth.css({'backgroundImage':`url(${url + imgList[i]})`});
         // li_nth.css({'backgroundImage':'url("' + url + imgList[i] + '")'});     // 기본 이미지 이름 리스트
         li_nth.css({'backgroundImage':'url("' + url + imgList[i].bgimg + '")'});
   }

   let cloneLi = slideGuide.children('li').eq(-1).clone(true);
   cloneLi.prependTo(slideGuide);

   imgLen++; // li 마지막 요소 추가하여 갯수 파악(imgLen을 길이로 사용할 때...)

   let slidePage = slideGuide.children('li') ;
   let bannerLen = slidePage.length;

   slideGuide.css({'width':bannerLen * 100 +'%'});
   slidePage.css({'width':100 / bannerLen + '%', 'boxSizing':'border-box','border':'1px solid #5ff'});

// 좌우버튼 만들기
   
   slideForm.prepend('<div class="slide_btn"></div>');
   const slideBtn = slideForm.children('.slide_btn');
   slideBtn.append('<button type="button" class="next"><span class="hidden">다음 내용 보기</span></button><button type="button" class="prev"><span class="hidden">다음 내용 보기</span></button>');

   const nextBtn = slideBtn.children('.next');
   const prevBtn = slideBtn.children('.prev');


   // # (선생님 풀이)  좌우버튼 만들기 -----------------------------------------
      let btnMake = '<div class="slide_04_btn_area">\
                        <button type="button" class="next"><span>다음 내용 보기</span></button>\
                        <button type="button" class="next"><span>이전 내용 보기</span></button>\
                     </div>';
      slide_04.prepend(btnMake);
      const btnArea = slide_04.find('.slide_04_btn_area');
      const btn = btnArea.children('button');

      slide_04.css({'position':'relative'});
      btnArea.css({'position':'absolute','top':'-50px','left':0,'backgroundColor':'#ccc'});
      btn.css({'width':'100px','height':'30px'});
      btn.eq(0).css({'float':'right'});
      btn.eq(1).css({'float':'left','marginRight':'10px'});
   // --------------------------------------------------------------------------



// 좌우버튼으로 슬라이드 이동하기

   let myn = 0;
   console.log(bannerLen);

   nextBtn.on('click',function(e){
      e.preventDefault();
      myn++;
      if(myn >= bannerLen - 1 ){
         slideGuide.css({'left':'100%'});
         myn = 0;
      }
      slideGuide.stop().animate({'left':-100 * myn + '%' });
   });

   prevBtn.on('click',function(e){
      e.preventDefault();
      myn--;
      slideGuide.stop().animate({'left':-100 * myn + '%'},function(){
         if(myn <= -1){
            myn = bannerLen - 2;
            slideGuide.css({'left':-100 * myn + '%'});
         };
      });
   });

   //  # (선생님 풀이) 생성된 좌우버튼을 이용하여, 좌우 슬라이드 기능 수행 -----------------------------------------

      //     myn = 0;
      // console.log(imgLen);


      // // next 버튼 클릭
      // btn.eq(0).on('click',function(e){ 
      //    e.preventDefault();
      //    myn++;
      //    console.log(myn);
      //    // +++++++++++++++++++++++++++++++
      //    if(myn >= imgLen-1){ 
      //       slideGuide.css({'left':'100%'});
      //       myn = 0;
      //    };
      //    // +++++++++++++++++++++++++++++++
      //    let per = -100 * myn + '%';
      //    slideGuide.stop(true,false).animate({'left': per});
      // });

      // // prev 버튼 클릭
      // btn.eq(1).on('click',function(e){ 
      //    e.preventDefault();
      //    myn--;
      //    console.log(myn);
      //    let per = -100 * myn + '%';
      //    slideGuide.stop(true,false).animate({'left':per}, function(){
      //       // ++++++++++++++++++++++++++++++++
      //       if(myn <= -1 ){
      //          myn = imgLen - 2;
      //          slideGuide.css({'left':-100 * myn + '%'});
      //       }; // if구문 (맨처음에서보다 앞으로 가면, 맨 뒤로 보내는 기능을 수행하는 if)
      //       // ++++++++++++++++++++++++++++++++
      //    }); //animate 후 function(){  ...  }
      // });
   // --------------------------------------------------------------------------
      // next, prev버튼을 하나로 구현
      btn.on('click',function(e){
         e.preventDefault();
         if($(this).index() == 0){                 // next버튼을 클릭 한 경우,
            myn++;
               // +++++++++++++++++++++++++++++++
               if(myn >= imgLen-1){                // 
                  slideGuide.css({'left':'100%'});
                  myn = 0;
               };// if구문\ if(myn >= imgLen-1){}
               // +++++++++++++++++++++++++++++++            
         }else{                                    // prev버튼을 클릭 한 경우,
            myn--;
         }//  if($(this).index() == 0){}else{}
            let per = -100 * myn + '%';
            slideGuide.stop(true,false).animate({'left':per}, function(){
               // ++++++++++++++++++++++++++++++++
               if(myn <= -1 ){                     // 맨처음에서 더 앞으로 이동할 때, 맨뒤로 가는 기능.
                  myn = imgLen - 2;
                  slideGuide.css({'left':-100 * myn + '%'});
               }; // if구문\ if(myn <= -1 ){}
               // ++++++++++++++++++++++++++++++++
         }); //animate 후 function(){  ...  }
      }); 

   

   // ---------------------------------------------------------------------------



// 슬라이드에 마우스 올라가면 버튼 생기기

slideForm.on('mouseenter',function(){
   slideBtn.children('button').addClass('action');
});

slideForm.on('mouseleave',function(){
   slideBtn.children('button').removeClass('action');
});

})(jQuery);