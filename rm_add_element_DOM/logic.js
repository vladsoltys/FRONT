const input = document.querySelector('#inputMsg');
const addText = document.querySelector('#addBtn');
const removeText = document.querySelector('#clearBtn');
const newText = document.querySelector('#messages');

addText.addEventListener('click', () => {
  const p = document.createElement('p')
  p.textContent = input.value;
  newText.appendChild(p);
  input.value = '';
});

removeText.addEventListener('click', () => {
  newText.innerHTML = '';
});