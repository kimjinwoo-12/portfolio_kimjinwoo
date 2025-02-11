$('#fullpage').fullpage({
  responsiveWidth: 1024,
  navigation: false, //기본값 false
  navigationPosition: 'right', //기본값 right
  navigationTooltips: ['Intro', 'About Me', 'Web', 'Graphic', 'Contact'],
  showActiveTooltip: true, //기본값 false

  anchors: ["Intro", "About Me", "Web", "Graphic", "Contact"], // 각 섹션의 고유 ID 설정
  menu: "#menu", // 네비게이션 메뉴 연결

  afterLoad: function (origin, destination, direction, trigger) {
    if (destination == 5) { //2번구역에 도달했을 때
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


//web swiper
document.addEventListener("DOMContentLoaded", function () {
  var containor_web = new Swiper(".containor_web", {
    autoplay: {
      delay: 20000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    navigation: {
      nextEl: '.next-button-web', // 다음 버튼
      prevEl: '.prev-button-web', // 이전 버튼
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 1000,
    on: {
      slideChangeTransitionStart: function () {
        let progress = (this.realIndex + 1) / this.slides.length * 100;
        document.querySelector(".progress-fill-web").style.width = progress + "%";
      }
    }
  });
});

//graphic swiper
document.addEventListener("DOMContentLoaded", function () {
  var containor_graphic = new Swiper(".containor_graphic", {
    navigation: {
      nextEl: '.next-button-graphic', // 다음 버튼
      prevEl: '.prev-button-graphic', // 이전 버튼
    },
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 1000,
    on: {
      slideChangeTransitionStart: function () {
        let progress = (this.realIndex + 1) / this.slides.length * 100;
        document.querySelector(".progress-fill-graphic").style.width = progress + "%";
      }
    }
  });
});

