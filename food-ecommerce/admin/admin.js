function addProduct() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({
    name: pname.value,
    price: price.value
  });
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}

function loadProducts() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  productList.innerHTML = "";
  products.forEach(p => {
    productList.innerHTML += `<p>${p.name} - ₹${p.price}</p>`;
  });
}

loadProducts();
