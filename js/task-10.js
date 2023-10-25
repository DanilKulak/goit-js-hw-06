// Отримання посилань на елементи DOM
const inputElement = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Додавання слухача події "click" до кнопки "Create"
createButton.addEventListener("click", createBoxes);

// Додавання слухача події "click" до кнопки "Destroy"
destroyButton.addEventListener("click", destroyBoxes);

// Функція для створення колекції елементів
function createBoxes(amount) {
  amount = Number(inputElement.value);
  if (!amount) {
    alert("Будь-ласка введіть число.");
    return;
  }
  let initialSize = 30;
  let box = "";

  for (let i = 0; i < amount; i++) {
    box += `<div style="background-color: ${getRandomHexColor()}; width: ${initialSize}px; height: ${initialSize}px;"></div>`
    initialSize += 10;
  } boxesContainer.innerHTML = box;
} 

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
