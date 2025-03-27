import { Then } from "@cucumber/cucumber";
import { MonsterDetailsPage } from "@pages/monsters/monster-details-page";

Then("monster's behavior is {string}", async string =>
	MonsterDetailsPage.behavior().expect().toHaveText(string)
);

Then("monster's danger level is {int}", async int =>
	MonsterDetailsPage.dangerLevel().expect().toHaveText(int.toString())
);
Then("verify the real name is {string}", async string =>
	MonsterDetailsPage.title().expect().toHaveText(string)
);
Then("monster's strength breakpoint is {string}", async string =>
	MonsterDetailsPage.strengthBreakpoint().expect().toHaveText(string)
);
Then("monster's map is {string}", async string =>
	MonsterDetailsPage.map().expect().toHaveText(string)
);
