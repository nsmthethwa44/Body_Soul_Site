// declare variables 
let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
let goTop = document.querySelector(".goTop");
let menuImg = document.querySelector(".menuImg");
let closeImgBox = document.querySelector(".closeImgBox");

Array.from(navLink).forEach((item) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});

// if menu onclick view navbar 
menuImg.onclick = () =>{
  navbar.classList.toggle("active");
}

closeImgBox.onclick = () =>{
  navbar.classList.remove("active");
}

window.onscroll = () =>{
  navbar.classList.remove("active");

  if (window.scrollY > 150) {
    header.classList.add("active");
    goTop.classList.add("active");
  } else { 
    header.classList.remove("active");
    goTop.classList.remove("active");
  };
}

// hero swiper slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
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

//   blog slide 
var swiper = new Swiper(".mySlide", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
},
breakpoints: {

200: {
  slidesPerView: 1,
},

567: {
  slidesPerView: 2,
},
 992: {
  slidesPerView: 3,
},

},
  });
