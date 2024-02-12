const { Keyboard, ConsoleMessage } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const googleUsername = "testarbatw3dev@gmail.com";
const googlePassword = "com.gmail@testarbatw3dev";

(async () => {
   const browser = await puppeteer.launch({
      headless: false,
      args:[
         '--no-sandbox',
         '--disable-gpu',
         '--enable-webgl',
         '--window-size=800,800'
      ]
   }); 

   const loginUrl = "https://accounts.google.com/AccountChooser?service=mail&continue=https://google.com&hl=en";
   const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'; 
   const page = await browser.newPage();

   await page.setUserAgent(ua);
   await page.goto(loginUrl, { waitUntil: 'networkidle2' });
   await page.type('input[type="email"]', googleUsername);
   await page.keyboard.press('Enter');
   await page.waitForTimeout(2000);
   await page.type('input[type="password"]', googlePassword);
   await page.keyboard.press('Enter');
   await page.waitForTimeout(6000)
   await page.click('a[class="gb_F"]')
   await page.waitForTimeout(20000)

await page.waitForSelector('div[class="Tm aeJ"]')
console.log('selector found')
//    await page.waitForSelector('tr#:25.zA.zE.x7')
   await page.click('tr#:25.zA.zE.x7')


})();

 
