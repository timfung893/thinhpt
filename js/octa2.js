console.log('ok');

$('document').ready(function () {
    const menuBar = document.querySelector('.menu-bar2');
    const menuNav = document.querySelector('.menu-nav');
    
    // if (!menuBar || !menuNav) return;
    menuBar.addEventListener('click', function() {
        menuNav.classList.add('active');
    });

    document.addEventListener("click", function (a) {
        if (!menuNav.contains(a.target) && !a.target.matches('.menu-bar2')) {
            menuNav.classList.remove('active');
        }
    });

});
    



