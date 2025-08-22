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
      
      existingItem.innerHTML = `${name} - ${price} грн (кількість: ${quantity})<button>Видалити</button>`;
    } else {
      const li = document.createElement("li"); 
      li.dataset.name = name;
      li.dataset.price = price;
      li.dataset.quantity = 1;
      
      li.innerHTML = `${name} - ${price} грн (кількість: 1)<button>Видалити</button>`;
      cart.appendChild(li);
    }
    
    
    counter += parseInt(price);
    total.innerHTML = `Сумма товарів в списку: ${counter} грн`;   
  });         
});


cart.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        const parentLi = event.target.parentElement;
        const price = parseInt(parentLi.dataset.price);
        const quantity = parseInt(parentLi.dataset.quantity)
        parentLi.remove();
      
        counter -= price * quantity
        total.innerHTML = `Сумма товарів в списку: ${counter} грн`;  
     }  
});
