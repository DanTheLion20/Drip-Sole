// script.js


// Initialize the cart array
let arr = JSON.parse(localStorage.getItem("sample2")) || { cart: [] };

let person = {
    cart: arr.cart, // Initialize the cart with data from local storage or an empty array
    addItemFunction(productName, price, imageUrl) {
        if (!selectedSize) {
            alert('Please select a size before adding to cart.');
            return;
        }

        // Add the selected product to the cart
        this.cart.push({ item: productName, price: price, image: imageUrl });
        
        // Update local storage with the cart data
        localStorage.setItem("sample2", JSON.stringify({ cart: this.cart }));
        
        alert("Item Added to Cart");
    },

    showCart() {
        let itemInCart = "";
        let overallCost = 0;

        this.cart.forEach(function (cartItems, index) {
            itemInCart +=
                `
                <div class="container">
                    <div class="row">
                        <p class="col-10"><img src="${cartItems.image}" alt="Product Image"></p>
                        <button class="col-2" onclick="person.removeItem(${index})">x</button>
                        <p class="col-6">Size: ${selectedSize}</p>
                        <p class="col-6">₱${cartItems.price.toFixed(2)}</p>
                    </div>
                </div>
                `;

            overallCost += cartItems.price;
        });

        document.getElementById("cart").innerHTML = itemInCart;
        document.getElementById("cart-total").innerHTML = overallCost.toFixed(2);
    },

    removeCart() {
        localStorage.removeItem("sample2");
        this.cart = []; // Clear the cart array
        this.showCart();
    },

    removeItem(itemCount) {
        // Remove the selected item from the cart array
        this.cart.splice(itemCount, 1);

        // Update local storage with the updated cart data
        localStorage.setItem("sample2", JSON.stringify({ cart: this.cart }));

        alert("Item Removed");
        this.showCart();
    }
};

person.showCart();


/*let selectedButton = null;
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
    
        // Product image
        const img = document.createElement('img');
        img.src = item.imageUrl;
        cartItemDiv.appendChild(img);
    
        // Product name, size, and price
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
*/


document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navbar = header.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('navbar-blur');
    } else {
        navbar.classList.remove('navbar-blur');
    }
});
