const inputRef = document.querySelector('#validation-input');
const maxDataLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', (event) => {
    if ((inputRef.value).length == maxDataLength) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');

    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');

    }
});

