import { page } from "@utils/hooks";
import { expect, Locator, Page } from "@playwright/test";

export class LazyLocator {
	static of = (fn: (page: Page) => Locator) => new LazyLocator(fn);

	static fromLocator = (locator: string) =>
		LazyLocator.of(p => p.locator(locator));

	static fromLabel = (locator: string) =>
		LazyLocator.of(p => p.getByLabel(locator, { exact: true }));

	locate: (page: Page) => Locator;
	constructor(locateFn: (page: Page) => Locator) {
		this.locate = locateFn;
	}

	get = () => this.locate(page);
	getFirst = () => this.locate(page).first();
	expect = () => expect(this.get());
	expectFirst = () => expect(this.getFirst());
	click = async () => await this.getFirst().click();
	write = async (text: string) => await this.getFirst().fill(text);
}
