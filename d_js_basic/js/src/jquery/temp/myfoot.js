
   (function(){
      const footBox = $('#footBox');
      footBox.css({'backgroundColor':'#ccc','textAlign':'center', 'fontWeight':'bold'});
   })(jQuery);

//  jquery파일 가져온 후에 load로 불러낸 결과이기 때문에, 스크립트가 적용이 되는 것뿐, 실제 html에 이대로 쓰면 jquery.js 파일이 나중에 적혀있기 때문에 실행되지 않는다.