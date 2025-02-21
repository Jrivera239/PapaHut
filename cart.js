document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartButton = document.getElementById("clear-cart");

    // Function to update the cart display
    function updateCartDisplay() {
        cartContainer.innerHTML = ""; // Clear previous content
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)} 
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;

        // Add event listeners for remove buttons
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
            });
        });
    }

    // Function to add items to the cart
    function addToCart(name, price, button) {
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();

        // Disable the button temporarily to prevent multiple presses
        button.disabled = true;
        setTimeout(() => button.disabled = false, 1000);
    }

    // Attach event listeners to "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.parentElement.querySelector("h3").textContent;
            const price = parseFloat(this.parentElement.querySelector(".price").textContent.replace("$", ""));
            addToCart(name, price, this);
        });
    });

    // Clear cart function
    clearCartButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        cart = [];
        updateCartDisplay();
    });

    // Initial cart display update
    updateCartDisplay();
});
