(function($){

   const conBox = $('#conBox');
   const conBtn = conBox.find('button');
   const bar = conBox.find('.bar');

   conBtn.on('click',function(e){
      e.preventDefault();
      bar.toggleClass('hideBar');
      let view = bar.hasClass('hideBar'); //   hasClass() : class 이름의 존재유(true)무(false) 판단.
      if(view){
         bar.stop(false,true).animate({width:0},2000);
      }else{
         bar.stop(false,true).animate({width:100+'%'},2000);
      }


   });

})(jQuery);