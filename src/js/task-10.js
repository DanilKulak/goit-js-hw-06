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
function createBoxes() {
  const amount = inputElement.value;
  const initialSize = 30;
  const stepSize = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = initialSize + i * stepSize;
    const backgroundColor = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = backgroundColor;

    boxesContainer.appendChild(box);
  }
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
