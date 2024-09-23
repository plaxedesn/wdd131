const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById('copyright').textContent = `© ${currentYear} Plaxedes Ncube`;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;