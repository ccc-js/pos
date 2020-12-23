const puppeteer = require('puppeteer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  
  const browser = await puppeteer.launch({
    executablePath:
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'example.png' });
  //註冊流程測試
  await page.click('.dropbtn')
  await sleep(1000);
  await page.click('a[href="#signup"]')
  await sleep(1000);
  await page.type('#name', 'Austin')
  await sleep(1000);
  await page.type('#password', 'Austin')
  await sleep(1000);
  await page.click('button[onclick="Signup.submit()"]')
  await sleep(1000);
  //登入流程測試
  await page.click('.dropbtn')
  await sleep(1000);
  await page.click('a[href="#login"]')
  await sleep(1000);
  await page.type('#name', 'Austin')
  await sleep(1000);
  await page.type('#password', 'Austin')
  await sleep(1000);
  await page.click('button[onclick="Login.submit()"]')
  await sleep(1000);
  //下訂單流程測試
  await page.click('.dropbtn')
  await sleep(1000);
  await page.click('a[href="#myarea"]')
  await sleep(1000);
  await page.click('a[href="#shop"]')
  await sleep(1000);
  await page.click(`button[onclick="fe6.go('pos')"]`)
  await sleep(1000);
  await page.click(`button[onclick="Pos.addItem()"]`)
  await sleep(1000);
  await page.click(`#submit`)
  await sleep(1000);
  //報表查詢流程測試
  await page.click(`#goShop`)
  await sleep(1000);
  await page.click(`button[onclick="fe6.go('todayReport')"]`)
  await sleep(1000);
  
  await sleep(2000);
  await browser.close();
})();


