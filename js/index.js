/* eslint-disable no-undef */

console.log("script!");

$(document).ready(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Scrolltop

  $(".scroll").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".aboutme").offset().top + 50,
      },
      1000
    );
  });

  // back to top btn
  window.onscroll = function () {
    onScroll();
  };

  function onScroll() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      window.setTimeout(() => {
        $(".bttop").css("display", "block");
      }, 300);
    } else {
      window.setTimeout(() => {
        $(".bttop").css("display", "none");
      }, 300);
    }
  }

  $(".bttop").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#bg-header").offset().top,
      },
      1000
    );
  });

  // scroll to work page

  $("#scroll-work").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".mywork").offset().top,
      },
      1200
    );
  });

  // add responsive button

  const menuToggle = document.querySelector(".toggle");
  const bg = document.querySelector(".bg");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    bg.classList.toggle("active");
  });
});
