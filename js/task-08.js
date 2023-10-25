// Отримання посилання на форму та її елементи
const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

// Додавання слухача події "submit" до форми
loginForm.addEventListener("submit", function (event) {
  // Запобігаємо перезавантаженню сторінки при відправленні форми
  event.preventDefault();

  // Перевірка, чи всі поля заповнені
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  // Збираємо значення полів у об'єкт
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Виводимо об'єкт в консоль
  console.log(formData);

  // Очищаємо значення полів форми
  loginForm.reset();
});

