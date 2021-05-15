
let minWidth = window.matchMedia("(min-width: 970px)").matches

if(!minWidth){

    const BTN_MENU = document.querySelector("#btn_menu")
    const NAV_MENU = document.querySelector("#nav_menu")
    const BURGER_TOP = document.querySelector(".burger__icon-top")
    const BURGER_MEDDLE = document.querySelector(".burger__icon-meddle")
    const BURGER_BOTTOM = document.querySelector(".burger__icon-bottom")
    
    













    // BURGER_TOP.addEventListener('click',() => BURGER_TOP.classList.toggle('open__icon'))
    // BURGER_MEDDLE.addEventListener('click',() => BURGER_MEDDLE.classList.toggle('open__icon'))
    // BURGER_BOTTOM.addEventListener('click',() => BURGER_BOTTOM.classList.toggle('open__icon'))


    BTN_MENU.addEventListener('click',() => {
        BURGER_TOP.classList.toggle('open__icon')
        BURGER_MEDDLE.classList.toggle('open__icon')
        BURGER_BOTTOM.classList.toggle('open__icon')
        NAV_MENU.classList.toggle('open')
    })
    
    NAV_MENU.addEventListener('click', e => {
        if(e.target.nodeName === 'A') {
            NAV_MENU.classList.toggle('open')
            BURGER_TOP.classList.toggle('open__icon')
            BURGER_MEDDLE.classList.toggle('open__icon')
            BURGER_BOTTOM.classList.toggle('open__icon')
        }
    })

}