// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input') as HTMLInputElement;
const secondInput = document.querySelector('#second-input') as HTMLInputElement;
export const screen = document.querySelector('.screen');

function addNumbers(a, b) {
  screen.innerHTML = a + b
}

button?.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value));