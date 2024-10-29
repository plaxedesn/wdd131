document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('orderConfirmation');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveOrderToLocalStorage();
            showConfirmation();
        });
    }

    function saveOrderToLocalStorage() {
        const orderData = {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            product: document.getElementById('product').value,
            quantity: document.getElementById('quantity').value,
        };
        localStorage.setItem('order', JSON.stringify(orderData));
    }

    function showConfirmation() {
        confirmationMessage.classList.remove('hidden');
        orderForm.reset();
    }

    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `© ${currentYear} Plaxedes Ncube`;
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
