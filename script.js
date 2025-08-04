function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

document.getElementById("addToCartBtn").addEventListener("click", function () {
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  const cartItem = {
    id: "cotton-tee",
    title: "Modern Cotton Tee",
    price: 29.99,
    size,
    color,
    qty: 1,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingIndex = cart.findIndex(item => item.id === cartItem.id && item.size === size && item.color === color);

  if (existingIndex !== -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push(cartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
});
