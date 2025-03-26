import { page } from "@utils/hooks";
import { BasePage } from "@utils/basepage";
import { LazyLocator } from "@utils/lazylocator";
import { waitForPageLoad } from "@utils/navigations";

export class Home extends BasePage {
	searchBar = LazyLocator.fromLabel("Ara");
	searchButton = LazyLocator.fromLabel("Google'da Ara");
	captcha = LazyLocator.fromLocator("#captcha-form");

	writeInSearchbar = async (text: string) => await this.searchBar.write(text);
	clickOnSearch = async () => {
		await this.searchButton.click();
		await waitForPageLoad(page);
	};
	verifyCaptchaExists = async () => await this.captcha.expect().toBeVisible();
}

export let HomePage = new Home(page);
