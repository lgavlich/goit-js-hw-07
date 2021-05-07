const targetBtnDec = document.querySelector('button[data-action="decrement"]');
const targetBtnInc = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('span');

targetBtnInc.addEventListener('click', increment);

targetBtnDec.addEventListener('click', decrement);

//targetBtnInc.addEventListener('click', increment);

function increment(event) {
    
    counterValue.textContent = Number(counterValue.textContent) + 1;
       

}
function decrement(event) {

    counterValue.textContent = Number(counterValue.textContent) - 1;

}
