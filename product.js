let bag = [];
const url = `https://creepy-yak-frock.cyclic.app/data/get`;
// All  JS code for Home Page goes here
fetch(url).then((res) => res.json())
    .then((data) => {
        bag = data
        console.log(bag)
        displayfun(data)
    });
// let cartItem=JSON.parse(localStorage.getItem("Favourites"))||[];
let main = document.querySelector("#restaurant-container");
function displayfun(data) {

    // data.forEach(el => {
    //   let div=document.createElement("div");

    //   let img=document.createElement("img");
    //   img.setAttribute("src",el.image);
    //   img.classList.add("prodocutimg");
    //   // img.setAttribute("lable",hello)

    //   let name=document.createElement("h2");
    //   name.textContent=el.name;

    //   let price=document.createElement("p");
    //   price.textContent=el.price;

    //   btn=document.createElement("button");
    //   btn.textContent="Favourites"

    data.forEach(el => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.image);
        img.classList.add("prodocutimg");

        let name = document.createElement("h2");
        name.textContent = el.name;
        name.classList.add("name");

        let price = document.createElement("p");
        price.textContent = `$ ${el.price}`;
        price.classList.add("price");

        btn = document.createElement("button");
        btn.textContent = "Add to Wishlist"
        btn.classList.add("add");
        btn.addEventListener("click", function () {
            let cartItem = JSON.parse(localStorage.getItem("Favourites"));
            alert("Added to cart")
            if (cartItem == null) {
                cartItem = [];
            }
            cartItem.push({ ...el })
            console.log(cartItem)
            localStorage.setItem("Favourites", JSON.stringify(cartItem))
            document.querySelector("#alert").textContent = "Restaurant Added To Favourites"
            // }

        })

        div.setAttribute("data-category", el.category);

        div.append(img, name, price, btn);
        document.querySelector("#restaurant-container").append(div)
    });
}
let filter = document.querySelector("#filter");
filter.addEventListener("change", function (event) {
    let category = event.target.value;
    let items = document.querySelectorAll("#restaurant-container > div");

    // Show only items that match the selected filter
    items.forEach(item => {
        if (category === "" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    displayfun(fil);
    console.log(fil)
});