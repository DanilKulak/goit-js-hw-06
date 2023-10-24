
// Отримання посилань на елементи DOM
const valueElement = document.getElementById("value");
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

// лічильник
let counterValue = 0;

// Функція для оновлення значення лічильника на сторінці
function updateCounter() {
  valueElement.textContent = counterValue;
}

decrementButton.addEventListener("click", function () {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", function () {
  counterValue += 1;
  updateCounter();
});

updateCounter();
