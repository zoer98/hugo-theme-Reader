$('.post-content img').addClass('slb')
$('.slb').simplebox({
  fadeSpeed: 400
});

$(window).off('scroll');
(function () {
  let progress_bar = $('.progress-bar');
  let win_h = $(window).height();
  let body_h = $('body').height();
  let sHeight = body_h - win_h;

  function updateProgress(p) {
    progress_bar.css('width', p * 100 + '%');
  }
  $(window).on('scroll', function () {
    window.requestAnimationFrame(function () {
      let perc = Math.max(0, Math.min(1, $(window).scrollTop() / sHeight));
      updateProgress(perc);
    });
  });
}());

$('#toTop').on('click', function () {
  $("html, body").animate({ scrollTop: 0 }, { duration: 500, easing: "swing" });
  return false;
});
$(window).bind('scroll', function () {
  var len = $(this).scrollTop();
  if (len >= 100) {
    $('#toTop').fadeIn('1000');
  } else {
    $('#toTop').fadeOut('1000');
  }
});
