document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    const highlightCurrentSection = () => {
        const currentSection = window.location.hash || '#home';
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentSection) {
                link.style.fontWeight = 'bold';
                link.style.textDecoration = 'underline';
            } else {
                link.style.fontWeight = 'normal';
                link.style.textDecoration = 'none';
            }
        });
    };

    highlightCurrentSection();

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(highlightCurrentSection, 0);
        });
    });
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('copyright').textContent = `© ${currentYear} Plaxedes Ncube`;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});