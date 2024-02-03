const searchTime = require('../src/arbSearch.js')
 
describe('Search Time Measurement', () => {
  it('should measure search time for appreviewbot.com', () => {
    const targetURL = 'https://appreviewbot.com/';
    const searchTerm = 'Facebook';
    const responseTime = searchTime(targetURL, searchTerm);
    
    console.log(`Response time for appreviewbot.com: ${responseTime} seconds`);
    
    // Add your Jest assertions here, e.g., expect(responseTime).toBeLessThan(10);
  },60000);

  it('should measure search time for next.appreviewbot.com', async () => {
    const targetURL = 'https://next.appreviewbot.com/';
    const searchTerm = 'Slack';
    const responseTime = await searchTime(targetURL, searchTerm);
    
    console.log(`Response time for next.appreviewbot.com: ${responseTime} seconds`);
    
    // Add your Jest assertions here, e.g., expect(responseTime).toBeLessThan(10);
  },60000);
});