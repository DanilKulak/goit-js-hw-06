// Отримання посилань на елементи DOM
const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

// Додавання слухача події "input" до повзунка
fontSizeControl.addEventListener("input", function () {
  // Отримання поточного значення повзунка
  const fontSize = fontSizeControl.value;

  // Встановлення розміру тексту в інлайн-стилі span
  textElement.style.fontSize = `${fontSize}px`;
});
