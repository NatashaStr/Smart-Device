import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initAccordeon} from './modules/accordeon.js';
import './modules/load-text.js';
import './modules/smooth-scroll.js';
import './utils/validate.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('input[data-js="phone-number"]')) {
    const inputs = document.querySelectorAll('input[data-js="phone-number"]');

    const prefixNumber = (str) => {
      if (str === '7') {
        return '7 (';
      }
      if (str === '8') {
        return '8 (';
      }
      if (str === '9') {
        return '7 (9';
      }
      return '7 (';
    };

    inputs.forEach((input) => input.addEventListener('input', () => {
      const value = input.value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (input.value.includes('+8') || input.value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }
      input.value = result;
    }));
  }

  if (document.querySelector('form')) {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        if (validatePhoneNumber(form.querySelector('input[data-js="phone-number"]'))) {
          return;
        }
        e.preventDefault();
        showError(form.querySelector('input[data-js="phone-number"]'));
      });
    });
  }


  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initAccordeon();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

  });

  const validatePhoneNumber = (phoneInput) => phoneInput.value.length >= 18;

  const showError = (element) => {
    element.classList.add('error');
    setTimeout(() => {
      element.classList.remove('error');
    }, 2000);
  };
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
