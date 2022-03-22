// classList - show/get all classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener('click', () => {
    // console.log(links.classList)
    // console.log(links.classList.contains('random')) - false
    // console.log(links.classList.contains('links'))  - true

    // this is one way to add and remove classes
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links')
    // }

    // toggle, basically cuts out add/remove
    links.classList.toggle('show-links')
})