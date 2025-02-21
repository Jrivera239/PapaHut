const payButton = document.getElementById("pay-button");
const paymentMethod = document.getElementById("payment-method"); // Dropdown for payment selection

payButton.addEventListener("click", async () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    let selectedMethod = paymentMethod.value; // Get selected payment method

    try {
        const response = await fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart, selectedMethod }),
        });

        const session = await response.json();

        if (session.id) {
            window.location.href = `https://checkout.stripe.com/pay/${session.id}`;
        } else {
            alert("Payment session creation failed.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try again.");
    }
});
