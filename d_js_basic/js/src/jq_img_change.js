// ja_img_change.js
(function($){
   const wrap = $('#wrap');
   const myForm = wrap.find('.mouse_form');
   const myLoca = wrap.find('.mouse_location');

   let url = '../../img/gear/';
   // myForm.css({'backgroundImage':'url("'+url + "gear_001" +'.png")'});
   myForm.css({'backgroundImage':`url("${url}gear_001.png")`});

})(jQuery);

