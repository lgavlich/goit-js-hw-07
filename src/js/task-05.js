const refs = {
    input: document.querySelector('input#name-input'),
    span: document.querySelector('span#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    if (refs.input.value === '') {
        refs.span.textContent = 'незнакомец';
    }
    else {
        refs.span.textContent = event.currentTarget.value;
    }

}