/* eslint-disable no-undef */
/* eslint-disable no-cond-assign */
/* eslint-disable no-empty */
$(document).ready(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
  const menuToggle = document.querySelector('.toggle');
  const bg = document.querySelector('.nav');
  const navres = document.getElementById('navres');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    bg.classList.toggle('active');
    navres.classList.toggle('nav-res-flex');
  });
});
