const element = document.querySelector('.highlight-on-scroll');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    const threshold = 100;

    if (scrollPosition > threshold) {
        element.classList.add('highlighted');
    } else {
        element.classList.remove('highlighted');
    }
});