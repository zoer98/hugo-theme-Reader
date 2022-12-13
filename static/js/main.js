$(function () {

  $('.menu-btn').click(function () {
    $('header .sticky').css('transform', 'translateX(0)');
    $('.opacity').show();
    $('body').css('overflow', 'hidden');
  })

  $('.opacity').click(function () {
    $('.opacity').hide();
    $('header .sticky').css('transform', 'translateX(-100%)');
    $('body').css('overflow', 'inherit');
  })

  $('.post-content img').addClass('slb')
  $('.slb').simplebox({
    fadeSpeed: 100
  });

  $(".totop").click(function () { $("html,body").animate({ scrollTop: 0 }, 500); });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $('.totop').addClass('is-active')
    } else {
      $('.totop').removeClass('is-active')
    }
  });

  $(document).ready(function () {
    if (window.location.pathname == "/") {
      $("#navi li:eq(0) a").addClass("active");
    }
    a = window.location;
    $("#navi li a").each(function () {
      b = String($(this).attr("href")).replace("/", "");
      if (String(a).indexOf(b) > 0) {
        $(this).closest("li a").addClass("active");
      }
    });
  });

  // Artalk
  $('.atk-main-editor>.atk-bottom').after($('.atk-main-editor>.atk-plug-panel-wrap'))

})