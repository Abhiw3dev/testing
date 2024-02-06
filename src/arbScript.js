const puppeteer = require('puppeteer');

async function searchTime(url, searchTerm) {

    const browser = await puppeteer.launch({ headless: "new", args: ['--start-maximized'], defaultViewport: null });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'load' });
    const NavigationUrl = page.url()
    if (NavigationUrl.includes('https://appreviewbot.com/')) {

        await page.click('input[placeholder="Type your app name to get started"]');
        await page.type('input[placeholder="Type your app name to get started"]', searchTerm, { delay: 100 });
        const startTime = new Date();

        await page.waitForSelector('div[class="search__results"]');

        const endTime = new Date();

        const responseTime = (endTime - startTime) / 1000; // Return response time in seconds
        const responseResult = console.log("Search time ", responseTime, "on", url)

        await browser.close();


    } else if (NavigationUrl.includes('https://next.appreviewbot.com/')) {
        await page.click('input[placeholder="Type your app name to get started"]');
        await page.type('input[placeholder="Type your app name to get started"]', searchTerm, { delay: 100 });
        const startTime = new Date();

        await page.waitForSelector('div[class="absolute resultdropdown overflow-y-auto h-80 w-full top-16 bg-white border-[0.9px] border-solid border-[0.9px] border-opacity-[0.4] rounded-[4px] shadow-[0_5px_10px_rgba(0,0,0,0.1)] z-50"]');

        const endTime = new Date();

        const response_Time = (endTime - startTime) / 1000; // Return response time in seconds
        console.log("Search time ", response_Time, "on", url)

        await browser.close();
    } else {
        console.log('something went wrong')
    }


}

module.exports = searchTime;
