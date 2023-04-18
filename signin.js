let form = document.querySelector("#form");
const singup = () => {
    event.preventDefault
    let payload = {
        firstname: document.querySelector("#firstName").value,
        lastname: document.querySelector("#lastName").value,
        email: document.querySelector("#email").value,
        pass: document.querySelector("#pass").value,
    }
    console.log()
    let usremail = localStorage.setItem("userdata", payload.email)


    // console.log(payload)
    fetch("https://creepy-yak-frock.cyclic.app/users/register", {

        method: "POST",
        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            console.log(res)
            alert(res.msg)
            localStorage.setItem("username", payload.firstname)
        }
        )
        .catch(err => console.log(err.message))

}

const login = () => {
    let logindata = {
        email: document.querySelector("#email-login").value,
        pass: document.querySelector("#pass-login").value,
    }
    console.log(logindata)
    if (logindata.email === "admin@gmail.com" && logindata.pass === "admin") {
        alert("Redirecting to admin page")
        window.location.href = "admin.html"
    } else {
        fetch("https://creepy-yak-frock.cyclic.app/users/login", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify(logindata)
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.token) {
                    localStorage.setItem("token", res.token)
                    alert("login succesful")
                    window.location.href = ("../index.html")
                } else {
                    alert("Wrong credaintail")
                }
            })
            .catch(err => console.log(err))
    }
}

// let product = document.querySelector("#new-product-page")
// product.addEventListener("click", () => {
//     window.location.href = "./product.html"
// })
// let userslogo = document.querySelector("#user-icon")
// userslogo.addEventListener("click", () => {
//     window.location.href = "signin.html"
// })
// let cartlogo = document.querySelector("#cart-icon")
// cartlogo.addEventListener("click", () => {
//     let tokendata = localStorage.getItem("token")
//     if (tokendata) {
//         window.location.href = "./cart.html"
//     } else {
//         alert("Please Login First!")
//     }

// })
