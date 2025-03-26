import { Before, After, AfterAll, BeforeAll } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
let browser: Browser;
let page: Page;

BeforeAll(async function () {
	browser = await chromium.launch({ headless: false });
	page = await browser.newPage();
});

AfterAll(async () => {
	if (browser) await browser.close();
});

export { browser, page };
