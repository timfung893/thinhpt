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

  // send email
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('service_51t5vys', 'template_gwx08a8', this)
      .then(function() {
        console.log('SUCCESS!');
        
      }, function(error) {
        console.log('Failed to send email', error);
      });
  })

});
