document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size-button');
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  
    sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
      });
    });
  });
  