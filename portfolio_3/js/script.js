$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  // クリック後「disply:block;」でメニューが表示される
  // #burgerが非表示になる
  $('#burger').on('click', function(){
    $('#nav-open').css('display','block');
    $('#burger').css('display','none');
  });
  // クリック後「disply:none;」でメニューが削除される
  // #burgerが表示される
  $('#close').on('click', function(){
    $('#nav-open').css('display','none');
    $('#burger').css('display','block');
  });
});



 
