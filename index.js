$('#slick1').slick({
    rows: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
});
    $('#featureSlide').slick({
    rows: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3
});


$('.best-sellers-slider').slick({
    rows: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3
});
//   let product = document.querySelector("#new-product-page")
//     product.addEventListener("click", () => {
//         window.location.href = "product.html"
//     })
//     let userslogo = document.querySelector("#user-icon")
//     userslogo.addEventListener("click", () => {
//         window.location.href = "signin.html"
//     })
//     let cartlogo = document.querySelector("#cart-icon")
//     cartlogo.addEventListener("click", () => {
//         let tokendata = localStorage.getItem("token")
//         if (tokendata) {
//             window.location.href = "cart.html"
//         }else{
//             window.location.href = "signin.html"
//         }
//     })