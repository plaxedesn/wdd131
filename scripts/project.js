document.addEventListener('DOMContentLoaded', () => {
    setupFooter();
    handleForms();
    populateServices();
});

function setupFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('footer').innerHTML = `
        <p>© ${currentYear} Plaxedes Ncube</p>
        <p>Last Modified: ${document.lastModified}</p>
    `;
}

function handleForms() {
    document.getElementById('orderForm')?.addEventListener('submit', handleOrder);
    document.getElementById('reviewForm')?.addEventListener('submit', handleReview);
}

function handleOrder(event) {
    event.preventDefault();
    const orderData = collectOrderData();
    saveToLocalStorage('orders', orderData);
    showConfirmation('orderConfirmation');
}

function handleReview(event) {
    event.preventDefault();
    const reviewData = collectReviewData();
    saveToLocalStorage('reviews', reviewData);
    showConfirmation('reviewConfirmation');
}

function collectOrderData() {
    return {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        product: document.getElementById('product').value,
        quantity: parseInt(document.getElementById('quantity').value)
    };
}

function collectReviewData() {
    return {
        name: document.getElementById('reviewerName').value,
        product: document.getElementById('reviewProduct').value,
        message: document.getElementById('reviewMessage').value
    };
}

function saveToLocalStorage(key, data) {
    const existing = JSON.parse(localStorage.getItem(key)) || [];
    existing.push(data);
    localStorage.setItem(key, JSON.stringify(existing));
}

function showConfirmation(id) {
    document.getElementById(id).classList.remove('hidden');
}

function populateServices() {
    const services = [
        'Home and office delivery',
        'Flexible subscription plans',
        'High-quality bottled and bulk water options'
    ];
    const list = document.getElementById('services-list');
    services.forEach(service => {
        const item = document.createElement('li');
        item.textContent = service;
        list.appendChild(item);
    });
}
