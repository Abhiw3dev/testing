// const searchTime = require("../src/arbScript");

// describe('Search Time Measurement', () => {
//     it('measures search time for appreviewbot.com with "Slack"', async () => {
//         const url = 'https://appreviewbot.com/';
//         const searchTerm = 'slack';
//         const responseTime = await searchTime(url, searchTerm);

//         console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);
//         // expect(responseTime).toBeLessThan(10); // Example threshold, adjust based on expected performance
//     }, 70000); // Increase timeout for async operation

//     it('measures search time for next.appreviewbot.com with "Slack"', async () => {
//         const url = 'https://next.appreviewbot.com/';
//         const searchTerm = 'slack';

//         const responseTime = await searchTime( url, searchTerm);

//         console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);
//         // expect(responseTime).toBeLessThan(10); // Example threshold, adjust based on expected performance
//     }, 70000); // Increase timeout for async operation
// });








// const searchTime = require("../src/arbScript");
// const captureConsoleLogs = require("../utils/captureLogs")
// global.logCapture = null;

// describe('Search Time Measurement', () => {

//     beforeAll(() => {
//         // Start capturing logs
//         global.logCapture = captureConsoleLogs('global-test-log');
//       })
//     it('measures search time for appreviewbot.com with "Slack"', async () => {
//         const logCapture = captureConsoleLogs(); // Start capturing logs

//         const url = 'https://appreviewbot.com/';
//         const searchTerm = 'slack';
//         const responseTime = await searchTime(url, searchTerm);

//         console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`)

//         logCapture.stopCapture(); // Stop capturing logs

//         // Example: Use captured logs in assertions or just to print them out
//         const logs = logCapture.getLogs();
//         // You can now use `logs` for assertions or manually include them in your test report
//         // expect(logs).toContain(`Response time for searching "slack" on https://appreviewbot.com/: ${responseTime} seconds`);
//         console.log('sample messages of console: ', logs)
//         // expect(responseTime).toBeLessThan(10);
//     }, 70000);

//     it('measures search time for next.appreviewbot.com with "Slack"', async () => {
//         const logCapture = captureConsoleLogs(); // Start capturing logs

//         const url = 'https://next.appreviewbot.com/';
//         const searchTerm = 'slack';
//         const responseTime = await searchTime(url, searchTerm);

//         console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);

//         logCapture.stopCapture(); // Stop capturing logs

//         // Example: Use captured logs in assertions or just to print them out
//         const logs = logCapture.getLogs();
//         // You can now use `logs` for assertions or manually include them in your test report
//         // expect(logs).toContain(`Response time for searching "slack" on https://next.appreviewbot.com/: ${responseTime} seconds`);
//         // console.log('sample messages of console: ', logs)
//         // expect(responseTime).toBeLessThan(10);
//     }, 70000);

//     afterAll(() => {
//         // Stop capturing logs and save them
//         global.logCapture.stopCapture();
//       });
// });


const searchTime = require("../src/arbScript");
const captureConsoleLogs = require("../utils/captureLogs")

global.browser; // Declare a global browser instance

// Initialize global log capture once before all tests start
beforeAll(() => {
    global.logCapture = captureConsoleLogs('test_logs');
});

describe('Search Time Measurement', () => {
    it('measures search time for appreviewbot.com with "Slack"', async () => {
        const url = 'https://appreviewbot.com/';
        const searchTerm = 'slack';
        const responseTime = await searchTime(url, searchTerm);

        console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);

    }, 40000);

    it('measures search time for next.appreviewbot.com with "Slack"', async () => {
        const url = 'https://next.appreviewbot.com/';
        const searchTerm = 'slack';
        const responseTime = await searchTime(url, searchTerm);

        console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);

    }, 40000);
});

// Stop global log capture once after all tests have finished
afterAll(() => {
    global.logCapture.stopCapture();

});
