const validationInputRef = document.querySelector('#validation-input');


function onInputChange(event) {
    if (Number(validationInputRef.dataset.length) === event.currentTarget.value.length) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
    }
    else {
        validationInputRef.classList.remove('valid');
        validationInputRef.classList.add('invalid')
    }
};

validationInputRef.addEventListener('blur', onInputChange)


