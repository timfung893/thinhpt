$("document").ready(() => {
  console.log("ok");

  $(".specs-item").hide();

  $(".specs-wrap_btn--1").click(function () {
    $(".engine").slideToggle();
    // $('i', this).toggleClass('fas fa-plus').toggleClass('fas fa-minus');
  });

  $(".specs-wrap_btn--2").click(function () {
    $(".chas").slideToggle();
  });

  $(".specs-wrap_btn--3").click(function () {
    $(".dimen").slideToggle();
  });

  const btnSelect = document.querySelectorAll(".btn");

  $(btnSelect).each(function () {
    $(btnSelect).click(function () {
      if ($("ion-icon", this).attr("name") == "add-outline") {
        $("ion-icon", this).attr("name", "remove-outline");
      } else {
        $("ion-icon", this).attr("name", "add-outline");
      }
    });
  });

  $(".specs-wrap_btn--1").trigger("click");

  // NAV

  const Menu = document.querySelector(".nav-bar");
  const MenuOpen = document.querySelector(".nav-icon");

  MenuOpen.addEventListener("click", function () {
    MenuOpen.classList.toggle("is-active");
    Menu.classList.toggle("is-active");
  });
});

window.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    scroll();
  };
  function scroll() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("nav-img").style.filter = "invert(0)";
      document.getElementById("nav-img").style.maxWidth = "100px";
      document.getElementById("nav-img").src = "images/fz6/revs.png";
      document.getElementById("nav-bar").style.backgroundColor =
        "rgba(255,255,255, 1)";
      document.getElementById("nav-bar").style.padding = "10px 100px";

      if (window.innerWidth < 1280) {
        document.getElementById("nav-bar").style.padding = "30px 70px";
      } else if (window.innerWidth < 540) {
        document.getElementById("nav-bar").style.padding = "20px 40px";
      }
    } else {
      document.getElementById("nav-img").style.filter = "invert(1)";
      document.getElementById("nav-img").src = "images/fz6/ymhicon.png";
      document.getElementById("nav-bar").style.backgroundColor =
        "rgba(255,255,255, 0.5)";
      document.getElementById("nav-bar").style.padding = "20px 100px";

      if (window.innerWidth < 1280) {
        document.getElementById("nav-bar").style.padding = "20px 70px";
      } else if (window.innerWidth < 540) {
        document.getElementById("nav-bar").style.padding = "10px 40px";
      }
    }
  }
});
