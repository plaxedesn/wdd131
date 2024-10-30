document.addEventListener('DOMContentLoaded', () => {
    setupCopyrightAndLastModified();
    setupNavigationHighlight();
    lazyLoadImages();
    handlePageSpecificLogic();
});

function setupCopyrightAndLastModified() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('footer').innerHTML = `
        <p>© ${currentYear} Plaxedes Ncube</p>
        <p>Last Modified: ${lastModified}</p>
    `;
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            console.log(`Image ${img.src} has been lazy-loaded.`);
        });
    });
}

function setupNavigationHighlight() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        }
    });
}

function handlePageSpecificLogic() {
    const path = window.location.pathname;
    if (path.includes('order.html')) setupOrderForm();
    if (path.includes('contact.html')) setupContactForm();
}

function setupOrderForm() {
    const orderForm = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('orderConfirmation');
    orderForm.addEventListener('submit', event => {
        event.preventDefault();
        const orderData = collectOrderData();
        saveDataToLocalStorage('orders', orderData);
        displayConfirmation(confirmationMessage, 'Order placed successfully!');
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

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('contactConfirmation');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const contactData = collectContactData();
        saveDataToLocalStorage('contactMessages', contactData);
        displayConfirmation(confirmationMessage, 'Message sent successfully!');
    });
}

function collectContactData() {
    return {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value
    };
}

function saveDataToLocalStorage(key, data) {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
}

function displayConfirmation(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
    element.closest('form').reset();
}
