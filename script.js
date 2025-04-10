const immagini = [
    'home1.jpg',
    'home2.jpg',
    'home3.jpg',
    'home4.jpg',
    'home5.jpg',
    'home6.jpg',
    'home7.jpg',
    'home8.jpg',
    'home9.jpg',
    'home10.jpg',
    'home11.jpg',
    'home12.jpg',
    'home13.jpg',
];

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Preload images
function precaricaImmagini() {
    immagini.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Set background images for slides
slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url(${immagini[index % immagini.length]})`;
});

// Show first slide
slides[0].classList.add('active');

// Initialize
precaricaImmagini();

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Add mouse wheel navigation
document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        nextSlide();
    }
});