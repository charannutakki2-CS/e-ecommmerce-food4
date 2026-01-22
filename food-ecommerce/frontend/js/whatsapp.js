function sendWhatsApp(orderId, total) {
  let phone = "91XXXXXXXXXX"; // client number
  let message = `New Order Received 🛒
Order ID: ${orderId}
Total: ₹${total}`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
