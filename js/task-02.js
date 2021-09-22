const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients')

const ingredientsRef = ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;

    return ingredientRef
});


ingredientsListRef.append(...ingredientsRef);
console.log(ingredientsListRef)

