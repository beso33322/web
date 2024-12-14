const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let cart = []; 
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.name;
        const productPrice = parseFloat(button.dataset.price);

        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
        updateCartDisplay();
    });
});
function updateCartDisplay() {
    cartItemsList.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price} × ${item.quantity}`;
        cartItemsList.appendChild(listItem);
        total += item.price * item.quantity;
    });
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}
