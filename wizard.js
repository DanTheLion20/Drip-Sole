

// add to cart 
let selectedButton = null;
let selectedSize = null;

function setSize(size, button) {
    if (selectedButton) {
        selectedButton.classList.remove('highlighted');
    }

    button.classList.add('highlighted');
    selectedButton = button;
    selectedSize = size;
}

const cartItems = [];
let cartTotal = 0;

function addToCart(productName, price, imageUrl) {
    if (!selectedSize) {
        alert('Please select a size before adding to cart.');
        return;
    }

    cartItems.push({ productName, price, imageUrl, size: selectedSize });
    cartTotal += price;

    updateCartNotification(cartItems.length);
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    cartTotal -= removedItem.price;

    updateCartNotification(cartItems.length);
    updateCartDisplay();
}

function updateCartNotification(count) {
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = count;
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
    

        const img = document.createElement('img');
        img.src = item.imageUrl;
        cartItemDiv.appendChild(img);

        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
        <div class = "container"> 
        <div class = "row">
        <p class="col-10">${item.productName}</p>
        <button class="col-2" onclick="removeFromCart(${index})">x</button>
        <p class="col-6">Size: ${item.size}</p>
        <p class="col-6">₱${item.price.toFixed(2)}</p>
        <div/> 
        <div/> 
         
        `;
        cartItemDiv.appendChild(infoDiv);
    
        cartItemsElement.appendChild(cartItemDiv);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navbar = header.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
});



