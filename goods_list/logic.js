const buttons = document.querySelectorAll(".fruits"); 
const cart = document.querySelector("#cart");
const total = document.querySelector("#total");

let counter = 0;

buttons.forEach(btn => { 
  btn.addEventListener('click', () => { 
    const price = parseInt(btn.dataset.price); 
    const name = btn.dataset.name; 
    // console.log(`Товар: ${name}, Ціна: ${price}`); 
    
    const li = document.createElement("li"); 
    li.innerHTML = `${name} - ${price} грн <button>Видалити</button>`;
    li.dataset.price = price;
    // console.log(li.dataset.price);
    cart.appendChild(li);
    
    counter += parseInt(price);
    total.innerHTML = `Сумма товарів в списку: ${counter} грн`;   
  });         
});


cart.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        const parentLi = event.target.parentElement;
        const price = parseInt(parentLi.dataset.price);
        parentLi.remove();
      
        counter -= price
        total.innerHTML = `Сумма товарів в списку: ${counter} грн`;  
     }  
});
