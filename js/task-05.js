const inputName = document.querySelector('input#name-input');
const spanName = document.querySelector('span#name-output');

inputName.addEventListener('input', (event) => {
    spanName.textContent = event.target.value;
    
    if (spanName.innerHTML == "") {
        spanName.textContent = 'Anonymous';
    }
});