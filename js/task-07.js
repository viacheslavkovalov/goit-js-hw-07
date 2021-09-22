const inputFontSizeControlRef = document.querySelector('#font-size-control');
const inputTextRef = document.querySelector('#text');

const onRangeTextSizeControl = () => {
    inputTextRef.style.fontSize = `${inputFontSizeControlRef.value}px`
};

inputFontSizeControlRef.addEventListener('input', onRangeTextSizeControl);