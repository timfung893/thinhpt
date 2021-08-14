/* eslint-disable no-undef */

console.log('script!');

$(document).ready(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Scrolltop

  $('.scroll').click(() => {
    $('html, body').animate(
      {
        scrollTop: $('.aboutme').offset().top + 50,
      },
      1000,
    );
  });

  // scroll to work page

  
  $('#scroll-work').click(() => {
    
    $('html, body').animate({
      scrollTop: $('.mywork').offset().top,
    }, 1200)
    
  });

  // add responsive button

  const menuToggle = document.querySelector('.toggle');
  const bg = document.querySelector('.bg');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    bg.classList.toggle('active');
  });
});
