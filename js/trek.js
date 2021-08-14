/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-cond-assign */
console.log('ready!');

$(document).ready(() => {
  $('.owl-carousel').show();
  // Scrolltop
  $('.scroll').click(() => {
    console.log('gay');
    $('html, body').animate(
      {
        scrollTop: $('.men').offset().top,
      },
      1000,
    );
  });

  // Checkbox

  $('.square').each(function () {
    $(this).prop('checked', true);
  });
  $('#gender1').click(function () {
    if ($(this).is(':checked')) {
      $('.men').slideDown();
    } else {
      $('.men').slideUp();
    }
  });
  $('#gender2').click(function () {
    if ($(this).is(':checked')) {
      $('.women').slideDown();
    } else {
      $('.women').slideUp();
    }
  });

  $('.see-all').click(() => {
    $('.square').prop('checked', true);
    $('.men').slideDown();
    $('.women').slideDown();
  });

  // carousel

  $('.owl-carousel').owlCarousel({
    loop: false,
    nav: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  const owl1 = $('#owl-1');
  owl1.owlCarousel();
  $('.owl-forward').click(() => {
    owl1.trigger('next.owl.carousel');
  });
  $('.owl-backward').click(() => {
    owl1.trigger('prev.owl.carousel');
  });

  const owl2 = $('#owl-2');
  owl2.owlCarousel();
  $('#owl-forward').click(() => {
    owl2.trigger('next.owl.carousel');
  });
  $('#owl-backward').click(() => {
    owl2.trigger('prev.owl.carousel');
  });

  // Page index counter
  // > 992
  // if((window).innerWidth <= 992) {
  //   var totalItems = $('.men > .owl-stage > .owl-item').length;
  //   var currentIndex = $('.men > .owl-stage > .active').index() + 2;
  //   var currentIndex_active;
  //   var down_index;
  //   $('.carousel-men-page').html('' + currentIndex + '/' + totalItems + '');

  //   $('.owl-carousel').on('next.owl.carousel', function() {
  //     currentIndex_active = $('.men > .owl-stage > .active').index() + 2;
  //     if (currentIndex_active <= totalItems)
  //     {
  //       if (down_index = $('.men > .owl-stage > .active').index() + 4);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //       }
  //       if (down_index = $('.men > .owl-stage > .active').index() + 3);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //       }
  //       if (down_index = $('.men > .owl-stage > .active').index() + 2);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //       }
  //       $('.carousel-men-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //     }
  //   });
  //   $('.owl-carousel').on('prev.owl.carousel', function() {
  //     down_index = down_index - 1;
  //     if (down_index >= 2) {
  //       $('.carousel-men-page').html('' + down_index + '/' + totalItems + '');
  //     }
  //   });

  //   // WOMEN

  //   var totalItems = $('.women > .owl-stage > .owl-item').length;
  //   var currentIndex = $('.women > .owl-stage > .active').index() + 2;
  //   var currentIndex_active;
  //   var down_page;
  //   $('.carousel-page').html('' + currentIndex + '/' + totalItems + '');

  //   $('.owl-carousel').on('next.owl.carousel', function() {
  //     currentIndex_active = $('.women > .owl-stage > .active').index() + 2;
  //     if (currentIndex_active <= 5)
  //     {
  //       if (down_page = $('.women > .owl-stage > .active').index() + 4);
  //       {
  //         $('.carousel-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //       }
  //       if (down_page = $('.women > .owl-stage > .active').index() + 3);
  //       {
  //         $('.carousel-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //       }
  //       if (down_page = $('.women > .owl-stage > .active').index() + 2);
  //       {
  //         $('.carousel-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //       }
  //       $('.carousel-page').html(''+ currentIndex_active +'/'+ totalItems +'');
  //     }
  //   });
  //   $('.owl-carousel').on('prev.owl.carousel', function() {
  //     down_page = down_page - 1;
  //     if (down_page >= 2) {
  //       $('.carousel-page').html('' + down_page + '/' + totalItems + '');
  //     }
  //   });

  // } else if((window).innerWidth < 419) {
  //   var totalItems3 = $('.men > .owl-stage > .owl-item').length;
  //   var currentIndex3 = $('.men > .owl-stage > .active').index() + 1;
  //   var currentIndex_active3;
  //   var down_index3;
  //   $('.carousel-men-page').html('' + currentIndex3 + '/' + totalItems3 + '');

  //   $('.owl-carousel').on('next.owl.carousel', function() {
  //     currentIndex_active3 = $('.men > .owl-stage > .active').index() + 1;
  //     if (currentIndex_active3 <= 5)
  //     {
  //       if (down_index3 = $('.men > .owl-stage > .active').index() + 4);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active3 +'/'+ totalItems3 +'');
  //       }
  //       if (down_index3 = $('.men > .owl-stage > .active').index() + 3);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active3 +'/'+ totalItems3 +'');
  //       }
  //       if (down_index3 = $('.men > .owl-stage > .active').index() + 2);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active3 +'/'+ totalItems3 +'');
  //       }
  //       if (down_index3 = $('.men > .owl-stage > .active').index() + 1);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active3 +'/'+ totalItems3 +'');
  //       }
  //       $('.carousel-men-page').html(''+ currentIndex_active3 +'/'+ totalItems3 +'');
  //     }
  //   });
  //   $('.owl-carousel').on('prev.owl.carousel', function() {
  //     down_index3 = down_index3 - 1;
  //     if (down_index3 >= 1) {
  //       $('.carousel-men-page').html('' + down_index3 + '/' + totalItems3 + '');
  //     }
  //   });

  //   // WOMEN

  //   var totalItems4 = $('.women > .owl-stage > .owl-item').length;
  //   var currentIndex4 = $('.women > .owl-stage > .active').index() + 1;
  //   var currentIndex_active4;
  //   var down_page4;
  //   $('.carousel-page').html('' + currentIndex4 + '/' + totalItems4 + '');

  //   $('.owl-carousel').on('next.owl.carousel', function() {
  //     currentIndex_active4 = $('.women > .owl-stage > .active').index() + 1;
  //     if (currentIndex_active4 <= 5)
  //     {
  //      if (down_page4 = $('.women > .owl-stage > .active').index() + 4);
  //      {
  //        $('.carousel-page').html(''+ currentIndex_active4 +'/'+ totalItems4 +'');
  //      }
  //      if (down_page4 = $('.women > .owl-stage > .active').index() + 3);
  //      {
  //        $('.carousel-page').html(''+ currentIndex_active4 +'/'+ totalItems4 +'');
  //      }
  //      if (down_page4 = $('.women > .owl-stage > .active').index() + 2);
  //      {
  //        $('.carousel-page').html(''+ currentIndex_active4 +'/'+ totalItems4 +'');
  //      }
  //      if (down_page4 = $('.women > .owl-stage > .active').index() + 1);
  //      {
  //        $('.carousel-page').html(''+ currentIndex_active4 +'/'+ totalItems4 +'');
  //      }
  //      $('.carousel-page').html(''+ currentIndex_active4 +'/'+ totalItems4 +'');
  //     }
  //   });
  //   $('.owl-carousel').on('prev.owl.carousel', function() {
  //     down_page4 = down_page4 - 1;
  //     if (down_page4 >= 1) {
  //       $('.carousel-page').html('' + down_page4 + '/' + totalItems4 + '');
  //     }
  //   });
  // } else {
  //   var totalItems1 = $('.men > .owl-stage > .owl-item').length;
  //   var currentIndex1 = $('.men > .owl-stage > .active').index() + 3;
  //   var currentIndex_active1;
  //   var down_index1;
  //   $('.carousel-men-page').html('' + currentIndex1 + '/' + totalItems1 + '');

  //   $('.owl-carousel').on('next.owl.carousel', function() {
  //     currentIndex_active1 = $('.men > .owl-stage > .active').index() + 3;
  //     if (currentIndex_active1 <= 5)
  //     {
  //       if (down_index1 = $('.men > .owl-stage > .active').index() + 4);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active1 +'/'+ totalItems1 +'');
  //       }
  //       if (down_index1 = $('.men > .owl-stage > .active').index() + 3);
  //       {
  //         $('.carousel-men-page').html(''+ currentIndex_active1 +'/'+ totalItems1 +'');
  //       }
  //       $('.carousel-men-page').html(''+ currentIndex_active1 +'/'+ totalItems1 +'');
  //     }
  //   });
  //   $('.owl-carousel').on('prev.owl.carousel', function() {
  //     down_index1 = down_index1 -1;
  //     if (down_index1 >= 3) {
  //       $('.carousel-men-page').html('' + down_index1 + '/' + totalItems1 + '');
  //     }
  //   });

  //   //  WOMEN
  //   var totalItems2 = $('.women > .owl-stage > .owl-item').length;
  //   var currentIndex2 = $('.women > .owl-stage > .active').index() + 3;
  //   var currentIndex_active2;
  //   var down_page2;
  //   $('.carousel-page').html('' + currentIndex2 + '/' + totalItems2 + '');

  //   $('.owl-carousel').on('next.owl.carousel', function() {
  //     currentIndex_active2 = $('.women > .owl-stage > .active').index() + 3;
  //     if (currentIndex_active2 <= 5)
  //     {
  //       if (down_page2 = $('.women > .owl-stage > .active').index() + 4);
  //       {
  //         $('.carousel-page').html(''+ currentIndex_active2 +'/'+ totalItems2 +'');
  //       }
  //       if (down_page2 = $('.women > .owl-stage > .active').index() + 3);
  //       {
  //         $('.carousel-page').html(''+ currentIndex_active2 +'/'+ totalItems2 +'');
  //       }
  //       $('.carousel-page').html(''+ currentIndex_active2 +'/'+ totalItems2 +'');
  //     }
  //   });
  //   $('.owl-carousel').on('prev.owl.carousel', function() {
  //     down_page2 = down_page2 - 1;
  //     if (down_page2 >= 3) {
  //       $('.carousel-page').html('' + down_page2 + '/' + totalItems2 + '');
  //     }
  //   });
  // }

  if ($(window).innerWidth() > 992) {
    const totalItems1 = $('.men > .owl-stage > .owl-item').length;
    const currentIndex1 = $('.men > .owl-stage > .active').index() + 3;
    let currentIndex_active1;
    let down_index1;
    $('.carousel-men-page').html(`${currentIndex1}/${totalItems1}`);

    $('.owl-carousel').on('next.owl.carousel', () => {
      currentIndex_active1 = $('.men > .owl-stage > .active').index() + 3;
      if (currentIndex_active1 <= 5) {
        if ((down_index1 = $('.men > .owl-stage > .active').index() + 4));
        {
          $('.carousel-men-page').html(
            `${currentIndex_active1}/${totalItems1}`,
          );
        }
        if ((down_index1 = $('.men > .owl-stage > .active').index() + 3));
        {
          $('.carousel-men-page').html(
            `${currentIndex_active1}/${totalItems1}`,
          );
        }
        $('.carousel-men-page').html(`${currentIndex_active1}/${totalItems1}`);
      }
    });
    $('.owl-carousel').on('prev.owl.carousel', () => {
      down_index1 -= 1;
      if (down_index1 >= 3) {
        $('.carousel-men-page').html(`${down_index1}/${totalItems1}`);
      }
    });

    //  WOMEN
    const totalItems2 = $('.women > .owl-stage > .owl-item').length;
    const currentIndex2 = $('.women > .owl-stage > .active').index() + 3;
    let currentIndex_active2;
    let down_page2;
    $('.carousel-page').html(`${currentIndex2}/${totalItems2}`);

    $('.owl-carousel').on('next.owl.carousel', () => {
      currentIndex_active2 = $('.women > .owl-stage > .active').index() + 3;
      if (currentIndex_active2 <= 5) {
        if ((down_page2 = $('.women > .owl-stage > .active').index() + 4));
        {
          $('.carousel-page').html(`${currentIndex_active2}/${totalItems2}`);
        }
        if ((down_page2 = $('.women > .owl-stage > .active').index() + 3));
        {
          $('.carousel-page').html(`${currentIndex_active2}/${totalItems2}`);
        }
        $('.carousel-page').html(`${currentIndex_active2}/${totalItems2}`);
      }
    });
    $('.owl-carousel').on('prev.owl.carousel', () => {
      down_page2 -= 1;
      if (down_page2 >= 3) {
        $('.carousel-page').html(`${down_page2}/${totalItems2}`);
      }
    });
  }

  // < 992

  if ($(window).innerWidth() < 992) {
    var totalItems = $('.men > .owl-stage > .owl-item').length;
    var currentIndex = $('.men > .owl-stage > .active').index() + 2;
    var currentIndex_active;
    let down_index;
    $('.carousel-men-page').html(`${currentIndex}/${totalItems}`);

    $('.owl-carousel').on('next.owl.carousel', () => {
      currentIndex_active = $('.men > .owl-stage > .active').index() + 2;
      if (currentIndex_active <= totalItems) {
        if ((down_index = $('.men > .owl-stage > .active').index() + 4));
        {
          $('.carousel-men-page').html(`${currentIndex_active}/${totalItems}`);
        }
        if ((down_index = $('.men > .owl-stage > .active').index() + 3));
        {
          $('.carousel-men-page').html(`${currentIndex_active}/${totalItems}`);
        }
        if ((down_index = $('.men > .owl-stage > .active').index() + 2));
        {
          $('.carousel-men-page').html(`${currentIndex_active}/${totalItems}`);
        }
        $('.carousel-men-page').html(`${currentIndex_active}/${totalItems}`);
      }
    });
    $('.owl-carousel').on('prev.owl.carousel', () => {
      down_index -= 1;
      if (down_index >= 2) {
        $('.carousel-men-page').html(`${down_index}/${totalItems}`);
      }
    });

    // WOMEN

    var totalItems = $('.women > .owl-stage > .owl-item').length;
    var currentIndex = $('.women > .owl-stage > .active').index() + 2;
    var currentIndex_active;
    let down_page;
    $('.carousel-page').html(`${currentIndex}/${totalItems}`);

    $('.owl-carousel').on('next.owl.carousel', () => {
      currentIndex_active = $('.women > .owl-stage > .active').index() + 2;
      if (currentIndex_active <= 5) {
        if ((down_page = $('.women > .owl-stage > .active').index() + 4));
        {
          $('.carousel-page').html(`${currentIndex_active}/${totalItems}`);
        }
        if ((down_page = $('.women > .owl-stage > .active').index() + 3));
        {
          $('.carousel-page').html(`${currentIndex_active}/${totalItems}`);
        }
        if ((down_page = $('.women > .owl-stage > .active').index() + 2));
        {
          $('.carousel-page').html(`${currentIndex_active}/${totalItems}`);
        }
        $('.carousel-page').html(`${currentIndex_active}/${totalItems}`);
      }
    });
    $('.owl-carousel').on('prev.owl.carousel', () => {
      down_page -= 1;
      if (down_page >= 2) {
        $('.carousel-page').html(`${down_page}/${totalItems}`);
      }
    });
  }

  // < mobile

  if ($('.men > .owl-stage > .active').length === 1) {
    const totalItems3 = $('.men > .owl-stage > .owl-item').length;
    const currentIndex3 = $('.men > .owl-stage > .active').length;
    let currentIndex_active3;
    let down_index3;
    $('.carousel-men-page').html(`${currentIndex3}/${totalItems3}`);

    $('.owl-carousel').on('next.owl.carousel', () => {
      currentIndex_active3 = $('.men > .owl-stage > .active').index() + 1;
      if (currentIndex_active3 <= 5) {
        if ((down_index3 = $('.men > .owl-stage > .active').index() + 4));
        {
          $('.carousel-men-page').html(
            `${currentIndex_active3}/${totalItems3}`,
          );
        }
        if ((down_index3 = $('.men > .owl-stage > .active').index() + 3));
        {
          $('.carousel-men-page').html(
            `${currentIndex_active3}/${totalItems3}`,
          );
        }
        if ((down_index3 = $('.men > .owl-stage > .active').index() + 2));
        {
          $('.carousel-men-page').html(
            `${currentIndex_active3}/${totalItems3}`,
          );
        }
        if ((down_index3 = $('.men > .owl-stage > .active').index() + 1));
        {
          $('.carousel-men-page').html(
            `${currentIndex_active3}/${totalItems3}`,
          );
        }
        $('.carousel-men-page').html(`${currentIndex_active3}/${totalItems3}`);
      }
    });
    $('.owl-carousel').on('prev.owl.carousel', () => {
      down_index3 -= 1;
      if (down_index3 >= 1) {
        $('.carousel-men-page').html(`${down_index3}/${totalItems3}`);
      }
    });

    // WOMEN

    const totalItems4 = $('.women > .owl-stage > .owl-item').length;
    const currentIndex4 = $('.women > .owl-stage > .active').length;
    let currentIndex_active4;
    let down_page4;
    $('.carousel-page').html(`${currentIndex4}/${totalItems4}`);

    $('.owl-carousel').on('next.owl.carousel', () => {
      currentIndex_active4 = $('.women > .owl-stage > .active').index() + 1;
      if (currentIndex_active4 <= 5) {
        if ((down_page4 = $('.women > .owl-stage > .active').index() + 4));
        {
          $('.carousel-page').html(`${currentIndex_active4}/${totalItems4}`);
        }
        if ((down_page4 = $('.women > .owl-stage > .active').index() + 3));
        {
          $('.carousel-page').html(`${currentIndex_active4}/${totalItems4}`);
        }
        if ((down_page4 = $('.women > .owl-stage > .active').index() + 2));
        {
          $('.carousel-page').html(`${currentIndex_active4}/${totalItems4}`);
        }
        if ((down_page4 = $('.women > .owl-stage > .active').index() + 1));
        {
          $('.carousel-page').html(`${currentIndex_active4}/${totalItems4}`);
        }
        $('.carousel-page').html(`${currentIndex_active4}/${totalItems4}`);
      }
    });
    $('.owl-carousel').on('prev.owl.carousel', () => {
      down_page4 -= 1;
      if (down_page4 >= 1) {
        $('.carousel-page').html(`${down_page4}/${totalItems4}`);
      }
    });
  }

  // $('.owl-carousel').on('next.owl.carousel', function() {
  //   $('#hide').show();
  // });

  // $('owl-forward').click(function(){
  //   currentIndex = $('.men > .owl-stage > owl-item').index() + 2;
  //   if (totalItems >= currentIndex)
  //   {
  //     down_index = $('.men > .owl-stage > owl-item').index() + 2;
  //     $('.carousel-men-page').html('' + currentIndex + '/' + totalItems + '');
  //   }
  // });
  // $('.owl-backward').click(function(){
  //   down_index = down_index - 1;
  //   if (down_index >= 1)
  //   {
  //     $('.carousel-men-page').html('' + down_index + '/' + totalItems + '');
  //   }
  // })

  // AddClass

  /* if($(window).innerWidth() < 420) {
    $('.category-item').addClass('is-transitioned');
    $(".owl-forward").click(()=> {
      owl1.trigger('next.owl.carousel');
    });
    $("#owl-backward").click(()=> {
      owl2.trigger('next.owl.carousel');
    });
  } else {
      $('.category-item').removeClass('is-transitioned');
    }  */
});
