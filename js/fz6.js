

$('document').ready(() => {
    console.log('ok');

    // SLIDERS

    const slides = document.querySelectorAll(".slides-item");
    const dots = document.querySelectorAll(".sliders-dot");

    function setActice(i) {
        for(const slide of slides)
        slide.classList.remove('active');
        slides[i].classList.add('active'); 
    
        for( const dot of dots) 
        dot.classList.remove('active');
        dots[i].classList.add('active');
        
    }

    for(let x = 0; x < dots.length; x++) {
        dots[x].addEventListener('click', function(){
            setActice(x);
        });
    }

    // NAV

    const Menu = document.querySelector('.nav-bar');
    const MenuOpen = document.querySelector('.nav-icon');

    MenuOpen.addEventListener('click', function() {
        MenuOpen.classList.toggle('is-active');
        Menu.classList.toggle('is-active');

    })

})