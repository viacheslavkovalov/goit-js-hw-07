const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

const counter  = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};

console.log(decrementButtonRef);
console.log(incrementButtonRef);
console.log(valueRef);

decrementButtonRef.addEventListener('click', function () {
    counter.decrement();
    valueRef.textContent = counter.counterValue;
    // console.log(counter);
});

incrementButtonRef.addEventListener('click', function () {
    counter.increment();
    valueRef.textContent = counter.counterValue;
    // console.log(counter);
});