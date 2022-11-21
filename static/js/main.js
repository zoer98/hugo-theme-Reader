$('.post-content img').addClass('slb')
$('.slb').simplebox({
  fadeSpeed: 100
});

$(window).off('scroll');

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
