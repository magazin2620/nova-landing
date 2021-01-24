let casesDown = document.getElementById("cases-icon");
casesDown.addEventListener("click", function () {
  let itemsMore = document.getElementById("items-more");
  itemsMore.classList.toggle("show");

  let casesMore = document.getElementById("more-remove");
  casesMore.classList.toggle("remove");

  let iconDown = document.getElementById("icon-down");
  iconDown.classList.toggle("remove");

  let iconUp = document.getElementById("icon-up");
  iconUp.classList.toggle("show");
});

let swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  efffect: "slide",
  speed: 1000,
  autoplay: {
    dilay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".swiper2", {
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
    },
  },
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
