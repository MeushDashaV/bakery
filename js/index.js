const modal = document.querySelector('.backdrop');
const open = document.querySelector('.modal-btn-open');
const close = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

open.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
