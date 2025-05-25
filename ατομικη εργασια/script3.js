document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        ${item.name} - €${item.price.toFixed(2)}
        <button class="remove-btn" onclick="removeFromCart(${index})">✖</button>
      `;
      cartItems.appendChild(listItem);
    });

    totalPrice.textContent = total.toFixed(2);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartDisplay();
  };

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      cart.push({
        name: button.getAttribute("data-name"),
        price: parseFloat(button.getAttribute("data-price"))
      });

      alert("Item Added to Cart");
      updateCartDisplay();
    });
  });

  updateCartDisplay();
});