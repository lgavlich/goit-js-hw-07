const input = document.querySelector('input#validation-input');
const inputDataLength = document.querySelector('[data-length]')

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invaalid')
        input.classList.remove('valid')
    }
        
}