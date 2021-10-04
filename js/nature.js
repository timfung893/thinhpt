
console.log('script loads!');
$(document).ready(function() {
    const menuToggle = document.querySelector('.navbar-toggler-icon');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
    })
});
