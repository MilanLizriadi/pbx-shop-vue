import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).mount("#app");

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
  }
});

let swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
