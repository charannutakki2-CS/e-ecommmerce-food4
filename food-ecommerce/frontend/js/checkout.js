function placeOrder() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Cart empty ❌");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({
    items: cart,
    date: new Date().toLocaleString(),
    status: "Pending"
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  alert("Order Placed Successfully 🎉");
  window.location.href = "index.html";
}
