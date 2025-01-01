// Scripts for Back-to-Top Button
const backToTopButton = document.getElementById('backToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Random Image Display for Hero Section
const heroImages = [
    'media/vector1.jpg',
    'media/vector2.jpg',
    'media/vector3.jpg',
    'media/vector4.jpg'
];

const heroColumns = document.querySelectorAll('.hero-section .column');
heroColumns.forEach(column => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    column.querySelector('img').src = heroImages[randomIndex];
});

// Add Animation to Hero Section Images
heroColumns.forEach((column, index) => {
    column.style.animation = `slideIn 1s ease-in-out ${index * 0.3}s`;
    column.style.animationFillMode = 'forwards';
});
