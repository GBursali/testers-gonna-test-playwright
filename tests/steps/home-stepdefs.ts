import { Given, When } from "@cucumber/cucumber";
import { HomePage } from "@pages/home-page";
import { page } from "@utils/hooks";
import { navigate } from "@utils/navigations";

const URL = "https://repocoopgame.fandom.com/wiki/R.E.P.O._Wiki";
Given(
	"A web browser on the REPO wiki homepage",
	async () => await navigate(page, URL)
);

When(
	"I click on the {string} category",
	async category => await HomePage.selectCategory(category)
);
