const products = [
  { id: 1, name: "Wireless Headphones", price: 29.99, image: "krishna.jpg" },
  { id: 2, name: "Smart Watch", price: 49.99, image: "kim.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 19.99, image: "eswar.jpg" },
  { id: 4, name: "USB Charger", price: 9.99, image: "kim.jpg" },
];

const cart = [];

function renderProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}

renderProducts();
