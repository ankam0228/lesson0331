// メインビューのスライド
$(function (){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        fade: true,
        speed: 3000,
    });
});  

// カーソルがあたると文字が透明になる
$('#myprofile').hover(
    function () {
        $('#myprofile').css('opacity', '0.5');
    },
    function () {
        $('#myprofile').css('opacity', '1');
    }
);

$('#ahover2').hover(
    function () {
        $('#ahover2').css('opacity', '0.5');
    },
    function () {
        $('#ahover2').css('opacity', '1');
    }
);

$('#ahover3').hover(
    function () {
        $('#ahover3').css('opacity', '0.5');
    },
    function () {
        $('#ahover3').css('opacity', '1');
    }
);

// topに戻るボタンの表示
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.backToTop').fadeIn();
    }else {
        $('.backToTop').fadeOut();
    }
});
// ボタンのクリック、スクロール
$('.backToTop').on('click', function() {
    $('body,html').animate({
        scrollTop:0
    },1000);
    return false;
});

// スムーススクロールにする

    $('a[href^="#"]').click(function () {
        offset().top
  });

