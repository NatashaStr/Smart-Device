const makeMaskPhoneNumber = (form) => {
  const tel = form.querySelector('input[type=tel]');

  if (tel) {
    const getInputNumbersValue = (input) => {
      return (input.value.replace(/\D/g, ''));
    };

    const onPhoneInput = (evt) => {
      let input = evt.target;
      let inputNumbersValue = getInputNumbersValue(input);
      let formattedInputValue = '';
      let selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return (input.value = '');
      }

      if (input.value.length !== selectionStart) {
        if (evt.data && /\D/g.test(evt.data)) {
          input.value = inputNumbersValue;
        }
      }

      if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        // Russian number
        let firstSymbols = '+7';

        formattedInputValue = firstSymbols + '';

        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
      } else {
        // Not russian number
        formattedInputValue = '';
      }

      if (formattedInputValue.length !== 17) {
        input.setCustomValidity('Введите полный номер телефона');
      } else {
        input.setCustomValidity('');
      }

      return (input.value = formattedInputValue);
    };

    const onPhoneKeyDown = (evt) => {
      let input = evt.target;
      if (evt.key === 'Backspace' && getInputNumbersValue(input).length === 1) {
        input.value = '';
      }
    };

    const onPhonePaste = (evt) => {
      let pasted = evt.clipboardData || window.Clipboard;
      let input = evt.target;
      let inputNumbersValue = getInputNumbersValue(input);

      if (pasted) {
        let pastedText = pasted.getData('text/plain');
        if (!/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    };

    tel.addEventListener('input', onPhoneInput);
    tel.addEventListener('keydown', onPhoneKeyDown);
    tel.addEventListener('paste', onPhonePaste);
  }

};

export {makeMaskPhoneNumber};
