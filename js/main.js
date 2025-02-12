$('#fullpage').fullpage({
  responsiveWidth: 1024,
  autoScrolling: true,
  fitToSection: false, /* 자동 높이 조절 비활성화 */
  scrollOverflow: true, /* 내부 스크롤 활성화 */
  scrollingSpeed: 700,
  navigation: false,
  navigationPosition: 'right',
  navigationTooltips: ['Intro', 'About', 'Web', 'Graphic', 'Contact'],
  showActiveTooltip: true,
  anchors: ["Intro", "About", "Web", "Graphic", "Contact"],
  menu: "#menu",

  afterLoad: function (origin, destination, direction) {
    console.log("현재 섹션:", destination.index, "방향:", direction);
  },

  afterResize: function () {
    fullpage_api.reBuild();
  }
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


/* //web swiper
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
}); */

document.addEventListener("DOMContentLoaded", function () {
  function initializeSwiper(containerClass, nextButton, prevButton, progressClass, autoplay = false) {
    return new Swiper(containerClass, {
      autoplay: autoplay ? {
        delay: 20000,
        disableOnInteraction: false,
      } : false,
      speed: 1000,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
        clickable: true, // 버튼 클릭 여부
      },
      effect: "fade",
      fadeEffect: { crossFade: true },
      loop: true,
      on: {
        slideChange: function () {
          let slides = this.slides; // 모든 슬라이드
          let realSlides = slides.length - slides.filter(slide => slide.classList.contains("swiper-slide-duplicate")).length; // 가상 슬라이드 제외
          let progress = ((this.realIndex + 1) / realSlides) * 100;

          // 진행 바 요소 찾기
          let progressBar = document.querySelector(progressClass);
          if (progressBar) {
            progressBar.style.width = progress + "%";
          }
        }
      }
    });
  }

  var containor_web = initializeSwiper(".containor_web", ".next-button-web", ".prev-button-web", ".progress-fill-web", true);
  var containor_graphic = initializeSwiper(".containor_graphic", ".next-button-graphic", ".prev-button-graphic", ".progress-fill-graphic");
});



