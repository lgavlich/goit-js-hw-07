const navEl = document.querySelector('#categories');
const childrenNav = navEl.children;
const array = Array.from(childrenNav);
//console.log(array);
//console.log(ChildrenNav);
//console.log(navEl.children.length);

function info(element) {
    const category = element.firstElementChild.textContent;
    const childrenLength = element.lastElementChild.children.length;
    //console.dir(element.lastElementChild.children.length);
return `Категория: ${category}\n Количество элементов: ${childrenLength}\n`
    
}
const abc = array.map(el => info(el))

console.log(...abc);