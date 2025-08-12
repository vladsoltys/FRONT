const inputName = document.querySelector('#inputName');
const input = document.querySelector('#inputMsg');
const addText = document.querySelector('#addBtn');
const removeText = document.querySelector('#clearBtn');
const newText = document.querySelector('#messages');
const errorMsg = document.querySelector('#errorMessages');

// Лічильник для унікальних ID повідомлень
let counter = 0;

// Функція кнопки, що дадає нове повідомлення з іменем користувача та часом
addText.addEventListener('click', () => {

  // Отримання значень з полів вводу
  // Використовуємо trim() для видалення пробілів на початку
  // та в кінці рядка, щоб уникнути порожніх повідомлень
  const name = inputName.value.trim();
  const message = input.value.trim();

  // Перевірка на заповненість полів

  // Якщо обидва поля заповнені створюємо нове повідомлення
  if (name && message) {
    
    errorMsg.innerHTML = ''; // Очищення попередніх повідомлень про помилки

    const div = document.createElement('div'); // Створюємо новий div для повідомлення

    counter++;
    div.setAttribute('data-id', counter); // Додаємо атрибут data-id для кожного повідомлення

    // Отримуємо поточний час для відображення
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    
    // Заповнюємо div вмістом
    div.innerHTML = `${name}: ${message} - ${hours}:${minutes} <button>Видалити</button>`;
    
    // Додаємо нове повідомлення до контейнера
    newText.appendChild(div);

    // Очищення полів вводу після додавання повідомлення
    input.value = '';
    inputName.value = '';
  }
  // Перевірка на заповненість полів, якщо обидва поля пусті
  else if (!name && !message) {
    errorMsg.innerHTML = '';

    // Створюємо новий div для повідомлення про помилку
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

// Додавання кнопки для видалення окремих повідомлень
newText.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const messageDiv = event.target.parentElement; // Отримуємо батьківський div повідомлення
    const id = messageDiv.getAttribute('data-id'); // Створюємо змінну id для повідомлення
    console.log(`Видалення повідомлення з ID: ${id}`); // Лог для перевірки ID повідомлення
    messageDiv.remove(); // Видаляємо повідомлення з DOM
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