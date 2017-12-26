$(function () {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100 ){
            $('.fixed-top').addClass('scroll-main-menu');
        } else {
            $('.fixed-top').removeClass('scroll-main-menu');
        }
    });
})