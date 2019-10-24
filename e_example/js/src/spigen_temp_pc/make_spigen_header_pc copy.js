// make_spigen_main_pc.js

(function($){
   // 1. #gnb영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
   // .clone() 메서드를 사용

   const gnb = $('#gnb');
   const sideGnbArea = $('.side_gnb_area');
   
   
   

   const gnbMenu = [
      {title:'about',titleLink:'title_link_1',
         // sub: ['who we are','what we do','our locations']},
         sub: [{subName:'who we are', subLink:'sub_01_0'},
               {subName:'what we do', subLink:'sub_01_1'},
               {subName:'our locations', subLink:'sub_01_2'}
      ]},
      {title:'careers',titleLink:'title_link_2',
         // sub: ['careers','hr blog','apply']},
         sub: [{subName:'careers',subLink:'sub_02_0'},
               {subName:'hr blog',subLink:'sub_02_1'},
               {subName:'apply',subLink:'sub_02_2'}
      ]},
      {title:'media',titleLink:'title_link_3',
         // sub: ['media']},
         sub: [{subName:'media',subLink:'sub_03_0'}
      ]},
      {title:'ir',titleLink:'title_link_4',
         // sub: ['investors','ir archive','ir meeting']}
         sub: [{subName:'investors',subLink:'sub_04_0'},
               {subName:'ir archive',subLink:'sub_04_1'},
               {subName:'ir meeting',subLink:'sub_04_2'}]}
      ];

      // 배열에서 객체로.
      // gnbMenu[0].title   = about
      // gnbMenu[0].sub[0]  = who we are

      // for (let i = 0; i < gnbMenu[0].sub.length; i++){
      //    console.log(gnbMenu[0].sub[i]);
      // };
      // for (let i = 0; i < gnbMenu[1].sub.length; i++){
      //    console.log(gnbMenu[1].sub[i]);
      // };
      // for (let i = 0; i < gnbMenu[2].sub.length; i++){
      //    console.log(gnbMenu[2].sub[i]);
      // };
      // for (let i = 0; i < gnbMenu[3].sub.length; i++){
      //    console.log(gnbMenu[3].sub[i]);
      // };

      for (let i = 0 ; i < gnbMenu.length ; i++ ){
         console.log(gnbMenu[i].title);
         // 이중 for문.
         for(let j = 0 ; j < gnbMenu[i].sub.length ; j++ ){
            console.log(gnbMenu[i].sub[j]);
         }// 이중 for문. sub갯수 
      };



   const menuLen = gnbMenu.length;
   
   gnb.append('<ul></ul>');
   const gnbUl = gnb.children('ul'); //gnb영역에 ul생성

      for(let i = 0; i < menuLen ; i++){
         // console.log(gnbMenu[i]);
         // gnb.append(gnbMenu[i]);
         let gnbTitleLink = 
         gnbUl.append('<li><dl><dt><a href="'+ gnbMenu[i].titleLink +'"></a></dt><dd></dd></dl></li>');
         let gnbLi_i = gnbUl.children('li').eq(i);
         let gnbLi_aLink = gnbLi_i.find('dt').children('a')

         // gnbLi_aLink.attr('class',gnbMenu[i].titleLink);
         // attr써서 집어넣기 .attr('속성', '값');

         if(i===3){
            gnbLi_aLink.append('<abbr title="investor Relations"></abbr>');
            gnbLi_aLink.children('abbr').text(gnbMenu[i].title);
         }else{
            gnbLi_aLink.text(gnbMenu[i].title);
            
         }
            // sub내용 집어넣기
            const subLen = gnbMenu[i].sub.length;
            for(let j = 0 ; j < subLen; j++){
               let subDd = gnbLi_i.find('dd');
               subDd.append('<a href="'+ gnbMenu[i].sub[j].subLink +'"></a>');
               let subMyLink = subDd.children('a').eq(j);
               subMyLink.text(gnbMenu[i].sub[j].subName);
               // subMyLink.attr('href',gnbMenu[i].sub[j].subLink);
               // attr 써서 링크 삽입하기
            }; //for반복문_1_2
   };// for 반복문_1






   let gnbContents = gnb.contents().clone();
      // console.log(gnbContents);
      sideGnbArea.append(gnbContents);





/* 내 풀이이ㅣ이이이
// ==============================================
// gnb 메뉴 js 기능으로 처리

const bmTextUl = '<ul></ul>'
const bmText = '<li><dl><dt><a href="#">Text</a></dt><dd></dd></dl></li>'

const bmTextA = '<a href="#">Sub_Text</a>'

const gnbList = [
   {title:'about',data:['who we are','what we do','our locations']},
   {title:'careers',data:['careers','hr blog','apply']},
   {title:'media',data:['media']},
   {title:'ir',data:['investors','IR Archive',' IR Meeting']}];
   

   gnb.append(bmTextUl);

const HeadList = function(myList){

   for (let i = 0; i < myList.length; i++){
   gnb.find('ul').append(bmText);
   gnb.find('li').eq(i).find('dt').children('a').text(myList[i].title);
   
      for (let j = 0; j < myList[i].data.length; j++){
         gnb.find('li').eq(i).find('dd').append(bmTextA);
         gnb.find('li').eq(i).find('dd').children('a').eq(j).text(myList[i].data[j]);         
      };
   };
};

console.log(gnbList[1].data.length);
HeadList(gnbList);




// 메뉴 리스트....js로...넣기....========================================

// 내 풀이이이이이 */ 



// =============================================================
// 버튼 클릭시 side_gnb 나타나고 사라지게 만들기

const sideGnb = $('.side_gnb');
const openGnbBtn = $('.gnb_btn>button');
const closeGnbBtn = $('.close_gnb_btn>button');
const gnbDl = gnb.find('dl');
const gnbDd = gnb.find('dd');
const gnbDt = gnb.find('dt');
const gnbTitleLink = gnbDt.children('a');
const gnbListLink = gnbDd.children('a');

let time = 600;


openGnbBtn.on('click',function(e){
   e.preventDefault();
   // sideGnb.show();
   sideGnb.stop().fadeIn(time/2, function(){
      $(this).on('keyup',function(e){
         console.log(e.key.toLowerCase());
         // 영문글자를 강제로 대/소문자로 치환하는 함수
         // 대문자로 변환 toUpperCase()
         // 소문자로 변환 toLowerCase()
         if(e.key === escape){
            sideGnb.stop().fadeOut(time*1.5);
            openGnbBtn.focus();
         }


         console.log(e.keyCode);
         //esc = 27
        /*  if (e.keyCode == 27){
            sideGnb.stop().fadeOut(time*1.5);
            openGnbBtn.focus();
         } */
         
      })
   });
   closeGnbBtn.focus();
   // sideGnb.css({'display':'block'}); //도 가능

});

closeGnbBtn.on('click',function(e){
   e.preventDefault();
   // sideGnb.hide();
   sideGnb.stop().fadeOut(time*1.5);
   // sideGnb.css({'display':'none'}); //도 가능
});



// #gnb에 마우스 올렸을 경우, dd를 나오게 만들기

   const addAction = function(){
      let li = $(this).parents('li');
      li.find(gnbTitleLink).addClass('action');
      li.siblings().find(gnbTitleLink).removeClass('action');
      // $(this).siblings().find(gnbTitleLink).removeClass('action')
      gnbDd.stop().slideDown();
   }

   // gnbDl.on('mouseenter', addAction);


   const removeAction = function(){
      $(this).parents('li').find(gnbTitleLink).removeClass('action');
      gnbDd.stop().slideUp();
   }


   // gnbDl.on('mouseleave',removeAction);

   gnbDl.on({'mouseenter':addAction, 'mouseleave':removeAction});


// #gnb에 Dt에 focus 처리되면 dd가 나타나게 만들기
// focus는 a, button, form(input, textarea, select)요소가 가능.


   // gnbTitleLink.on('focus',function(e){
   //    e.preventDefault();
   //    gnbDd.stop().slideDown();
   //    // $(this).on('focus',addAction);
   // });

   // gnbListLink.eq(-1).on('blur',function(e){
   //    e.preventDefault();
   //    gnbDd.stop().slideUp();
   //    // $(this).on('blur',removeAction);
   // });

   gnbTitleLink.on('focus',addAction);
   gnbListLink.on('blur',addAction);
   gnbListLink.eq(-1).on('blur',removeAction);
   
   
// .side_gnb_area 내부의 마지막 a요소에서 blur처리되면, .close_gnb_btn으로 다시 focus처리되어라.
// 단, 전체페이지에서 추가로 focus처리되는 항목이 있어야 가능. 마지막이면 브라우저로 빠져나감.
// =****************************=현재 문제 있는 부분
   const sideLink = sideGnbArea.find('a');
   const sideLastLink = sideLink.eq(-1);
   // sideLastLink.css({'fontSize':'2rem'}); //선택 확인용

   // $('h1').find('a').on('focus'); // focus가 잡히면
   // $('h1').find('a').focus(); // focus를 잡아라.
      
   
   sideLastLink.on('blur',function(e){
      // closeGnbBtn.attr({'tabindex':1});
      e.preventDefault();
      closeGnbBtn.focus(); // 
   }); 

   


// =****************************=현재 문제 있음

// .side_gnb_area에서 키보드 esc키를 누르면, 빠져나가고 이전의 위치로 돌아가라.
   // -> .side_gnb_area가 보이는 곳에서 수행.



})(jQuery);