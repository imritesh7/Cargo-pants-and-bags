let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("Product added to your cart!");
}
