// script.js
// Sample products data
const products = [
    { id: 1, name: "T-Shirt", price: 19.99, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Jeans", price: 39.99, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Shoes", price: 59.99, image: "https://via.placeholder.com/200" }
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartDisplay();
});

// Display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    cartCount.textContent = cart.length;
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        updateCartDisplay();
    } else {
        alert("Your cart is empty!");
    }
});