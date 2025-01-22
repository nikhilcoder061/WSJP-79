var menuBar = document.querySelector('.menuBar');

var mobileMenu = document.querySelector('.mobileMenu');

menuBar.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});

