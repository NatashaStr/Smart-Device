const textOpen = document.querySelector('.about-us__text-wrapper');
const button = document.querySelector('.about-us__button');

const toggleText = () => {
  if (textOpen.classList.contains('about-us__text-wrapper--is-close')) {
    textOpen.classList.remove('about-us__text-wrapper--is-close');
    textOpen.classList.add('about-us__text-wrapper--is-open');
    button.innerHTML = 'Свернуть';
  } else {
    textOpen.classList.add('about-us__text-wrapper--is-close');
    textOpen.classList.remove('about-us__text-wrapper--is-open');
    button.innerHTML = 'Подробнее';
  }
};

button.addEventListener('click', toggleText);
