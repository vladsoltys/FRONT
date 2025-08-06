const input = document.querySelector('#inputMsg');
const addText = document.querySelector('#addBtn');
const removeText = document.querySelector('#clearBtn');
const newText = document.querySelector('#messages');

addText.addEventListener('click', () => {
  const div = document.createElement('div')
  const btn = document.createElement('button')
  div.textContent = input.value;
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