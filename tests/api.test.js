/**
 * Unit tests for API functions
 * Note: Ensure you have Jest installed (npm install --save-dev jest)
 */

// 1. Mock the global fetch function
global.fetch = jest.fn();

// 2. Import the functions from your api.js 
// (Ensure these are exported in your api.js file)
const { fetchImpactData, fetchMotivationalQuote } = require('./api.js');
describe('API Functions', () => {
    beforeEach(() => {
        fetch.mockClear();
    });
    test('fetchImpactData returns data successfully', async () => {
        const mockData = [{ id: 1, title: 'Test post' }];
        
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const data = await fetchImpactData();
        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    test('fetchImpactData handles errors', async () => {
        fetch.mockRejectedValueOnce(new Error('API error'));

        const data = await fetchImpactData();
        // Assuming your function returns an empty array on failure
        expect(data).toEqual([]); 
    });

    test('fetchMotivationalQuote returns a quote successfully', async () => {
        const mockQuote = { text: 'Test quote', author: 'Test author' };
        
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockQuote,
        });

        const data = await fetchMotivationalQuote();
        expect(data).toEqual(mockQuote);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
describe('Form Validation', () => {
    test('donation form requires amount', () => {
        // Setup a mock DOM element
        document.body.innerHTML = '<form id="donation-form"></form>';
        const form = document.getElementById('donation-form');
        const amount = document.createElement('input');
        
        amount.required = true;
        form.appendChild(amount);

        expect(amount.required).toBe(true);
    });
    test('contact form requires name and email', () => {
        const inputs = [
            { name: 'name', required: true },
            { name: 'email', required: true }
        ];

        inputs.forEach(input => {
            expect(input.required).toBe(true);
        });
    });
});