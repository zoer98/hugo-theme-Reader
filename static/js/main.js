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

var nav = document.getElementById("navi");
var links = nav.getElementsByTagName("li");
var lilen = nav.getElementsByTagName("a");
var currenturl = document.location.href;
var last = 0;
for (var i = 0; i < links.length; i++) {
  var linkurl = lilen[i].getAttribute("href");
  if (currenturl.indexOf(linkurl) != -1) {
    last = i;
  }
}
lilen[last].className = "active";

// Artalk
$('.atk-main-editor>.atk-bottom').after($('.atk-main-editor>.atk-plug-panel-wrap'))