let counterValue = document.querySelector('#value').textContent;
counterValue = Number(counterValue);

const buttonDecrem = document.querySelector('button[data-action="decrement"]');
const buttonIncrem = document.querySelector('button[data-action="increment"]');

buttonDecrem.addEventListener('click',handleButtonDecremClick);
buttonIncrem.addEventListener('click',handleButtonIncremClick);

function handleButtonDecremClick() {
   counterValue -= 1;
         document.querySelector('#value').textContent = `${counterValue}`;
};
function handleButtonIncremClick() {
    counterValue += 1;
         document.querySelector('#value').textContent = `${counterValue}`;
};