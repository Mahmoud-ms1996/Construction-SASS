let active = document.querySelector('.header .icons');
let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

// menu-toggle 
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

// search-btn
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

// login-btn
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// info-btn
document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};
document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
};

// scroll removing
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

// home swiper-slider
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor:true,
    autoplay: {
        delay: 2500
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// reviews swiper-slider
var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
      },
});

// blog swiper-slider
var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
      },
});

lightGallery(document.querySelector('.projects .box-container'));