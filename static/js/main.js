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


$(".utool .item.setting span").click(function () {
  $(".utool .item.setting .box").toggle();
});

const ulid = document.getElementById('ulid');
const FontFamily = ['OPPOSans', 'LXGWWenKaiLite']
const lis = ulid.getElementsByTagName("li");
const bodyff = JSON.parse(localStorage.getItem("font-family"));

if (bodyff != null) {
  $('body').css('font-family', bodyff[1]);
  $(lis[(bodyff[0])]).addClass('active');
  if (lis[(bodyff[0])] == false) {
    $('.utool .item.setting .box ul li:nth-child(1)').addClass('active')
  }
}

for (var i = 0, len = lis.length; i < len; i++) {
  (function (i) {
    lis[i].onclick = function () {
      $(lis).removeClass('active')
      $(lis[i]).addClass('active');
      $('body').css('font-family', FontFamily[i]);

      // 存入
      const arr = [i, FontFamily[i]];
      localStorage.setItem("font-family", JSON.stringify(arr));
    }
  })(i);
}

// 字体大小
const bodyfz = JSON.parse(localStorage.getItem("font-size"));
if (bodyfz != null) {
  $('.markdown-body').css('font-size', bodyfz)
}

var fontsize = parseInt($('.markdown-body').css('font-size').replace('px', ''))
$('#ulfz li:nth-child(1)').click(function () {
  if (fontsize > 12) {
    fontsize = fontsize - 1;
    $('.markdown-body').css('font-size', fontsize)
  }
  localStorage.setItem("font-size", JSON.stringify(fontsize));
})
$('#ulfz li:nth-child(2)').click(function () {
  if (fontsize < 24) {
    fontsize = fontsize + 1;
    $('.markdown-body').css('font-size', fontsize)
  }
  localStorage.setItem("font-size", JSON.stringify(fontsize));
})

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