let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    updateCart();
});

function updateCart() {
    const cartList = document.querySelector(".cart-list");
    const cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);
        total += item.price;
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert("Proceeding to checkout...");
    // Redirect to checkout page or implement checkout process
}
