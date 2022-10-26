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