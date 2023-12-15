const modal = document.querySelector('.backdrop');

const modalHeaderBtnOpen = document.querySelector('.modal-header-btn-open');
const modalHeaderBtnClose = document.querySelector('.modal-header-btn-close');

const modalHeroBtnOpen = document.querySelector('.modal-hero-btn-open');
const modalHeroBtnClose = document.querySelector('.modal-hero-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');



modalHeaderBtnOpen.addEventListener('click', toggleModal);
modalHeaderBtnClose.addEventListener('click', toggleModal);

modalHeroBtnOpen.addEventListener('click', toggleModal);
modalHeroBtnClose.addEventListener('click', toggleModal);
