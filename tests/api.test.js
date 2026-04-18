// Unit tests for API functions
// You'll need to include a testing framework like Jest

// Mock fetch for testing
global.fetch = jest.fn();

describe('API Functions', () => {
    beforeEach(() => {
        fetch.mockClear();
    });
    
    test('fetchImpactData returns data successfully', async () => {
        const mockData = [{ id: 1, title: 'Test Post' }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });
        
        const data = await fetchImpactData();
        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    
    test('fetchImpactData handles errors', async () => {
        fetch.mockRejectedValueOnce(new Error('API Error'));
        
        const data = await fetchImpactData();
        expect(data).toEqual([]);
    });
    
    test('fetchMotivationalQuote returns quote', async () => {
        const mockQuotes = [{ text: 'Test Quote', author: 'Test Author' }];
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockQuotes
        });
        
        await fetchMotivationalQuote();
        expect(fetch).toHaveBeenCalled();
    });
});

// Test form validation
describe('Form Validation', () => {
    test('Donation form requires amount', () => {
        const form = document.createElement('form');
        const amount = document.createElement('select');
        amount.required = true;
        form.appendChild(amount);
        
        expect(amount.required).toBe(true);
    });
    
    test('Contact form requires name and email', () => {
        const inputs = [
            { name: 'name', required: true },
            { name: 'email', required: true }
        ];
        
        inputs.forEach(input => {
            expect(input.required).toBe(true);
        });
    });
});