const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');
        document.getElementById('rating').value = ratingValue;
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('selected');
        }
    });
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    document.getElementById('reviewForm').style.display = 'none';
  
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('reviewCount').textContent = reviewCount;
});

window.onload = function() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('reviewCount').textContent = reviewCount;
};
