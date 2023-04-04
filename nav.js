const MassagePopup = () => {
    document.querySelector(".massage-dropdown").classList.remove("hidden");
}

const Massageleave = () => {
    document.querySelector(".massage-dropdown").classList.add("hidden");
}

const WellnessPopup = () =>{
    document.querySelector(".wellness-dropdown").classList.remove("hidden");
}

const Wellnessleave = () => {
    document.querySelector(".wellness-dropdown").classList.add("hidden");
}

const SleepPopup = () => {
    document.querySelector(".sleep-dropdown").classList.remove("hidden");
}
const Sleepleave = () => {
    document.querySelector(".sleep-dropdown").classList.add("hidden");
}

let logo = document.querySelector("#logo-image");
  logo.addEventListener("click", () => {
    window.location.href = "index.html"
})
let product = document.querySelector("#new-product-page")
    product.addEventListener("click", () => {
        window.location.href = "./product.html"
    })
    let userslogo = document.querySelector("#user-icon")
        userslogo.addEventListener("click", () => {
        window.location.href = "./signin.html"
    })

    let cartlogo = document.querySelector("#cart-icon")
    cartlogo.addEventListener("click", () => {
        let tokendata = localStorage.getItem("token")
        if (tokendata) {
            window.location.href = "./cart.html"
        }else{
            alert("Please Login First!")
        } 
    })