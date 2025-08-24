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
      return true
    } else {
      const li = document.createElement("li"); 
      li.dataset.name = name;
      li.dataset.price = price;
      
      li.innerHTML = `${name} - ${price} грн <input type="number" min="0" value="1">`;
      cart.appendChild(li);
      
      counter += parseInt(price);
      total.innerHTML = `Сумма товарів в списку: ${counter} грн`; 
    }  
  });         
});

cart.addEventListener("input", (event) => {
  if (event.target.tagName === "INPUT") {
    const li = event.target.closest("li"); // отримуємо сам li
    const price = parseInt(li.dataset.price);
    let qty = parseInt(event.target.value) || 0;

      counter = 0;
      cart.querySelectorAll("li").forEach(item => {
        let itemPrice = parseInt(item.dataset.price);
        let itemQty = parseInt(item.querySelector("input").value) || 0;
        counter += itemPrice * itemQty;
      });
      total.innerHTML = `Сумма товарів в списку: ${counter} грн`; 
    } 
});

cart.addEventListener("blur", (event) => {
  if (event.target.tagName === "INPUT") {
    const li = event.target.closest("li"); // отримуємо сам li
    const price = parseInt(li.dataset.price);
    let qty = parseInt(event.target.value) || 0;
    
    if (qty <= 0) {
       li.remove();
      // після видалення теж треба пересумувати
      counter = 0;
      cart.querySelectorAll("li").forEach(item => {
        let itemPrice = parseInt(item.dataset.price);
        let itemQty = parseInt(item.querySelector("input").value) || 0;
        counter += itemPrice * itemQty;
      });
      total.innerHTML = `Сумма товарів в списку: ${counter} грн`; 
    }
     
   }
}, true);
      