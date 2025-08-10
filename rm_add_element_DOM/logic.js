const inputName = document.querySelector('#inputName');
const input = document.querySelector('#inputMsg');
const addText = document.querySelector('#addBtn');
const removeText = document.querySelector('#clearBtn');
const newText = document.querySelector('#messages');

// Функція кнопки, що дадає нове повідомлення з іменем користувача та часом
addText.addEventListener('click', () => {
  const div = document.createElement('div');
  const btn = document.createElement('button');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  
  div.textContent = `${inputName.value}: ${input.value} - ${hours}:${minutes}`;
  btn.textContent = "Видалити";

  // Кнопка видалення для кожного повідомлення окремо 
  btn.addEventListener('click', () => {
    div.remove();
  });
  
  newText.appendChild(div);
  div.appendChild(btn);
  input.value = '';
  inputName.value = '';
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