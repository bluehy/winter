// slide_indi_and_btn.js

(function(){
   // 1. data 불러오기
   let url = '../data/';

   $.ajax({
      async:false,
      dataType:'json',
      url: url + 'slide_indi_and_btn.json',
      success: function(data){
         console.log(data);
      }
   });

   let imgUrl = "../img/slide_test_02/";


})(jQuery);