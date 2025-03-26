import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "@utils/hooks";
import { navigate, waitForPageLoad } from "@utils/navigations";
import { HomePage } from "tests/pages/homepage";

Given(
	"A web browser on google page",
	async () => await navigate(page, "https://www.google.com/")
);

Then(
	"verify that captcha is here",
	async () => await HomePage.verifyCaptchaExists()
);

When(
	"{string} is written to the searchbar",
	async (query: string) => await HomePage.writeInSearchbar(query)
);

When("click on search", async () => await HomePage.clickOnSearch());
