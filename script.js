// Simple cart logic for the AI storefront
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  const cartEl = document.getElementById('cart');
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    cartEl.classList.add('hidden');
    return;
  }

  cartEl.classList.remove('hidden');
  itemsEl.innerHTML = cart.map(item => `<div>${item.name} — $${item.price}</div>`).join('');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalEl.textContent = total.toFixed(2);
}

// Smooth scroll for nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

console.log('AetherCommerce agents online. Human override available.');
