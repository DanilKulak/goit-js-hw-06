// Отримання посилань на елементи DOM
const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Додавання слухача події "click" до кнопки
colorButton.addEventListener("click", function () {
  // Генерування випадкового кольору
  const randomColor = getRandomHexColor();

  // Зміна кольору фону елемента <body>
  document.body.style.backgroundColor = randomColor;

  // Відображення значення кольору в <span>
  colorSpan.textContent = randomColor;
});
