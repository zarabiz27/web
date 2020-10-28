// ---------------------------slick
(function($){
  $(function(){
    $('.vertical-slider').slick({
      arrows: false,
      dots: true,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
    });
    //스크롤감지
    $('.vertical-slider').mousewheel(function(e) {
      if (e.deltaY < 0) {
        if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
          return
        }
        
        e.preventDefault()
        $(this).slick('slickNext')
      } else {
        if($(this).slick('slickCurrentSlide') == 0) {
          return
        }
        
        e.preventDefault()
        $(this).slick('slickPrev')
      }
    });
  });
  // if($(window).width() < 641){
  //   $('#sl01').removeClass('vertical-slider');
  // }
}(jQuery));

//sec2 horizontal carousel autoplay
var swiper2 = new Swiper('.swiper_h', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); 

$(document).ready(function(){
  function onClick() {
    document.querySelector('.modalmenu').style.display ='flex';
  }   
  function offClick() {
    document.querySelector('.modalmenu').style.display ='none';
  }
    document.getElementById('modalbtn').addEventListener('click', onClick);
    document.querySelector('.modalclose').addEventListener('click', offClick);

  $(".slick-dots li .dot").click(function(e){
    e.preventDefault();
      $(this).toggleClass("on");
  });
});

var square = document.getElementsByClassName('square');
for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}