$(document).ready(function(){
    // scroll top 버튼
    $(".scroll").click(function(){
        $("html, body").animate({
            scrollTop : 0
        }, 1000);
    });
});

// 모바일 제이쿼리
$(document).ready(function(){
    $(".mnav").click(function(){
        $(".menu").addClass("on");
    });
    $(".mclose").click(function(){
        $(".menu").removeClass("on");
    });
    $("ul.menu > li[data-id^='con']").click(function(){ 
        $(this).addClass('on').siblings().removeClass('on');
        $("ul.menu > li.all").removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    $("ul.menu > li[data-id^='con']").click(function(){ 
        $("ul.menu > li > i").removeClass('on');
        $(this).find(".arrow").addClass('on')
    });
});