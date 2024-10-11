// JavaScript to display current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Display wind chill when page loads
document.addEventListener("DOMContentLoaded", function() {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").querySelector("span").textContent = windChill;

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('copyright').textContent = `© ${currentYear} Plaxedes Ncube`;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});