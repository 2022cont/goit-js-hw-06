const navLinkEl = document.querySelectorAll('.item');
const lengthNavLinkEl = navLinkEl.length;
console.log('Number of categories:', lengthNavLinkEl);


for (let index = 0; index < lengthNavLinkEl; index++) {
    const title = navLinkEl[index].querySelector('h2');
    console.log('Category:', title.textContent);

    const listItem = navLinkEl[index].querySelectorAll('li');
    console.log('Elements:', listItem.length);
}

