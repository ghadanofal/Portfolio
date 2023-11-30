const navbar = document.querySelector(".navbar")
const navLinks = document.querySelectorAll('.nav-link')

const headerContentSpan = document.querySelector('.header-content .content span')

const loader = document.querySelector('.loading')
const about = document.querySelector('.about')
const scrollUp = document.querySelector('.scroll-up')

//navbar
window.addEventListener('scroll', function(){
    if(window.scrollY >= headerContentSpan.offsetTop )
    navbar.style.cssText = `
    background-color : #fff `;
    else
    {
        navbar.style.cssText = `
    background-color : transparent `;
    }
})

//navlink
for(let i=0; i<navLinks.length ; i++){
    navLinks[i].addEventListener('click', function(e){
        e.preventDefault();
        for(let j=0; j<navLinks.length ; j++){
            navLinks[j].cladssList.remove('active')
        }
        navLinks[i].classList.add('active')
        let currentID = this.getAttribute('href')
        let targetSection = document.querySelector(currentID)
        window.scroll({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        })
    })
}



//loading
window.addEventListener('load', function(){
    setTimeout(function(){
        loader.classList.add('opacity-0', 'invisible')
        document.body.classList.add('overflow-auto')
    },2000)
})

//scroll-up
window.addEventListener('scroll', function(){
    if(window.scrollY > about.offsetTop ){
        scrollUp.classList.remove('opacity-0', 'invisible')
    }
    else{
        scrollUp.classList.add('opacity-0', 'invisible')
        
    }
})

scrollUp.addEventListener('click', function(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

