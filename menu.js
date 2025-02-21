// Example of adding event listeners to new "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const pizzaId = button.getAttribute('data-pizza-id');
      // Add the selected pizza to the cart
      addToCart(pizzaId);
    });
  });
  
  function addToCart(pizzaId) {
    // Logic to add the pizza to the cart
    // This could involve updating the cart array and refreshing the cart display
  }
  