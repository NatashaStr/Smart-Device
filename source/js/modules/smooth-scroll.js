import Inputmask from 'inputmask';

const button = document.querySelector('.promo__button');
const form = document.querySelector('.form');
const topOffset = document.querySelector('.header').offsetHeight;
const elementPosition = form.getBoundingClientRect().top;
const offsetPosition = elementPosition - topOffset;

const scrollTo = () => {
  if (elementPosition) {
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

button.addEventListener('click', scrollTo);

const inputs = document.querySelectorAll('input[type="tel"]');
const maskInput = new Inputmask('+7 (999) 999-99-99');
maskInput.mask(inputs);
