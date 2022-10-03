const inputAmount = document.querySelector('input');
const btnCreat = document.querySelector('button[data-create]');
const btnRemove = document.querySelector('button[data-destroy]');
const divCreat = document.querySelector('div#boxes');

const divItemEl = [];


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


inputAmount.addEventListener('focus', (event) => btnCreat.addEventListener('click', fnBtnCreat));

function fnBtnCreat() {

  createBoxes(inputAmount.value);
  divCreat.append(...divItemEl);

}


function createBoxes(amount) {

  for (let index = 0; index < amount; index++) {
    const colorElement = getRandomHexColor();

    divItemEl[index] = document.createElement('div');
    divItemEl[index].style.backgroundColor = colorElement;
    divItemEl[index].style.width = 30 + 10 * index + 'px';
    divItemEl[index].style.height = 30 + 10 * index + 'px';

    console.log(divItemEl[index]);

  };

}

btnRemove.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  for (let index = 0; index < divItemEl.length; index++) {

    const $div = document.querySelector('div#boxes>div');
    $div.parentElement.removeChild($div);
  }

}


