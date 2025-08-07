const input = document.querySelector('#inputMsg');
const addText = document.querySelector('#addBtn');
const removeText = document.querySelector('#clearBtn');
const newText = document.querySelector('#messages');

addText.addEventListener('click', () => {
  const div = document.createElement('div')
  const btn = document.createElement('button')
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  
  div.textContent = `${input.value} - ${hours}:${minutes}`;
  btn.textContent = "Видалити";
  
  btn.addEventListener('click', () => {
    div.remove();
  });
  
  newText.appendChild(div);
  div.appendChild(btn);
  input.value = '';
});

removeText.addEventListener('click', () => {
  newText.innerHTML = '';
});

const themeButton = document.querySelector('#themeBtn');

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  themeButton.textContent = isDark ? 'Світла тема' : 'Темна тема';
});