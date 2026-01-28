const navbarToggle = document.querySelector('.hamburger');
const primaryNav = document.querySelector('.desktop-nav');

navbarToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll')
})