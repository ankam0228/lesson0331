
// メインビューのスライド
$(function (){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        fade: true,
        speed: 3000,
    });

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
// 

// スムーズスクロールにする
    $('a[href^="#"]').click(function(){
        const speed = 1000;
        const href = $(this).attr('href');
        let $target;
        if (href == '#') {
            $target = $('html');
        }
        else {
            $target = $(href);
        }
        //  const target = $(href == "#" || href == "" ? 'html' : href); ←確認
        const position = $target.offset().top;
        $('html,body').animate({'scrollTop':position}, speed, 'swing');
        return false;
    });

// スクロールしたときにフェードインさせる
    $(window).scroll(function (){
        const wScroll = $(window).scrollTop();
        const wHeight = $(window).height();
        $('section').each(function() {
            const Position = $(this).offset().top;
            if (wScroll > Position - wHeight + 100){
            $(this).addClass("fadeIn");
            }
        });
    });
}); 




