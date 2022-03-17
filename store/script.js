var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  var swipers = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


  let nav = document.getElementById('navjs');
  let menu = document.getElementById('menu');
  let closee = document.getElementById('close');
  let header = document.getElementById('header');

  menu.addEventListener('click' , function(e){
    nav.style.right = "0";
    menu.style.display = 'none';
    closee.style.display = 'block';
    
  })

  closee.addEventListener('click' , function(e){
    nav.style.right = "-40%";
    closee.style.display = 'none';
    menu.style.display = 'block';
    nav.style.position = "absolute";
    header.style.position = "relative";
  })
