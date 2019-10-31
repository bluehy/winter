// paul_01.js
(function($){
   const body = $('body');
   const wrap = $('#wrap');
   wrap.append('<header id="headBox"></header>');
   wrap.append('<section id="viewBox"></section>');
   wrap.append('<article id="conBox"></article>');
   wrap.append('<footer id="footBox"></footer>');

   const file = ['headBox', 'viewBox', 'conBox', 'footBox'];

   for(let i = 0; i < file.length; i++){
      let url = './temp/paul_';
      let jsUrl = '../js/src/temp/paul_';
      let scriptSam = function(file){
         return body.append(`<script src="${jsUrl+ file }.js"></script>`);
         // '<script src="'+ jsUrl + file +'.js"></script>';
      };

      // $(`#${file[i]}`);
      $('#'+file[i]).load(url + file[i] + '.html',function(){
                        // ./temp/paul_file[i].html
         scriptSam(file[i]);
      }); // file[i].html과 script파일을 연결된 html에 load해오기
   } // file불러오는 for반복구문


})(jQuery);