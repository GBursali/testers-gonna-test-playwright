import { Then, When } from "@cucumber/cucumber";
import { MonstersListPage } from "@pages/monsters/monster-lists-page";

Then("I should see these monsters:", async dataTable =>
	MonstersListPage.verifyVisibleMonsters(dataTable)
);

When(
	"I click on the {string} monster",
	async monsterName => await MonstersListPage.clickOnMonster(monsterName)
);
