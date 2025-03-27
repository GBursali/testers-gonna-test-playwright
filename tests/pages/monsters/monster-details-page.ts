import { BasePage } from "@utils/basepage";
import { page } from "@utils/hooks";
import { LazyLocator } from "@utils/lazylocator";
import { waitForPageLoad } from "@utils/navigations";

function sideTableLocator(source: string) {
	return LazyLocator.fromLocator(
		`div.pi-item[data-source="${source}"] div.pi-data-value`
	);
}
export class MonsterDetails extends BasePage {
	title = () => LazyLocator.fromLocator("aside > h2");

	dangerLevel = () => sideTableLocator("danger_level");
	behavior = () => sideTableLocator("behavior(s)");
	strengthBreakpoint = () => sideTableLocator("strength_breakpoint");
	map = () => sideTableLocator("maps");
}
export let MonsterDetailsPage = new MonsterDetails(page);
