const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navItemEl = ingredients.map((elem) => {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('item');
  return (navItemEl);
});

const ingredList = document.querySelector('ul#ingredients');

for (let index = 0; index < navItemEl.length; index++) {
  navItemEl[index].textContent = ingredients[index];
};

ingredList.append(...navItemEl);
console.log(navItemEl);




