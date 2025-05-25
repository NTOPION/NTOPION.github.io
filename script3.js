
  function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.name} - €${item.price.toFixed(2)}
        <button class="remove-item" data-index="${index}" style="margin-left: 10px;">❌</button>
      `;
      cartList.appendChild(li);
      total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);

    // Set up remove handlers
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); // Remove item by index
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); // Refresh cart display
      });
    });
  }

  // Add to cart
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      alert('Item added to cart')
      const product = this.getAttribute('data-name');
      const select = this.closest('.card-body').querySelector('.product-size');
      const size = select.value;
      const price = parseFloat(select.options[select.selectedIndex].dataset.price);
      const name = `${product} (${size})`;

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cart));

      renderCart();
    });
  });

  // Load on page load
  window.addEventListener('load', renderCart);

  // Cart popup toggle
  document.getElementById('cartButton').addEventListener('click', () => {
    document.getElementById('cartPopup').classList.toggle('hidden');
  });

  document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('cartPopup').classList.add('hidden');
  });

