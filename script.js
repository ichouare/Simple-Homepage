let removeMenu = document.querySelector("body .container nav .nav-list svg")
let Menu = document.querySelector("body .container nav .nav-list")
let Menushow = document.querySelector("body .container nav .Menu")

let MenuItem = document.getElementsByClassName("item-list")



console.log(MenuItem.length)
removeMenu.addEventListener("click", ()=> {
    Menu.style.left = "120%"
})

Menushow.addEventListener("click", ()=> {
    console.log("Menu clicked")
    Menu.style.left = "0%"
})

// document.addEventListener("click", () => {
//     if()
// })