const section = document.querySelectorAll('.accordion-section--opened');

const initAccordeon = () => {
  section.forEach((el) => el.classList.remove('accordion-section--opened'));

  document.querySelectorAll('.accordion-section').forEach((el) => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('.accordion-section').forEach((element) => {
        element.classList.remove('accordion-section--opened');
      });

      e.target.closest('.accordion-section').classList.add('accordion-section--opened');
    });
  });
};

export {initAccordeon};
