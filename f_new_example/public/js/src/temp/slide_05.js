// slide_05.js

(function($){
   console.log('slide_05.js불러왓슴니다.');
   // 이미지 경로와 이미지 파일명
   const url = "../img/slide_01/";           // main.html기준으로 경로 지정
   let imgList = [
                  {title : 'slide title _01',
                   content : '뛰어오는 머머',
                   linkText : '1번째 바로가기',
                   link : 'http://naver.com',
                   bgimg : 'mySlideImage_01.jpg' },

                   {title : 'slide title _02',
                   content : '바라보는 멈머',
                   linkText : '2번째 바로가기',
                   link : 'http://daum.net',
                   bgimg : 'mySlideImage_02.jpg' },

                   {title : 'slide title _03',
                   content : '소리치는 애옹이',
                   linkText : '3번째 바로가기',
                   link : 'http://google.com',
                   bgimg : 'mySlideImage_03.jpg' },

                   {title : 'slide title _04',
                   content : '우리 아가랑',
                   linkText : '4번째 바로가기',
                   link : 'http://xidoweb.com',
                   bgimg : 'mySlideImage_04.jpg' },

                   {title : 'slide title _05',
                   content : '커어어',
                   linkText : '5번째 바로가기',
                   link : 'http://fontawesome.io',
                   bgimg : 'mySlideImage_05.jpg' }
                  ];
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

   // imglen++; // li 마지막 요소 추가하여 갯수 파악(imgLen을 길이로 사용할 때...)

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

// 슬라이드에 마우스 올라가면 버튼 생기기

slideForm.on('mouseenter',function(){
   slideBtn.children('button').addClass('action');
});

slideForm.on('mouseleave',function(){
   slideBtn.children('button').removeClass('action');
});

})(jQuery);