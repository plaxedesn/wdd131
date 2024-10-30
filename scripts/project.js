document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('copyright').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    const services = [
        'Home and office delivery',
        'Flexible subscription plans',
        'High-quality bottled and bulk water options'
    ];

    const servicesList = document.getElementById('services-list');
    services.forEach(service => {
        const listItem = document.createElement('li');
        listItem.textContent = service;
        servicesList.appendChild(listItem);
    });

    if (window.location.pathname.includes('order.html')) {
        setupOrderForm();
    }
});

function setupOrderForm() {
    const orderForm = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('orderConfirmation');

    orderForm.addEventListener('submit', event => {
        event.preventDefault();
        const orderData = collectOrderData();
        saveOrder(orderData);
        displayConfirmation(confirmationMessage);
    });
}

function collectOrderData() {
    return {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        product: document.getElementById('product').value,
        quantity: parseInt(document.getElementById('quantity').value, 10)
    };
}

function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function displayConfirmation(confirmationMessage) {
    confirmationMessage.classList.remove('hidden');
    document.getElementById('orderForm').reset();
}
