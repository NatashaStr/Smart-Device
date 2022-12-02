// import {makeMaskPhoneNumber} from '../modules/mask.js';

// const initForm = (myForm) => {
//   if (myForm) {
//     makeMaskPhoneNumber(myForm);
//   }
// };

// export {initForm};

// Валидация чекбокса

const form = document.querySelector('.form__user');
const formModal = document.querySelector('.modal__form');
const checkbox = form.querySelector('#agree');
const checkboxModal = formModal.querySelector('#agreement');
const error = document.querySelector('[data-error]');
const errorModal = document.querySelector('[data-error-modal]');

const invalid = () => {
  error.textContent = (checkbox.checked) ? '' : 'Чтобы продолжить, установите этот флажок';
};

checkbox.addEventListener('change', invalid);

form.addEventListener('onsubmit', (evt) => {
  evt.preventDefault();
  invalid();
});

const invalidModal = () => {
  errorModal.textContent = (checkboxModal.checked) ? '' : 'Чтобы продолжить, установите этот флажок';
};

checkboxModal.addEventListener('change', invalidModal);

formModal.addEventListener('onsubmit', (evt) => {
  evt.preventDefault();
  invalidModal();
});
