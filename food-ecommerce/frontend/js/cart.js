const cartItemsDiv = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty 🛒</p>";
    totalDiv.innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <div class="qty-controls">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
        <span>₹${item.price * item.qty}</span>
        <button class="remove" onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  totalDiv.innerText = "Total Amount: ₹" + total;
}

function changeQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
