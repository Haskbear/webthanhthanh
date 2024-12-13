// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Render initial products
    renderProducts();

    // Setup cart modal listeners
    const cartIcon = document.getElementById('cartIcon');
    const closeCart = document.getElementById('closeCart');
    const checkoutButton = document.getElementById('checkoutButton');

    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Thank you for your purchase! This is where the checkout process would begin.');
    });

    // Handle clicking outside cart modal to close it
    document.addEventListener('click', (e) => {
        const cartModal = document.getElementById('cartModal');
        const isClickInside = cartModal.contains(e.target) || cartIcon.contains(e.target);
        
        if (!isClickInside && cartModal.classList.contains('active')) {
            toggleCart();
        }
    });
});