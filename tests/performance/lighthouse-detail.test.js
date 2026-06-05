import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'], executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" });
  const page = await browser.newPage();
  const appUrl = 'http://localhost:3000/article/1';

  // Wait for network to be idle to ensure stable metrics
  await page.goto(appUrl, { waitUntil: 'networkidle0' });

  const { lhr } = await lighthouse(appUrl, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    logLevel: 'info',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });

  const reportsDir = path.join(process.cwd(), 'performance-reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  fs.writeFileSync(path.join(reportsDir, 'article-detail-lighthouse.json'), JSON.stringify(lhr, null, 2));

  console.log(`Lighthouse performance score for ${appUrl}: ${lhr.categories.performance.score * 100}`);
  console.log(`Lighthouse accessibility score for ${appUrl}: ${lhr.categories.accessibility.score * 100}`);

  await browser.close();
})();
