var scrollToTopBtn = document.querySelector(".scrollTop");
var rootElement = document.documentElement;

$(function () {
  /* Smooth scroll */

  $("[data-goto]").on("click", function (event) {
    event.preventDefault();

    var blockId = $(this).data("goto"),
      blockOffset = $(blockId).offset().top;

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      800
    );
  });

  /* Top Button */

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollTop").addClass("showBtn");
    } else {
      $(".scrollTop").removeClass("showBtn");
    }
  });

  $(".scrollTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});



document.addEventListener("DOMContentLoaded", function (event) {
  //Hamburger
  let menuOpen = document.getElementById("menu");
  let menuIcon = document.getElementById("nav-icon");
  let body = document.querySelector("body");

  if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
      menuIcon.classList.toggle("open");
      body.classList.toggle("scroll-hidden");

      if (this.classList.contains("open")) {
        menuOpen.classList.add("is-active");
      } else {
        menuOpen.classList.remove("is-active");
      }
    });
  }

  //Scroll to anchor
  const menuLinks = document.querySelectorAll("a[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLink);
    });

    function onMenuLink(e) {
      const menuLink = e.target;
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoSection = document.querySelector(menuLink.dataset.goto);
        const gotoSectionValue =
          gotoSection.getBoundingClientRect().top +
          pageYOffset -
          document.getElementById("top").offsetHeight;

        if (menuOpen.classList.contains("is-active")) {
          menuIcon.classList.remove("open");
          body.classList.remove("scroll-hidden");
          menuOpen.classList.remove("is-active");
        }

        window.scrollTo({
          duration: 1500,
          top: gotoSectionValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});


// margin-bottom to main for fixed footer

const footer = document.querySelector("#footer");
const main_block = document.querySelector("main");


window.addEventListener("DOMContentLoaded", () => {
  let height = footer.offsetHeight;
  main_block.style.marginBottom = height + "px";
});
window.addEventListener("resize", () => {
  let height = footer.offsetHeight;
  main_block.style.marginBottom = height + "px";
});


var scene = document.getElementById("scene");
var scene22 = document.getElementById("scene22");
var scene2 = document.getElementById("scene3");
var scene2 = document.getElementById("scene4");
var scene2 = document.getElementById("scene5");
var scene2 = document.getElementById("scene6");
var scene2 = document.getElementById("scene7");

var parallaxInstance = new Parallax(scene);
var parallaxInstance = new Parallax(scene22);
var parallaxInstance = new Parallax(scene3);
var parallaxInstance = new Parallax(scene4);
var parallaxInstance = new Parallax(scene5);
var parallaxInstance = new Parallax(scene6);
var parallaxInstance = new Parallax(scene7);

/*    Swiper     */

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 6.4,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 5,
  speed: 12000,
  loopFillGroupWithBlank: true,
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
      stopOnLastSlide: false,
  },
  breakpoints: {
      1679: {
        slidesPerView: 5,
        speed: 12000,
      },

      1279: {
          slidesPerView: 3,
          speed: 12000,
      },

      767: {
          slidesPerView: 3,
          speed: 12000,
      },
      600: {
          slidesPerView: 2.5,
          centeredSlides: true,
          spaceBetween: 30,
      },
      479: {
          slidesPerView: 1.5,
          centeredSlides: true,
          spaceBetween: 15,
          loop: false,
          scrollbar: {
              el: '.swiper-scrollbar',
              hide: false,
          },
      },
  }
});

//Slick slider default

$("#plugins_slider").slick({
  variableWidth: true,
  infinite: true,
  arrows: false,
  dots: false,
  centerMode: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
});