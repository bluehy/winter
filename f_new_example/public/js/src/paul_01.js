// paul_01.js
(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.append('<header id="headBox"></header>');
   wrap.append('<section id="viewBox"></section>');
   wrap.append('<article id="conBox"></article>');
   wrap.append('<article id="conBox2"></article>');
   wrap.append('<article id="conBox3"></article>');
   wrap.append('<footer id="footBox"></footer>');

   const file = ['headBox', 'viewBox', 'conBox','conBox2','conBox3', 'footBox'];



   let url = './temp/paul_';
   let jsUrl = '../js/src/temp/paul_';
   let scriptSam = function(file){
      return body.append(`<script src="${jsUrl+ file }.js"></script>`);
      // '<script src="'+ jsUrl + file +'.js"></script>';
   };//     let scriptSam

   for(let i = 0; i < file.length; i++){
      
      // $(`#${file[i]}`);
      $('#'+file[i]).load(url + file[i] + '.html',function(){
                        // ./temp/paul_file[i].html
         scriptSam(file[i]);
      }); // file[i].html과 script파일을 연결된 html에 load해오기

   } // file불러오는 for반복구문

    // ----------------------------------------------------------------
    setTimeout(function(){
      scriptSam('scroll'); // paul_scroll.js
   },100);
   // ------------------------------------------------------------------
   
   

})(jQuery);