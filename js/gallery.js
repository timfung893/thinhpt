$("document").ready(() => {
  console.log("ok");

  // NAV

  const Menu = document.querySelector(".nav-bar");
  const MenuOpen = document.querySelector(".nav-icon");

  MenuOpen.addEventListener("click", function () {
    MenuOpen.classList.toggle("is-active");
    Menu.classList.toggle("is-active");
  });

  // Icon & nav change on scroll

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
        "rgba(0,0,0, 1)";
      document.getElementById("nav-bar").style.padding = "10px 100px";

      if (window.innerWidth < 1280) {
        document.getElementById("nav-bar").style.padding = "30px 70px";
      } else if (window.innerWidth < 540) {
        document.getElementById("nav-bar").style.padding = "20px 40px";
      }
    } else {
      document.getElementById("nav-img").src = "images/fz6/ymhicon.png";
      document.getElementById("nav-bar").style.backgroundColor =
        "rgb(0,0,0, 0.5)";
      document.getElementById("nav-bar").style.padding = "20px 100px";

      if (window.innerWidth < 1280) {
        document.getElementById("nav-bar").style.padding = "20px 70px";
      } else if (window.innerWidth < 540) {
        document.getElementById("nav-bar").style.padding = "10px 40px";
      }
    }
  }

  // slider

  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const next = document.querySelector(".slider-next");
  const prev = document.querySelector(".slider-prev");
  const dots = document.querySelectorAll(".slider-dot");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  const slide = document.querySelector(".slider-item");

  let positionX = 0;
  let index = 0;

  console.log("sliderItemWidth", sliderItemWidth);
  console.log("slidesLength", slidesLength);

  //  dots

  [...dots].forEach((dot) =>
    dot.addEventListener("click", function (i) {
      const slideIndex = i.target.dataset.index;
      index = slideIndex;

      positionX = -1 * slideIndex * sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;

      [...dots].forEach((item) => item.classList.remove("active"));
      i.target.classList.add("active");

      console.log("index", slideIndex);
    })
  );

  next.addEventListener("click", function () {
    changeSlide(1);
  });

  prev.addEventListener("click", function () {
    changeSlide(-1);
  });

  function changeSlide(direction) {
    if (direction == 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }

      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      console.log("changeSlide", positionX);
      console.log("currentindex", index);

      index++;
    } else if (direction == -1) {
      // index = index - 1
      if (index <= 0) {
        index = 0;
        return;
      }

      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      console.log("changeSlide", positionX);
      console.log("currentIndex", index);

      index--;
    }

    [...dots].forEach((item) => item.classList.remove("active"));
    dots[index].classList.add("active");
  }
});
