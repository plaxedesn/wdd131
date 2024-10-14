
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        return Math.round(
            13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
        );
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const windChill = calculateWindChill(temperature, windSpeed);
    const windChillElement = document.getElementById("windChill");
    if (windChillElement) {
        const span = windChillElement.querySelector("span");
        if (span) span.textContent = windChill;
    }

    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Plaxedes Ncube`;
    }

    const lastModified = new Date(document.lastModified).toLocaleDateString();
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }
});
