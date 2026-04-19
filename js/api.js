// Weather API for different regions (free tier)
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast?latitude=-1.286389&longitude=36.817223&current_weather=true';

// Initialize API calls
document.addEventListener('DOMContentLoaded', () => {
    // These functions need to be defined elsewhere in your file or imported
    if (typeof fetchImpactData === 'function') fetchImpactData();
    if (typeof fetchMotivationalQuote === 'function') fetchMotivationalQuote();
    
    fetchWeatherUpdate();
});

// Weather widget for footer
async function fetchWeatherUpdate() {
    // This finds the div you added to your HTML
    const weatherWidget = document.getElementById('weather-widget');
    
    // If the div doesn't exist on the current page, exit quietly
    if (!weatherWidget) return;

    try {
        const response = await fetch(WEATHER_API);
        const data = await response.json();

        // Check if the data has the expected structure
        if (data && data.current_weather) {
            const temp = data.current_weather.temperature;
            // Inject the data into the HTML
            weatherWidget.innerHTML = `<span>${temp}°C | Nairobi</span>`;
        } else {
            throw new Error("Invalid data format");
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherWidget.innerHTML = '<span>Weather data unavailable</span>';
    }
}

// Export for testing (Matches your api.test.js requirements)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchWeatherUpdate }; 
}