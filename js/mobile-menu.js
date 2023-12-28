const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const menuCloseTraditionsLink = document.querySelector(
  '.menu-close-link-traditions',
);
const menuCloseChefsLink = document.querySelector('.menu-close-link-chefs');
const menuCloseFormatsLink = document.querySelector('.menu-close-link-formats');
const menuCloseContactsLink = document.querySelector(
  '.menu-close-link-contacts',
);

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuCloseTraditionsLink.addEventListener('click', toggleMenu);
menuCloseChefsLink.addEventListener('click', toggleMenu);
menuCloseFormatsLink.addEventListener('click', toggleMenu);
menuCloseContactsLink.addEventListener('click', toggleMenu);
