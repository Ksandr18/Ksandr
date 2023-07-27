let burger = document.querySelector('.burger');
let navList = document.querySelector('.nav__content-list');
let burgerClick = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle("burger__active")
        if (burger.getAttributeNames("class", "burger__active")) {
            navList.classList.toggle("nav__active")
        }
        else {
            navList.classList.remove("nav__active")
        }
    })
}
burgerClick()

let Active = () => {
    if(burger.getAttributeNames("class", "burger__active")) {
        burger.classList.remove("burger__active"),
        navList.classList.remove("nav__active")
    }
}