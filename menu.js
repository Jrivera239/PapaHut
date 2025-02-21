document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
        let pizzaItem = this.closest(".pizza-item");
        let pizzaName = pizzaItem.querySelector("h3").textContent;
        let toppingSelector = pizzaItem.querySelector(".topping-selector");
        let toppingName = toppingSelector.options[toppingSelector.selectedIndex].text;
        let totalPrice = parseFloat(pizzaItem.querySelector(".total-price").textContent);

        // Cart item object
        let cartItem = {
            name: pizzaName,
            topping: toppingName,
            price: totalPrice
        };

        // Retrieve cart from local storage or initialize empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${pizzaName} with ${toppingName} added to cart!`);
    });
});
