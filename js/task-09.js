function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const elementRef = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const spanNew = document.querySelector('.color');

function btnClick(event) {
  const colorElement = getRandomHexColor();

  elementRef.style.backgroundColor = colorElement;
  spanNew.textContent = colorElement;
};

btn.addEventListener('click', btnClick);
