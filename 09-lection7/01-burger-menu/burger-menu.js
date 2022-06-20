const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

window.onload = () => {
    document.body.classList.remove("preload");
  };

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            menu.setAttribute('data-open', '');
            menuOpen.classList.add('burger-menu__button_hidden')
            menuClose.classList.remove('burger-menu__button_hidden');
        }
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            menu.removeAttribute('data-open');
            menuOpen.classList.remove('burger-menu__button_hidden');
            menuClose.classList.add('burger-menu__button_hidden');
        }
    });
}
