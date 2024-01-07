let removeMenu = document.querySelector("body .container nav .nav-list svg")
let Menu = document.querySelector("body .container nav .nav-list")
let btn_ligth = Menu.querySelector("body .container nav .nav-list .Dark-mode span:nth-child(2)")
let btn_dark = Menu.querySelector("body .container nav .nav-list .Dark-mode span:nth-child(3)")
let btn_toggle = Menu.querySelector("body .container nav .nav-list .Dark-mode .bg-icon")
let Menushow = document.querySelector("body .container nav .Menu")
let MenuItems = document.getElementsByClassName("item-list")
let MainImg = document.querySelector("body .container main img")


let btnDark = document.querySelector("body .container nav .nav-list-Desktop  .Dark-mode span:nth-child(3)")
let btnLight = document.querySelector("body .container nav .nav-list-Desktop  .Dark-mode span:nth-child(2)")
let btnToggle = document.querySelector("body .container nav .nav-list-Desktop  .Dark-mode .bg-icon")

console.log("here", btnDark)
const [item1, item2, item3, item4 ] = MenuItems


const pathSvg =  () => {
    const paths = document.querySelectorAll("svg path");
    for(let i = 0; i < paths.length; i++) 
        paths[i].style.stroke = "#000"
}
const pathSvgwhite =  (name) => {
    const paths = name.querySelectorAll("svg path");
    for(let i = 0; i < paths.length; i++) 
        paths[i].style.stroke = "#FFF"
}

// console.log(btn_ligth)
// console.log(btn_dark)
removeMenu.addEventListener("click", ()=> {
    Menu.style.transform= "translateX(100%)";
})

Menushow.addEventListener("click", ()=> {
    // console.log("Menu clicked")
    Menu.style.transform= "translateX(0%)";
})



console.log(MenuItems.length)
function removeClass(){
    for(let i = 0; i < MenuItems.length; i++)  {
        // console.log(MenuItems[i])
        MenuItems[i].classList.remove("active")
    }

}

// removeClass()
item1.addEventListener("click", () => {
    removeClass()
    item1.classList.add("active"); 
    Menu.style.transform= "translateX(100%)";
})

item2.addEventListener("click", () => {
    removeClass()
    item2.classList.add("active"); 
    Menu.style.transform= "translateX(100%)";
})

item3.addEventListener("click", () => {
    removeClass()
    item3.classList.add("active"); 
    Menu.style.transform= "translateX(100%)";
})

item4.addEventListener("click", () => {
    removeClass()
    item4.classList.add("active"); 
    Menu.style.transform= "translateX(100%)";
})


btn_ligth.addEventListener("click", () => {
    // console.log("here ligth");
    btn_toggle.style.transform = "translateX(8px)";
    btn_ligth.querySelector("svg path").style.fill ="#000";
    pathSvgwhite(btnDark)
    document.documentElement.classList.remove("dark")
    MainImg.classList.remove("dark");
}, true)

btn_dark.addEventListener("click", () => {
    // console.log("here dark");
    btn_toggle.style.transform = "translateX(48px)";
    btn_ligth.querySelector("svg path").style.fill ="#FFF";
    pathSvg();
    document.documentElement.setAttribute("class", "dark");
    MainImg.classList.add("dark");
    // btn_dark.querySelectorAll("svg path").style.stroke ="#000";
}, true)

btnLight.addEventListener("click", () => {
    console.log("here ligth");
    btnToggle.style.transform = "translateX(8px)";
    btnDark.querySelector("svg path").style.fill ="#000";
    pathSvgwhite(btnDark)
    document.documentElement.classList.remove("dark")
    MainImg.classList.remove("dark");
}, true)

btnDark.addEventListener("click", () => {
    console.log("here dark");
    btnToggle.style.transform = "translateX(48px)";
    btnLight.querySelector("svg path").style.fill ="#FFF";
    // btnDark.querySelector("svg path").style.fill ="#FFF";
    pathSvg();
    document.documentElement.setAttribute("class", "dark");
    MainImg.classList.add("dark");
    // btn_dark.querySelectorAll("svg path").style.stroke ="#000";
}, true)



