function generateInvoice(order) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("FoodStore Invoice", 20, 20);
  let y = 40;

  order.items.forEach(item => {
    doc.text(
      `${item.name} x${item.qty} - ₹${item.price * item.qty}`,
      20,
      y
    );
    y += 10;
  });

  doc.text(`Total: ₹${order.total}`, 20, y + 10);
  doc.save("invoice.pdf");
}
