// ---------------------------slick
(function($){
    $(function(){
      $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        if (i=='0'){
          i = "남산서울타워";
        } else if (i=='1'){
          i = "소개";
        } else if (i=='2'){
          i = "뉴스센터";
        } else if (i=='3'){
          i = "투어가이드";
        } else if (i=='4'){
          i = "오시는 길";
        }
        return '<a class="dot">'+i+'</a>';
        },
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
    // 모바일에서 slick 적용 해제
    if($(window).width() < 641){
      $('#sl01').removeClass('vertical-slider');
    }
  }(jQuery));
// 스크롤로 이동 시 헤더변경
var element = $('.vertical-slider');
$(element).mousewheel(function(e) { 
  if($(this).slick('slickCurrentSlide') !== 0){
    $("header .top").addClass("on");
  };
  if($(this).slick('slickCurrentSlide') == 0){
    $("header .top").removeClass("on");
  }
  else if($(this).slick('slickCurrentSlide') == 4){
    $(".vertical-slide.s5").addClass("on");
    $("footer").addClass("on");
  }
  else{
    $(".vertical-slide.s5").removeClass("on");
    $("footer").removeClass("on");
    $("header .top").addClass("on");
  }
  if($(this).slick('slickCurrentSlide') == 0){
    $("header .top").addClass("active");
    $(".slick-dots > li > .dot").removeClass("on");
    $("aside .quick").removeClass("on");
  }
  if($(this).slick('slickCurrentSlide') == 1){
    $("header .top").removeClass("active");
    $(".slick-dots > li > .dot").addClass("on");
    $("aside .quick").addClass("on");
  };
  if($(this).slick('slickCurrentSlide') == 2){
    $("header .top").addClass("active");
    $(".slick-dots > li > .dot").removeClass("on");
    $("aside .quick").removeClass("on");
  }
  if($(this).slick('slickCurrentSlide') == 3){
    $("header .top").removeClass("active");
    $(".slick-dots > li > .dot").addClass("on");
    $("aside .quick").addClass("on");
  };
  if($(this).slick('slickCurrentSlide') == 4){
    $("header .top").addClass("active");
    $(".slick-dots > li > .dot").removeClass("on");
    $("aside .quick").removeClass("on");
  }
});

  jQuery(document).ready(function(){
      //로고 클릭시 슬릭 원하는 페이지로 이동
    $(".logo").click(function(e){
      e.preventDefault();
        var home = $(this).data('slide');
        $('.vertical-slider').slick('slickGoTo', home - 1 );
        $("header .top").removeClass("on");
        //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
    });
    // dot 클릭시 헤더, 퀵메뉴, 어사이드 변경
    $(".slick-dots li .dot").click(function(e){
      e.preventDefault();
        $("header .top").addClass("on");
    });
    $(".slick-dots li .dot").eq(0).click(function(e){
      e.preventDefault();
        $("header .top").removeClass("on");
    });
    $(".slick-dots li .dot").eq(0).click(function(e){
      e.preventDefault();
      $("header .top").addClass("active");
      $(".slick-dots > li > .dot").removeClass("on");
      $("aside .quick").removeClass("on");
    });
    $(".slick-dots li .dot").eq(1).click(function(e){
      e.preventDefault();
      $("header .top").removeClass("active");
      $(".slick-dots > li > .dot").addClass("on");
      $("aside .quick").addClass("on");
    });
    $(".slick-dots li .dot").eq(2).click(function(e){
      e.preventDefault();
        $(".slick-dots > li > .dot").removeClass("on");
        $("aside .quick").removeClass("on");
    });
    $(".slick-dots li .dot").eq(3).click(function(e){
      e.preventDefault();
      $("header .top").removeClass("active");
      $(".slick-dots > li > .dot").addClass("on");
      $("aside .quick").addClass("on");
    });
    $(".slick-dots li .dot").eq(4).click(function(e){
      e.preventDefault();
        $(".slick-dots > li > .dot").removeClass("on");
        $("aside .quick").removeClass("on");
    });
  });
  
  