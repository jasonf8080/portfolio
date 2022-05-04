const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const navLinks = [...document.querySelectorAll('.nav a')];
const menuBtn = document.querySelector('.menu i');
const menu = document.querySelector('.links');




//EVENT LISTENERS
window.addEventListener('scroll', fixedNav);
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})


//FUNCTIONS
function fixedNav(){
    if(window.pageYOffset > navHeight){
      nav.style.position = 'fixed';
    } else {
        nav.style.position = 'static';
    }
}






