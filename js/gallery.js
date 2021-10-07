$("document").ready(() => {
  console.log("ok");

  // Nav

  const Menu = document.querySelector(".nav-bar");
  const MenuOpen = document.querySelector(".nav-icon");

  MenuOpen.addEventListener("click", function () {
    MenuOpen.classList.toggle("is-active");
    Menu.classList.toggle("is-active");
  });

  // Icon & nav change on scroll

  const navImg = document.getElementById("nav-img");
  const navBar = document.getElementById("nav-bar");

  window.onscroll = function () {
    scroll();
  };
  function scroll() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navImg.style.filter = "invert(0)";
      navImg.style.maxWidth = "100px";
      navImg.src = "images/FZ6/revs.png";
      navBar.style.backgroundColor = "rgba(0,0,0, 1)";
      navBar.style.padding = "10px 100px";

      if (window.innerWidth < 1280) {
        navBar.style.padding = "30px 40px";
      } else if (window.innerWidth < 540) {
        navBar.style.padding = "20px 40px";
      }
    } else {
      navImg.src = "images/FZ6/ymhicon.png";
      navBar.style.backgroundColor = "rgba(0,0,0, 0.5)";
      navBar.style.padding = "20px 100px";

      if (window.innerWidth < 1280) {
        navBar.style.padding = "20px 40px";
      } else if (window.innerWidth < 540) {
        navBar.style.padding = "10px 40px";
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

  //  Change slide with dots

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

  // change slides with buttons

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

  // lightbox

  const images = document.querySelectorAll(".slider-main img");
  images.forEach((item) => item.addEventListener("click", zoomImage));

  function zoomImage(event) {
    console.log(event.target);

    const image = event.target.getAttribute("src");

    console.log("source =", image);

    const imageToZoom = `<div class="lightbox">
      <div class="lightbox-content">
      <ion-icon id="lightbox-prev" name="chevron-back-outline"></ion-icon>
        <img class="lightbox-image" src="${image}" alt=""> 
        <ion-icon id="lightbox-next" name="chevron-forward-outline"></ion-icon>
      </div>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", imageToZoom);
  }

  // close lightbox

  let index2 = 0;
  document.body.addEventListener("click", function (e) {
    const lightImage = document.querySelector(".lightbox-image");
    let lightImageSrc = "";

    if (e.target.matches(".lightbox")) {
      // remove lightbox
      e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches("#lightbox-next")) {
      // handle next button
      lightImageSrc = lightImage.getAttribute("src");

      index2 = [...images].findIndex(
        (item) => item.getAttribute("src") === lightImageSrc
      );

      index2 = index2 + 1;

      console.log("index =", index2);

      if (index2 > images.length - 1) {
        index2 = 0;
      }

      const newimageSrc = [...images][index2].getAttribute("src");
      lightImage.setAttribute("src", newimageSrc);
    } else if (e.target.matches("#lightbox-prev")) {
      // handle prev button

      lightImageSrc = lightImage.getAttribute("src");

      index2 = [...images].findIndex(
        (item) => item.getAttribute("src") === lightImageSrc
      );

      index2 = index2 - 1;

      console.log("index =", index2);

      if (index2 < 0) {
        index2 = images.length - 1;
      }

      const newimageSrc = [...images][index2].getAttribute("src");
      lightImage.setAttribute("src", newimageSrc);
    }
  });
});
