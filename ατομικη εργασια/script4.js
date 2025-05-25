// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cartButton = document.getElementById("cartButton");
  const cartPopup = document.getElementById("cartPopup");
  const closePopup = document.getElementById("closePopup");

  cartButton.addEventListener("click", () => {
    cartPopup.classList.remove("hidden");
    
  });

  closePopup.addEventListener("click", () => {
    cartPopup.classList.add("hidden");
  });

  // Close popup when clicking outside the content
  window.addEventListener("click", (event) => {
    if (event.target === cartPopup) {
      cartPopup.classList.add("hidden");
    }
  });
});
