// Отримання посилання на інпут та його довжину з атрибуту data-length
const inputElement = document.getElementById("validation-input");
const expectedLength = parseInt(inputElement.getAttribute("data-length"));

// Додавання слухача події "blur" до інпуту
inputElement.addEventListener("blur", function () {
  // Отримання введеного тексту та його довжини
  const inputValue = inputElement.value;
  const inputLength = inputValue.length;

  // Перевірка, чи введена довжина співпадає з очікуваною
  if (inputLength === expectedLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
