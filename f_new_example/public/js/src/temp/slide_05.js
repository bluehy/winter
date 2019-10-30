// slide_05.js

(function($){
   console.log('slide_05.js불러왓슴니다.');
   // 이미지 경로와 이미지 파일명
   const url = "../img/slide_01/";           // main.html기준으로 경로 지정
   let sample = [
                  {title : 'slide title _01',
                   content : 'slide content ....',
                   linkText : '바로가기',
                   link : 'http://naver.com',
                   bgimg : 'mySlideImage_01.jpg' },
                   {title : 'slide title _01',
                   content : 'slide content ....',
                   linkText : '바로가기',
                   link : 'http://naver.com',
                   bgimg : 'mySlideImage_01.jpg' },
                   {title : 'slide title _01',
                   content : 'slide content ....',
                   linkText : '바로가기',
                   link : 'http://naver.com',
                   bgimg : 'mySlideImage_01.jpg' },
                   {title : 'slide title _01',
                   content : 'slide content ....',
                   linkText : '바로가기',
                   link : 'http://naver.com',
                   bgimg : 'mySlideImage_01.jpg' },
                   {title : 'slide title _01',
                   content : 'slide content ....',
                   linkText : '바로가기',
                   link : 'http://naver.com',
                   bgimg : 'mySlideImage_01.jpg' }
                  ];
   const imgList = ['mySlideImage_01.jpg',
                    'mySlideImage_02.jpg',
                    'mySlideImage_03.jpg',
                    'mySlideImage_04.jpg',
                    'mySlideImage_05.jpg' ];

// --------------------------------------------------------------------------
// 기본선택자 및 내용(기본틀) 생성
   const slide_04 = $('#viewBox_05');
   slide_04.append('<div class="slide_form"></div>');
   const slideForm = slide_04.children('.slide_form');
   slideForm.append('<ul></ul>');
   const slideGuide = slideForm.children('ul');

   let imgLen = imgList.length;
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
      li_nth.text(imgList[i]);
      // li_nth.css({'backgroundImage':`url(${url + imgList[i]})`});
      li_nth.css({'backgroundImage':'url("' + url + imgList[i] + '")'});
   }

   let cloneLi = slideGuide.children('li').eq(-1).clone(true);
   cloneLi.prependTo(slideGuide);

   // imglen++; // li 마지막 요소 추가하여 갯수 파악(imgLen을 길이로 사용할 때...)

   let slidePage = slideGuide.children('li') ;
   let bannerLen = slidePage.length;

   slideGuide.css({'width':bannerLen * 100 +'%'});
   slidePage.css({'width':100 / bannerLen + '%', 'boxSizing':'border-box','border':'1px solid #5ff'});

})(jQuery);