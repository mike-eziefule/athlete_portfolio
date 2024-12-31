// Back-to-Top Button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll smoothly to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Make Navbar Sticky
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky-navbar');
    } else {
        navbar.classList.remove('sticky-navbar');
    }
});

// Sliding Background for Hero Section
const heroSection = document.querySelector('.hero-section');
let currentImageIndex = 0;
const backgroundImages = [
    'media/vector1.jpg',
    'media/vector2.jpg',
    'media/vector3.jpg',
    'media/vector4.jpg'
];

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
}, 5000);
