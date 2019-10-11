// jq_01.js
// 제이쿼리기본

(function($){ 
   console.log("v"+$.fn.jquery);

   // #wrap{width:700px; height:auto; margin:auto; background-color:#faa;} _in CSS
   
   $('#wrap').css({width:'700px', height:'auto', backgroundColor:'#faa'});
   $('h1').css({width:'100%', height:'auto', 'backgroundColor': '#acf'});

   // h2.addEventListener('click', function(){});
   $('h2').on('click', function(){
      $('#wrap').animate({height:'1000px', backgroundColor:'#0af'});
   });

})(jQuery);

