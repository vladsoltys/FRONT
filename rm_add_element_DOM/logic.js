const inputName = document.querySelector('#inputName');
const input = document.querySelector('#inputMsg');
const addText = document.querySelector('#addBtn');
const removeText = document.querySelector('#clearBtn');
const newText = document.querySelector('#messages');
const errorMsg = document.querySelector('#errorMessages');

// Функція кнопки, що дадає нове повідомлення з іменем користувача та часом
addText.addEventListener('click', () => {
  const name = inputName.value.trim();
  const message = input.value.trim();

  // Перевірка на заповненість полів

  // Якщо обидва поля заповнені створюємо нове повідомлення
  if (name && message) {

    errorMsg.innerHTML = '';

    const div = document.createElement('div');
    const btn = document.createElement('button');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    div.textContent = `${name.value}: ${message.value} - ${hours}:${minutes}`;
    btn.textContent = "Видалити";

    // Кнопка видалення для кожного повідомлення окремо 
    btn.addEventListener('click', () => {
      div.remove();
    });

    newText.appendChild(div);
    div.appendChild(btn);
    message.value = '';
    name.value = '';
  }
  // Перевірка на заповненість полів, якщо обидва поля пусті
  else if (!name && !message) {
    errorMsg.innerHTML = '';

    const div = document.createElement('div');
    div.textContent = 'Поля не можуть бути пустими'
    errorMsg.appendChild(div);
  }
  // Якщо пусте лише поле імені
  else if (!name) {
    errorMsg.innerHTML = '';

    const div = document.createElement('div');
    div.textContent = 'Поле імені не може бути пустим';
    errorMsg.appendChild(div);
  }
  // Якщо пусте лише поле повідомлення
  else if (!message) {
    errorMsg.innerHTML = '';

    const div = document.createElement('div');
    div.textContent = 'Поле повідомлення не може бути пустим';
    errorMsg.appendChild(div);
  }

});

// Кнопка для очищення всіх повідомлень
removeText.addEventListener('click', () => {
  newText.innerHTML = '';
});

// Додавання кнопки для зміни теми
const themeButton = document.querySelector('#themeBtn');

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  themeButton.textContent = isDark ? 'Світла тема' : 'Темна тема';
});

// Додавання кнопок для очищення полів вводу
const cleanName = document.querySelector('#cleanName');
const cleanComment = document.querySelector('#cleanComment');

cleanName.addEventListener('click', () => {
  inputName.value = '';
});

cleanComment.addEventListener('click', () => {
  input.value = '';
});