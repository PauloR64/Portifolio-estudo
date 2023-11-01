let header = document.getElementById('header')
        window.addEventListener('scroll',()=>{
            if (window.scrollY >= 200) {
                header.style.background= '#191919'
            }else {
                header.style.background='transparent'
            }
});

function handlerWidth () {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;

    if (getWidth < 1001) {
        slideShow = 2;
    } 
    
    if (getWidth < 700) {
        slideShow = 1;
    }

    return slideShow;
}

window.addEventListener('resize',()=>{
    swiper.params.slidesPerView = handlerWidth();
    swiper.update();
})

let swiper = new Swiper(".mySwiper", {
      slidesPerView: handlerWidth (),
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
     },
});

let hamburguer = document.querySelector(".Hamburguer")
let nav = document.querySelector(".navBar")

hamburguer.addEventListener('click', ()=> {
    nav.classList.toggle("active")
})


let links = document.querySelectorAll('.navBar-links li a')

links.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle("active")
    })
})
