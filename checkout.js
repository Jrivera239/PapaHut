document.addEventListener("DOMContentLoaded", () => {
    displayOrderSummary();
});

function displayOrderSummary() {
    const orderSummary = document.querySelector(".order-summary");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    orderSummary.innerHTML = "";
    let total = 0;
    
    cart.forEach((item) => {
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        orderSummary.appendChild(orderItem);
        total += item.price;
    });
    
    const totalElement = document.createElement("h3");
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    orderSummary.appendChild(totalElement);
}

document.getElementById("payment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Payment successful! Thank you for your order.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});
