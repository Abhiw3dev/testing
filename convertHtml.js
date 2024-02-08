const fs = require('fs');
const path = require('path');

// Specify the path to the input file and the output HTML file
const inputFile = path.join(__dirname, 'consoleLogs/test_logs.log');
const outputFile = path.join(__dirname, 'consoleLogs/example.html');

// Read the content from the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }

    // Create the HTML content
    const htmlContent = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <pre>${escapeHtml(data)}</pre>
</body>
</html>`;

    // Write the HTML content to the output file
    fs.writeFile(outputFile, htmlContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the HTML file:', err);
            return;
        }
        console.log('HTML file has been created:', outputFile);
    });
});

// Function to escape HTML special characters in the input data
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;");
}
