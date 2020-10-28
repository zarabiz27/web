$(document).ready(function(){
    $("aside .btn").click(function(){
        $(this).parent().toggleClass('on');
        $(this).children().toggleClass('on');
    });
    $(".sec1 .news .title span").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    // scroll top 버튼
    $(".scroll").click(function(){
      $("html, body").animate({
          scrollTop : 0
      }, 1000);
    });
    // pc 2차 메뉴 열기
    $("header .allmenu").hide();
    $("header .nav .menu .open").click(function(){
      $("header .allmenu").slideToggle(200);
      $("header .nav .menu .open").toggleClass('on');
      $("header .nav .menu .open").not(this).slideUp(200);
      return false;
    });
    // 모바일 2차 메뉴 열기
    if($(window).width() < 641) {
      $("header .allmenu .box ul li .depth").hide();
      $(".box ul li .title").click(function(){
        $(".box ul li .title").removeClass('on')
        $(this).addClass('on');
        $(this).next().slideToggle(300);
        $(".box ul li .title").not(this).next().slideUp(300);
      });
    }
    $('.sec6 .banner .slick-wrapper').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [ 
        { breakpoint: 1024, 
          settings: { 
            slidesToShow: 5
          } 
        }, 
        { breakpoint: 600, 
          settings: { 
            slidesToShow: 4
          } 
        }, 
        { breakpoint: 480, 
          settings: { 
            slidesToShow: 3
          } 
        } 
      ]
    });
    // 모바일 검색창 열기
    $("header .nav .menu .msearch .box").hide();
    $("header .nav .msearch button.bt").click(function(){
      $("header .nav .menu .msearch .box").slideToggle(200);
      $("header .nav .msearch button .mclose").toggleClass('on');
      // $("header .nav .msearch button .mclose").not(this).slideUp(200);
      return false;
    });
});
