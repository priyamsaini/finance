const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: "30px",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  // centeredSlides: true,

  breakPoints: {
    768: {
      slidesPerView: 1,
      spaceBetween:"20px",
      // centeredSlides:true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Navbar

var menuBtn = document.querySelector(".menu");
var menuItems = document.querySelector("#menu-links");
var menuIcon = document.querySelector("#menu-icon");

menuBtn.addEventListener("click", function () {
  if (menuItems.style.width == "60%") {
    menuItems.style.width = "0";
    menuIcon.classList.remove("fa-x");
    menuIcon.classList.add("fa-bars");
  } else {
    menuItems.style.width = "60%";
    menuIcon.classList.add("fa-x");
    menuIcon.classList.remove("fa-bars");
  }
});
