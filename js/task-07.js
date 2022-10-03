const inputName = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

inputName.addEventListener('input', (event) => {
      spanText.style.fontSize = parseInt(event.target.value)+'px';
});