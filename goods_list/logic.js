const buttons = document.querySelectorAll(".fruits"); 
const cart = document.querySelector("#cart");
const total = document.querySelector("#total");

let counter = 0;

buttons.forEach(btn => { 
  btn.addEventListener('click', () => { 
    const price = parseInt(btn.dataset.price); 
    const name = btn.dataset.name; 
    // console.log(`Товар: ${name}, Ціна: ${price}`); 
    
    // Перевіряємо, чи товар уже в кошику
    let existingItem = cart.querySelector(`li[data-name="${name}"]`);
    
    if (existingItem) {
      let quantity = parseInt(existingItem.dataset.quantity);
      quantity++;
      existingItem.dataset.quantity = quantity;
      
      existingItem.innerHTML = `${name} - ${price} грн (кількість: ${quantity})  <button class = "oneItem">Видалити</button>  <button class = "allItem">Видалити все</button>`;
    } else {
      const li = document.createElement("li"); 
      li.dataset.name = name;
      li.dataset.price = price;
      li.dataset.quantity = 1;
      
      li.innerHTML = `${name} - ${price} грн (кількість: 1)  <button class = "oneItem">Видалити</button class = "allItem">  <button>Видалити все</button>`;
      cart.appendChild(li);
    }
    
    
    counter += parseInt(price);
    total.innerHTML = `Сумма товарів в списку: ${counter} грн`;   
  });         
});


cart.addEventListener('click', (event) => {
    if (event.target.classList.contains("allItem")) {
        const parentLi = event.target.parentElement;
        const price = parseInt(parentLi.dataset.price);
        const quantity = parseInt(parentLi.dataset.quantity)
        parentLi.remove();
      
        counter -= price * quantity
        total.innerHTML = `Сумма товарів в списку: ${counter} грн`;  
     }  
});

cart.addEventListener('click', (event) => {
    if (event.target.classList.contains("oneItem")) {
        const parentLi = event.target.parentElement;
        const price = parseInt(parentLi.dataset.price);
        const name = parentLi.dataset.name;
        let quantity = parseInt(parentLi.dataset.quantity);

        if (quantity > 1) {
          quantity--;
          parentLi.dataset.quantity = quantity;
          parentLi.innerHTML = `${name} - ${price} грн (кількість: ${quantity})  <button class = "oneItem">Видалити</button>  <button class = "allItem">Видалити все</button>`;
        } else { parentLi.remove(); }
      
        counter -= price
        total.innerHTML = `Сумма товарів в списку: ${counter} грн`;  
     }  
});

