const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const navEl = document.querySelector('#ingredients');

const listItem = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
}
const itemLi = listItem(ingredients);
navEl.append(...itemLi);
console.log(itemLi)
