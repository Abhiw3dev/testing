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








const searchTime = require("../src/arbScript");

// Utility function to capture console logs
function captureConsoleLogs() {
    const originalConsoleLog = console.log;
    const capturedLogs = [];
    console.log = (...args) => {
        capturedLogs.push(args.join(' '));
        originalConsoleLog.apply(console, args);
    };
    return {
        stopCapture: () => console.log = originalConsoleLog,
        getLogs: () => capturedLogs,
    };
}

describe('Search Time Measurement', () => {
    it('measures search time for appreviewbot.com with "Slack"', async () => {
        const logCapture = captureConsoleLogs(); // Start capturing logs

        const url = 'https://appreviewbot.com/';
        const searchTerm = 'slack';
        const responseTime = await searchTime(url, searchTerm);
        
        console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);

        logCapture.stopCapture(); // Stop capturing logs
        
        // Example: Use captured logs in assertions or just to print them out
        const logs = logCapture.getLogs();
        // You can now use `logs` for assertions or manually include them in your test report
        expect(logs).toContain(`Response time for searching "slack" on https://appreviewbot.com/: ${responseTime} seconds`);
        console.log('sample messages of console: ', logs)
        // expect(responseTime).toBeLessThan(10);
    }, 70000);

    it('measures search time for next.appreviewbot.com with "Slack"', async () => {
        const logCapture = captureConsoleLogs(); // Start capturing logs

        const url = 'https://next.appreviewbot.com/';
        const searchTerm = 'slack';
        const responseTime = await searchTime(url, searchTerm);
        
        console.log(`Response time for searching "${searchTerm}" on ${url}: ${responseTime} seconds`);

        logCapture.stopCapture(); // Stop capturing logs

        // Example: Use captured logs in assertions or just to print them out
        const logs = logCapture.getLogs();
        // You can now use `logs` for assertions or manually include them in your test report
        expect(logs).toContain(`Response time for searching "slack" on https://next.appreviewbot.com/: ${responseTime} seconds`);
        console.log('sample messages of console: ', logs)
        // expect(responseTime).toBeLessThan(10);
    }, 70000);
});
