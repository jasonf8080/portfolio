const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const navLinks = [...document.querySelectorAll('.nav a')];
const active = document.createElement('div');
active.classList.add('active-section');
const sections = [...document.querySelectorAll('section')];




//EVENT LISTENERS
window.addEventListener('scroll', fixedNav);



//FUNCTIONS
function fixedNav(){
    if(window.pageYOffset > navHeight){
      nav.style.position = 'fixed';
    } else {
        nav.style.position = 'static';
    }
}



let options = {
    threshold: 0.5
}

console.log(options)
const intersectionObserver = new IntersectionObserver(function(entries, _options) {

  entries.forEach((entry) =>{
     
      if(entry.isIntersecting){
        const sectionID = entry.target.getAttribute('data-id');
        activeLink(sectionID);
      }
  })
});


sections.forEach((section) =>{
    intersectionObserver.observe(section);
})

function activeLink(sectionID){
    navLinks.forEach((link) => {
         active.style.visibility = 'visible';
        const linkID = link.getAttribute('data-id');
        const linkParent = link.parentElement;
        if(sectionID === linkID){
            linkParent.appendChild(active);
        } else if(sectionID === 'header'){
            active.style.visibility = 'hidden';
            console.log('as')
        }
    })
 }




