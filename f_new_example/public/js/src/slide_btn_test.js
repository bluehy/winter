(function($){

   const product = $('.product');
   const productUl = product.find('ul');
   let productLi = productUl.find('li');

   
   let productLen = productLi.length;
   for(let i=0;i <productLen;i++){
      productLi.eq(i).children('a').css({'backgroundImage':'url("../img/slide_test_01/slide_0' + (i+1) + '.png")'});
   };
   
   productLi.eq(-1).clone(true).prependTo(productUl);

   productLi = productUl.find('li');
   productLen = productLi.length;

   productUl.css({'width':100 * productLen + '%', 'marginLeft':'-100%'});
   productLi.css({'width':100 / productLen + '%'});


})(jQuery);