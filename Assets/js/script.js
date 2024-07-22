document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
});

// script.js

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
let slideInterval;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';  
    });
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
}

function moveSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = totalSlides }
    showSlides();
    startSlideShow();
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Troca de imagem a cada 3 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    startSlideShow();
});
