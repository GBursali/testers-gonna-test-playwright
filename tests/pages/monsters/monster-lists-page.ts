import { expect } from "@playwright/test";
import { BasePage } from "@utils/basepage";
import { page } from "@utils/hooks";
import { LazyLocator } from "@utils/lazylocator";
import { waitForPageLoad } from "@utils/navigations";

export class MonsterLists extends BasePage {
	monster = (text: string) =>
		LazyLocator.of(p =>
			p.locator(`a.category-page__member-link[title='${text}']`)
		);
	verifyVisibleMonsters(dataTable: any) {
		dataTable
			.raw()
			.forEach(
				async (x: string) =>
					await this.monster(x).expect().toBeVisible()
			);
	}
	clickOnMonster = (text: string) =>
		this.monster(text)
			.getFirst()
			.click()
			.then(() => waitForPageLoad(page));
}
export let MonstersListPage = new MonsterLists(page);
