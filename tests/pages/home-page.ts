import { page } from "@utils/hooks";
import { BasePage } from "@utils/basepage";
import { LazyLocator } from "@utils/lazylocator";
import { waitForPageLoad } from "@utils/navigations";

export class Home extends BasePage {
	category = (text: string) => LazyLocator.fromTitle(`Category:${text}`);

	selectCategory = (cat: string) =>
		this.category(cat)
			.click()
			.then(() => waitForPageLoad(page));
}

export let HomePage = new Home(page);
