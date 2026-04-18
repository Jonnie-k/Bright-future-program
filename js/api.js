// Using a free public API - JSONPlaceholder for demo data
// You can replace with any educational API or COVID stats API

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch and display impact statistics
async function fetchImpactData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Use API data to show recent activities
        const statsContainer = document.getElementById('stats-container');
        if (statsContainer) {
            const recentPosts = data.slice(0, 3);
            statsContainer.innerHTML = recentPosts.map(post => `
                <div class="stat-item">
                    <h3>Update ${post.id}</h3>
                    <p>${post.title.substring(0, 50)}...</p>
                </div>
            `).join('');
        }
        
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Alternative: Using a free educational quotes API
const QUOTES_API = 'https://type.fit/api/quotes';

async function fetchMotivationalQuote() {
    try {
        const response = await fetch(QUOTES_API);
        const quotes = await response.json();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        const quoteElement = document.createElement('div');
        quoteElement.className = 'motivational-quote';
        quoteElement.innerHTML = `
            <blockquote>
                <p>"${randomQuote.text}"</p>
                <footer>- ${randomQuote.author || 'Anonymous'}</footer>
            </blockquote>
        `;
        
        const heroSection = document.querySelector('.hero');
        if (heroSection && !document.querySelector('.motivational-quote')) {
            heroSection.appendChild(quoteElement);
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

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
                <span>🌤️ Current Weather: ${weather.current_weather.temperature}°C</span>
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


// Fetch and display motivational quote
async function fetchMotivationalQuote() {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const quotes = await response.json();
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        const quoteElement = document.getElementById('api-quote');
        if (quoteElement) {
            quoteElement.innerHTML = `
                <div class="quote-box">
                    <p class="quote-text">"${randomQuote.text}"</p>
                    <p class="quote-author">- ${randomQuote.author || 'Anonymous'}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        const quoteElement = document.getElementById('api-quote');
        if (quoteElement) {
            quoteElement.innerHTML = `
                <div class="quote-box">
                    <p class="quote-text">"Education is the most powerful weapon which you can use to change the world."</p>
                    <p class="quote-author">- Nelson Mandela</p>
                </div>
            `;
        }
    }
}

// Weather widget for footer
async function fetchWeatherUpdate() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-1.286389&longitude=36.817223&current_weather=true');
        const weather = await response.json();
        
        const weatherWidget = document.getElementById('weather-widget');
        if (weatherWidget) {
            weatherWidget.innerHTML = `
                <span>🌤️ ${weather.current_weather.temperature}°C | Nairobi</span>
            `;
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
        const weatherWidget = document.getElementById('weather-widget');
        if (weatherWidget) {
            weatherWidget.innerHTML = `<span>🌍 Changing lives through education</span>`;
        }
    }
}

// Initialize API calls
document.addEventListener('DOMContentLoaded', () => {
    fetchMotivationalQuote();
    fetchWeatherUpdate();
    
    // Refresh quote every 30 seconds
    setInterval(fetchMotivationalQuote, 30000);
    setInterval(fetchWeatherUpdate, 300000); // Update weather every 5 minutes
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchMotivationalQuote, fetchWeatherUpdate };
}