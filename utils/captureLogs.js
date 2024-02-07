
// // utils/captureLogs.js

// const fs = require('fs');
// const path = require('path');

// function captureConsoleLogs(testName = 'default') {
//     const originalConsoleLog = console.log;
//     const capturedLogs = [];
//     const logsDirectory = path.join(__dirname, '..', 'consoleLogs');
//     if (!fs.existsSync(logsDirectory)) {
//         fs.mkdirSync(logsDirectory);
//     }
//     const fileName = testName.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.log';
//     const logFilePath = path.join(logsDirectory, fileName);

//     console.log = (...args) => {
//         const message = args.join(' ');
//         capturedLogs.push(message);
//         originalConsoleLog.apply(console, args);
//     };

//     return {
//         stopCapture: () => {
//             console.log = originalConsoleLog; // Restore the original console.log
//             // Append the captured logs to a file, ensuring all messages are saved
//             fs.appendFileSync(logFilePath, capturedLogs.join('\n') + '\n', 'utf8');
//         },
//         getLogs: () => capturedLogs,
//     };
// }

// module.exports = captureConsoleLogs;


// const fs = require('fs');
// const path = require('path');
// const moment = require('moment-timezone')

// function captureConsoleLogs(testName = 'default') {
//     const originalConsoleLog = console.log;
//     // Use a Set to store logs for deduplication
//     const capturedLogs = new Set();
//     const logsDirectory = path.join(__dirname, '..', 'logs');
//     if (!fs.existsSync(logsDirectory)) {
//         fs.mkdirSync(logsDirectory);
//     }
//     const fileName = testName.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.log';
//     const logFilePath = path.join(logsDirectory, fileName);

//     console.log = (...args) => {
//         // Get the current time in IST timezone
//     const timestamp = moment().tz('Asia/Kolkata').format('YYYY-MM-DD T HH:mm:ss.SSSZ');
//     const message = `${timestamp}: ${args.join(' ')}`;
//     capturedLogs.add(message);
//     originalConsoleLog.apply(console, args);
//     };

//     return {
//         stopCapture: () => {
//             console.log = originalConsoleLog; // Restore the original console.log
//             // Convert Set back to Array for writing to file. This ensures deduplication
//             const uniqueLogsArray = Array.from(capturedLogs);
//             // Write the unique logs with timestamps to a file, overwriting any existing file
//             fs.appendFileSync(logFilePath, uniqueLogsArray.join('\n') + '\n', 'utf8');
//         },
//         getLogs: () => Array.from(capturedLogs), // Convert Set to Array to return logs
//     };
// }

// module.exports = captureConsoleLogs;



const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

function captureConsoleLogs(testName = 'default') {
    const originalConsoleLog = console.log;
    // Initialize capturedLogs as an Array to store logs
    const capturedLogs = [];
    const logsDirectory = path.join(__dirname, '..', 'consoleLogs');

    // Ensure the logs directory exists
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    const fileName = testName.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.log';
    const logFilePath = path.join(logsDirectory, fileName);

    // Delete the existing log file at the start of a new test execution, if it exists
    if (fs.existsSync(logFilePath)) {
        fs.unlinkSync(logFilePath);
    }

    console.log = (...args) => {
        // Get the current time in IST timezone
        const timestamp = moment().tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        const message = `${timestamp}: ${args.join(' ')}`;
        capturedLogs.push(message); // Add message to Array
        originalConsoleLog.apply(console, args);
    };

    return {
        stopCapture: () => {
            console.log = originalConsoleLog; // Restore the original console.log
            // Write the logs with timestamps to the file, appending to any existing content
            // In this case, since the file is deleted at the start, this will effectively create a new file
            fs.writeFileSync(logFilePath, capturedLogs.join('\n') + '\n', 'utf8');
        },
        getLogs: () => capturedLogs, // Return the Array of logs
    };
}

module.exports = captureConsoleLogs;
