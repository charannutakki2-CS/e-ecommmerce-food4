const products = [
  { id: 1, name: "Cheese Pizza", price: 299, image: "images/pizza.jpg" },
  { id: 2, name: "Veg Burger", price: 149, image: "images/burger.jpg" },
  { id: 3, name: "Pasta", price: 199, image: "images/pasta.jpg" },
  { id: 4, name: "Chocolate Cake", price: 249, image: "images/cake.jpg" }
];

const productGrid = document.getElementById("productGrid");

products.forEach(product => {
  productGrid.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);

  const exists = cart.find(item => item.id === id);
  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
}
