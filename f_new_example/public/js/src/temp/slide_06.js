// slide_06.js

(function($){

console.log('slide_06.js를 불러왓슴니다');

let url = '../img/pb_slide/'
let slideList = [
                  {title:'tasty autumn fruits',
                  content:'쌀쌀한 가을날씨에 잘 어울리는 향긋한 과일티 2종', 
                  button:'detail view', 
                  btnlink: 'https://www.baristapaulbassett.co.kr/whatsNews/event/View.pb?eventSeq=73', 
                  bgImg: 'pb_slideImage01' },

                  {title:'Cream & Cheese Muffin',
                  content:'촉촉한 크림과 치즈, 다양한 토핑이 올라간 머핀', 
                  button:'detail view', 
                  btnlink: 'https://www.baristapaulbassett.co.kr/menu/new/View.pb?cid1=&seq=67',
                  bgImg: 'pb_slideImage02' },

                  {title:'BTS pop-up house of BTS',
                  content:'방탄소년단 팝업스토어는 폴 바셋과 함께합니다', 
                  button:'detail view', 
                  btnlink: 'https://www.baristapaulbassett.co.kr/whatsNews/event/View.pb?eventSeq=79', 
                  bgImg: 'pb_slideImage03' } ];



const viewBox06 = $('#viewBox_06');
let addhtml = '<div class="slide_temp"><div class="slide_btn"><button type="button" class="next"><span>다음 광고 보기</span></button><button type="button" class="prev"><span>이전 광고 보기</span></button></div><div class="slide_index"></div><div class="slide_guide"></div></div>';
viewBox06.append(addhtml);

const slideArea = viewBox06.children('.slide_temp');
const slideBtn = slideArea.children('.slide_btn');
const slideIndex = slideArea.children('.slide_index');
const slideGuide = slideArea.find('.slide_guide');

let conLen = slideList.length;
console.log(conLen+'폴바셋');



// 슬라이드 내용 추가 ------------------------------------------------------------
for(let i = 0; i < conLen; i++){
   addhtml = '<dl class="pb_slide0'+ (i+1) +'"><dt></dt><dd></dd><dd></dd></dl>';
   slideGuide.append(addhtml);

   let slideDli = slideGuide.find('dl').eq(i);
   slideDli.css({'backgroundImage':'url("'+url+slideList[i].bgImg+'.jpg")'});
   slideDli.find('dt').append(slideList[i].title);
   slideDli.find('dt').next('dd').append(slideList[i].content);
   slideDli.find('dd').eq(1).append('<a href="">'+slideList[i].button+'</a>');
   slideDli.find('a').attr('href',slideList[i].btnlink);   
};
// -----------------------------------------------------------------------------------

// 슬라이드 클론 ---------------------------------------------------------------------

slideGuide.children('dl').eq(-1).clone(true).prependTo(slideGuide);
let slidePage = slideGuide.children('dl');
let slideLen = slidePage.length;
console.log(slideLen+'슬라이드갯수');

// ------------------------------------------------------------------------------------


// 사이즈 적용
slideGuide.css({'width':100 * slideLen + '%' });
slidePage.css({'width':100 / slideLen + '%'});

// ----------------------------------------------------------------------------------


// 페이지 넘버 넣기 ----------------------------------------------------------------------

slideIndex.append('<div class="page_num"><span class="page"></span><span class="pages"></span></div>');
const currentPage = slideIndex.find('.page');
const allPages = slideIndex.find('.pages');


let i = 0;

const myPageNum = function(n){
   currentPage.text('0'+(n + 1));
   allPages.text('0'+(slideLen - 1));
}
myPageNum(i);
// --------------------------------------------------------------------------------------

// 슬라이드 자동 이동 ----------------------------------------------------------------------

let go;
const GoSlide = function(){
   go = setInterval(){
      
      slideGuide.animate({'left':-100 * i + '%'});
   }
};


// ----------------------------------------------------------------------------------

// 버튼 클릭으로 슬라이드 이동 -----------------------------------------------------------

const moveBtn = slideBtn.children('button');
const nextBtn = slideBtn.children('.next');
const prevBtn = slideBtn.children('.prev');

nextBtn.on('click',function(e){
   e.preventDefault();
   i++;
   if(i >= slideLen - 1){
      slideGuide.css({'left':'100%'});
      i = 0;
   }
   slideGuide.stop().animate({'left':-100 * i + '%'});
   myPageNum(i);
}); //nextBtn.on('click')


prevBtn.on('click',function(e){
   e.preventDefault();
   i--;
   slideGuide.stop().animate({'left':-100 * i + '%'},function(){
      if(i <= -1){
         i = slideLen -2;
         slideGuide.css({'left':-100 * i + '%'});
      }
      myPageNum(i);
   });
   
}); //prevBtn.on('click')

// -------------------------------------------------------------------------------------


})(jQuery);

