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
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');
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

    // Path to the log file and the output HTML file
const logFilePaths = path.join(__dirname, 'consoleLogs', 'test_logs.log');
const htmlFilePath = path.join(__dirname, 'consoleLogs', 'test_logs.html');

// Function to escape HTML special characters for safe display
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Read the log file
fs.readFile(logFilePaths, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the log file:', err);
        return;
    }

    // Split the log data into lines
    const lines = data.split('\n');

    // Start the HTML string with a basic HTML5 document structure
    let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Logs</title>
</head>
<body>
    <h1>Test Logs</h1>
`;

    // Convert each log line into an HTML paragraph and add to the HTML content
    lines.forEach(line => {
        if (line) { // Skip empty lines
            htmlContent += `    <p>${escapeHtml(line)}</p>\n`;
        }
    });

    // Close the HTML document
    htmlContent += `</body>\n</html>`;

    // Write the HTML content to the output file
    fs.writeFile(htmlFilePath, htmlContent, 'utf8', err => {
         
        console.log('HTML file has been generated:', htmlFilePath);
    });
});


});
