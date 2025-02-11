$('#fullpage').fullpage({
  responsiveWidth: 1024,
  navigation: false, //기본값 false
  navigationPosition: 'right', //기본값 right
  navigationTooltips: ['Intro', 'About Me', 'Web', 'Graphic', 'Contact'],
  showActiveTooltip: true, //기본값 false

  anchors: ["Intro", "About Me", "Web", "Graphic", "Contact"], // 각 섹션의 고유 ID 설정
  menu: "#menu", // 네비게이션 메뉴 연결

  afterLoad: function (origin, destination, direction, trigger) {
    if (destination == 1) { //2번구역에 도달했을 때
      $("#header,#fp-nav").addClass("active");
    } else {
      $("#header,#fp-nav").removeClass("active");
    }
  },

});

/* 타이핑 */
const text1 = "Digital";
const text2 = "Designer.";
let index1 = 0;
let index2 = 0;
const speed = 100;

function typeFirstLine() {
  if (index1 < text1.length) {
    document.getElementById("line1").innerHTML += text1.charAt(index1);
    index1++;
    setTimeout(typeFirstLine, speed);
  } else {
    setTimeout(typeSecondLine, 500); // 첫 줄이 끝나면 0.5초 후 두 번째 줄 타이핑 시작
  }
}

function typeSecondLine() {
  if (index2 < text2.length) {
    document.getElementById("line2").innerHTML += text2.charAt(index2);
    index2++;
    setTimeout(typeSecondLine, speed);
  }
}

typeFirstLine();

//about_me
$(".about_me dl .btn_close").hide();
$(".about_me dl .btn_open").click(function () {
  $(this).siblings("dd").slideDown();
  $(this).fadeOut();
  $(this).siblings(".btn_close").fadeIn();
});
$(".about_me dl .btn_close").click(function () {
  $(this).siblings("dd").slideUp();
  $(this).fadeOut();
  $(this).siblings(".btn_open").fadeIn();
})