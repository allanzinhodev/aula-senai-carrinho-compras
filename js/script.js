// script.js

// Dados simulados dos produtos
const products = [
    { id: 1, name: 'Produto A', price: 49.99, image: 'imgs/prod1.png' },
    { id: 2, name: 'Produto B', price: 29.99, image: 'imgs/prod3.png' },
    { id: 3, name: 'Produto C', price: 99.99, image: 'imgs/prod3.png' }
  ];
  
  const cart = [];
  
  // Renderizar produtos
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    `;
    productsContainer.appendChild(productCard);
  });
  
  // Adicionar ao carrinho
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
  
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCart();
  }
  
  // Atualizar carrinho
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
  
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;
  
    cart.forEach(item => {
      total += item.price * item.quantity;
      count += item.quantity;
  
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <p>${item.name} - R$ ${(item.price * item.quantity).toFixed(2)} (x${item.quantity})</p>
        <button onclick="removeFromCart(${item.id})">Remover</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  
    cartCount.textContent = count;
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Remover do carrinho
  function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      cart[itemIndex].quantity--;
      if (cart[itemIndex].quantity === 0) {
        cart.splice(itemIndex, 1);
      }
    }
  
    updateCart();
  }
  
  // Alternar visibilidade do carrinho
  document.getElementById('cart-toggle').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('hidden');
  });
  
  // Finalizar compra
  document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra finalizada com sucesso!');
    cart.length = 0;
    updateCart();
  });
  