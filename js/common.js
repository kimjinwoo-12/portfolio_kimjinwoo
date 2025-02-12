$(".mgnb_wrap").hide();

$(".btn_ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});

$(".menu_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});

$(".mgnb li a").click(function () {
  $(".mgnb_wrap").fadeOut();
});