// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
