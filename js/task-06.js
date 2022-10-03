const inputRef = document.querySelector('#validation-input');
const maxDataLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', (event) => {
    if ((inputRef.value).length == maxDataLength) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
});

