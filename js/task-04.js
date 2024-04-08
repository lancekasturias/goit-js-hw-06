const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueElement = document.getElementById("value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue--;

  counterValueElement.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;

  counterValueElement.textContent = counterValue;
});
