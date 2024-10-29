document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('orderConfirmation');

    orderForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveOrderToLocalStorage();
        showConfirmation();
    });

    function saveOrderToLocalStorage() {
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;

        const orderData = { name, address, product, quantity };
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
