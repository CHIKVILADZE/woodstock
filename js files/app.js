/* ////////////////////// SLIDER //////////////////// */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
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


/* ////////////////////// BUY PRODUCT //////////////////// */
let buyProduct = document.querySelector("#buy-product")
let buyProductPhoto = document.querySelector(".buy-product-photo")

let buyButton = document.querySelectorAll(".buy")
buyButton.forEach((e) => {
    e.addEventListener("click", () => {
        buyProduct.style.display = 'inherit'

        buyProductPhoto.src = `images/${e.id}`
        buyProductPhoto.alt = e.name

        document.querySelector("body").style.overflow = "hidden"
    })
})

let closeIcon = document.querySelector('.fa-circle-xmark')
closeIcon.addEventListener("click", () => {
    buyProduct.style.display = 'none'

    document.querySelector("body").style.overflow = "visible"
})
