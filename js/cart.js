  
//   this page is for only javascript cart
  
  
  // Function to handle the "Add to Basket" click event
  function addToBasket(productName, price, type) {
    const product = {
        name: productName,
        price: price,
        type: type,
    };

    // Get the existing products from localStorage (if any)
    let existingProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];

    // Add the current product to the existing products
    existingProducts.push(product);

    // Save the updated products back to localStorage
    localStorage.setItem('basketProducts', JSON.stringify(existingProducts));

    // Update the cartlist to display the product information in the basket
    displayBasket();
}

// Function to handle the "Remove from Basket" click event
function removeFromBasket(index) {
    // Get the products from localStorage
    let products = JSON.parse(localStorage.getItem('basketProducts'));

    // Remove the product at the specified index
    products.splice(index, 1);

    // Save the updated products back to localStorage
    localStorage.setItem('basketProducts', JSON.stringify(products));

    // Update the cartlist to reflect the changes
    displayBasket();
}

// Function to display the basket content in the desired innerHTML element
function displayBasket() {
    const cartlist = document.getElementById('cartlist'); // Get the container for the cartlist

    // Get the products from localStorage
    let products = JSON.parse(localStorage.getItem('basketProducts'));

    if (products && products.length > 0) {
        // Generate HTML to display the products in the cartlist
        const cartHTML = products
            .map(
                (product, index) =>
                    `<div>
                        <p>${product.name}</p>
                        <p>${product.price}</p>
                        <p>${product.type}</p>
                        <button onclick="removeFromBasket(${index})">Remove</button>
                    </div>`
            )
            .join('');

        // Update the innerHTML of the cartlist element
        cartlist.innerHTML = `<h2>Cart List</h2>${cartHTML}`;

    } else {
        // If the basket is empty, display a message
        cartlist.innerHTML = '<p class="empty-message">No items in the basket.</p>';

    }
}

// Add event listeners to the "ADD TO BASKET" buttons
const addToBasketButtons = document.querySelectorAll('.addbasket');
addToBasketButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const details = this.parentElement;
        const productName = details.querySelector('p:nth-child(1)').textContent;
        const price = parseFloat(details.querySelector('p:nth-child(2)').textContent.slice(1));
        const type = details.querySelector('p:nth-child(3)').textContent;
        addToBasket(productName, price, type);
    });
});

// Display any existing items in the basket
displayBasket();

//    now i added i need to delete

