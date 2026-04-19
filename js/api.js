// Using a free public API - JSONPlaceholder for demo data
// Weather API for different regions (free tier)
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast?latitude=-1.286389&longitude=36.817223&current_weather=true';

async function fetchWeatherUpdate() {
    try {
        const response = await fetch(WEATHER_API);
        const weather = await response.json();
        
        const weatherWidget = document.createElement('div');
        weatherWidget.className = 'weather-widget';
        weatherWidget.innerHTML = `
            <div class="weather-info">
                <span>Current Weather: ${weather.current_weather.temperature}°C</span>
            </div>
        `;
        
        const footer = document.querySelector('footer');
        if (footer && !document.querySelector('.weather-widget')) {
            footer.insertBefore(weatherWidget, footer.firstChild);
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Initialize API calls
document.addEventListener('DOMContentLoaded', () => {
    fetchImpactData();
    fetchMotivationalQuote();
    fetchWeatherUpdate();
    
    // Refresh stats every 30 seconds
    setInterval(fetchImpactData, 30000);
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchImpactData, fetchMotivationalQuote };
}

// Weather widget for footer
async function fetchWeatherUpdate() {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;

    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-1.286389&longitude=36.817223&current_weather=true');
        
        // FIX 1: You must await the .json() promise
        const data = await response.json(); 

        // FIX 2: Open-Meteo returns current data inside the 'current_weather' object
        if (data && data.current_weather) {
            const temp = data.current_weather.temperature;
            weatherWidget.innerHTML = `<span>${temp}°C | Nairobi</span>`;
        } else {
            throw new Error("Invalid data format");
        }

    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherWidget.innerHTML = '<span>Weather data unavailable</span>';
    }
}