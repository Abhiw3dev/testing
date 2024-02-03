const puppeteer = require('puppeteer');

// Function to measure search time
async function searchTime(targetURL, searchTerm) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(targetURL, { waitUntil: 'load' });

  // Perform the search and measure response time
  const startTime = new Date();
  await page.type('input[placeholder="Type your app name to get started"]', searchTerm);
    await page.waitForSelector('div[class="search__results"]');
  const endTime = new Date();
  const responseTime = (endTime - startTime) / 1000; // in seconds

  await browser.close();

  return responseTime;
}

module.exports = searchTime;
