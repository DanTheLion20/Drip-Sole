let selectedButton = null;
let selectedSize = null;
let cartItems = [];
let cartTotal = 0;

function setSize(size, button) {
    if (selectedButton) {
        selectedButton.classList.remove('highlighted');
    }

    button.classList.add('highlighted');
    selectedButton = button;
    selectedSize = size;
}

function addToCart(productName, price, imageUrl) {
    if (!selectedSize) {
        alert('Please select a size before adding to cart.');
        return;
    }

    const newItem = { productName, price, imageUrl, size: selectedSize };
    cartItems.push(newItem);
    cartTotal += price;

    saveCartData();
    updateCartNotification(cartItems.length);
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;

    saveCartData();
    updateCartNotification(cartItems.length);
    updateCartDisplay();
}

function updateCartNotification(count) {
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = count;

    // Store the count in local storage
    localStorage.setItem('cartCount', count);
}

function getCartCountFromLocalStorage() {
    const count = localStorage.getItem('cartCount');
    return count ? parseInt(count) : 0;
}

document.addEventListener('DOMContentLoaded', function () {
    const initialCount = getCartCountFromLocalStorage();
    updateCartNotification(initialCount);
});

// Initialize cartItems and cartTotal correctly
function loadCart() {
    cartItems = getCartItemsFromLocalStorage() || [];
    cartTotal = calculateCartTotal();
    updateCartNotification(cartItems.length);
    updateCartDisplay();
}

// Load cart items when the page loads
window.addEventListener('load', loadCart);

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    let total = 0; // Initialize a variable to calculate the total

    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        cartItemDiv.appendChild(img);

        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
            <div class="container"> 
                <div class="row">
                    <p class="col-10">${item.productName}</p>
                    <button class="col-2" onclick="removeFromCart(${index})">x</button>
                    <p class="col-6">Size: ${item.size}</p>
                    <p class="col-6">₱${item.price.toFixed(2)}</p>
                </div>
            </div>`;
        cartItemDiv.appendChild(infoDiv);

        cartItemsElement.appendChild(cartItemDiv);

        total += item.price; // Add the item's price to the total
    });

    cartTotal = total; // Update the cartTotal variable
    cartTotalElement.textContent = `₱${cartTotal.toFixed(2)}`;
}


function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}

function saveCartData() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotal', cartTotal);
}

function getCartItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
}

function calculateCartTotal() {
    const storedTotal = localStorage.getItem('cartTotal');
    return storedTotal ? parseFloat(storedTotal) : 0;
}




document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", performSearch);
  });
  
  function performSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const items = document.querySelectorAll(".box");
  
    items.forEach(item => {
      const itemName = item.querySelector(".primary").textContent.toLowerCase();
      if (itemName.includes(searchInput)) {
        item.style.display = "contents";
      } else {
        item.style.display = "none";
      }
    });
 
    loadMoreBtn.style.display = 'none';
  }
  
 //navbar blur 
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navbar = header.querySelector('.navbar');
 
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
 });