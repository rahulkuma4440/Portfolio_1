// ================== toggle icon navbar ============
let menuIcon = document.querySelector('.menu-icon > i');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('hometag');
}

//===================toggling the navbar ============

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        console.log(offset);
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('hometag');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('hometag');
            });
        };
    });
    // ======================remove toggle icon and navbar when click navbar link (scroll) ========================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('hometag');
};
// console.log(window.scrollY);

// =======================scroll reveal =================

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.image, .services-container, .portfolio-box, .contact > form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content > h1, .about-img > img', { origin: 'left' });
ScrollReveal().reveal('.home-content > p, .about-content', { origin: 'right' });

// ===================== typed.js ===================

const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Footballer', 'IITian'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


