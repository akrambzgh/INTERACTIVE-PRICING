let rangeInput = document.querySelector(".range-input")
let priceText = document.querySelector(".price")

priceText.innerHTML = `<h1>$16.00 </h1> <span> / mouth</span>`

rangeInput.oninput = () => {
    priceText.innerHTML = `<h1>$${rangeInput.value}.00 </h1> <span> / mouth</span>`
}