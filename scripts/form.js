const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
  ];
  
  const productSelect = document.getElementById("product");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);
  
    alert(`Review submitted successfully! Total reviews: ${reviewCount}`);
  
    this.reset();
  });
  
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  
  document.getElementById("copyright").textContent = `© ${currentYear} Plaxedes Ncube`;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
  
