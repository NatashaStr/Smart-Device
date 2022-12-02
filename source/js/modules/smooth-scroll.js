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

// Фиксированная шапка при скролле

const header = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
  let scrollDistance = window.scrollY;

  if (scrollDistance > 0) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
});
