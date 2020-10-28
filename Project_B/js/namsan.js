$(function() {
    $('.s1').vegas({
      slides: [
        { src: "../images/img/main1.jpg",
        video: {
          src: [
              '../video/SeoulTimelapse2.mp4'
          ],
          loop: false,
          mute: true,
        }, 
        delay: 3500},
        { src: "../images/img/fullpage.jpg", delay: 3500 },
        { src: "../images/img/main3.jpg", delay: 3500 },
        { src: "../images/img/main4.jpg", delay: 3500 },
      ],
      overlay: '../lib/vegas/overlays/05.png',
      animation: 'random'
    });
    //모바일에서 베가스는 동영상을 지원하지 않음
    $.vegas.isVideoCompatible = function () {
      var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
      return !devices.test(navigator.userAgent);
    }
});


$(document).ready(function(){
// pc 소개 탭 스타일
$(".vertical-slide.s2 .flex .box .box1, .vertical-slide.s2 .flex .box .box2, .vertical-slide.s2 .flex .box .box3, .vertical-slide.s2 .flex .box .box4").click(function(){
  $(this).addClass('on').siblings().removeClass('on');
  $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
});
// pc 뉴스센터 탭 스타일
  $(".vertical-slide.s3 .box .content ul li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
  });
// pc 오시는길 탭 스타일
  $(".flip-box .flip").click(function(){
    $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
  });
});

// menu on/off 적용
$(document).ready(function(){
  var lastWidth = $(window).width();
  var resizeTimer;
  $(window).resize(function(){
    if($(window).width()!=lastWidth){
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resizeFunction,500);
      function resizeFunction(){
          location.reload();
      }
    lastWidth = $(window).width();
    return false;
    }
  })
  function onClick() {
    document.querySelector('.modalmenu').style.display ='flex';
    document.querySelector('.modalbg').style.display ='flex';
  }   
  function offClick() {
    document.querySelector('.modalmenu').style.display ='none';
    document.querySelector('.modalbg').style.display ='none';
  }
    document.getElementById('modalbtn').addEventListener('click', onClick);
    document.querySelector('.modalclose').addEventListener('click', offClick);
// 2차 메뉴 열기
  if($(window).width() < 641) {
    $(".modalmenu .nav .left .submenu").hide();
    $(".modalmenu .nav .left h4").click(function(){
      $(this).next().slideToggle(100);
      $(".modalmenu .nav .left h4").not(this).next().slideUp(100);
      return false;
    });
  }
  // scroll top 버튼
  $(".logo").click(function(){
    $("html, body").animate({
        scrollTop : 0
    }, 1000);
  });
});
