import { Page } from "@playwright/test";
export async function navigate(page: Page, url: string) {
	await page.goto(url);
	waitForPageLoad(page);
}

export async function waitForPageLoad(page: Page) {
	return await page.waitForLoadState("domcontentloaded");
}
