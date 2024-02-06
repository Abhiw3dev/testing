const searchTime = require("../src/arbScript");

describe('Search Time Measurement', () => {
    it('measures search time for appreviewbot.com with "Facebook"', async () => {
        const url = 'https://appreviewbot.com/';
        const searchTerm = 'slack';
        const responseTime = await searchTime(url, searchTerm);
        
        console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);
        // expect(responseTime).toBeLessThan(10); // Example threshold, adjust based on expected performance
    }, 70000); // Increase timeout for async operation

    it('measures search time for next.appreviewbot.com with "Facebook"', async () => {
        const url = 'https://next.appreviewbot.com/';
        const searchTerm = 'slack';

        const responseTime = await searchTime( url, searchTerm);
        
        console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);
        // expect(responseTime).toBeLessThan(10); // Example threshold, adjust based on expected performance
    }, 70000); // Increase timeout for async operation
});
