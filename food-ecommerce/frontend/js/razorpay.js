function payNow() {
  let total = 0;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach(item => total += item.price * item.qty);

  var options = {
    key: "RAZORPAY_KEY_ID", // client key
    amount: total * 100,
    currency: "INR",
    name: "FoodStore",
    description: "Food Order Payment",
    handler: function (response) {
      alert("Payment Successful ✅");
      placeOrder();
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
