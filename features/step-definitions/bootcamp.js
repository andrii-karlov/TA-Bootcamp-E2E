const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the main page", async () => {
    await browser.url('https://www.newegg.com/');
});

When("I type the word {string} into the Search bar", async (request) => {
    const inputField = await $('input[type=search]');
    await inputField.setValue(request);
});

When("I click to search", async () => {
    const searchButton = await $('button.ico-search');
    await searchButton.click();
});

Then("I should be redirected to the search results page", async () => {
    browser.waitUntil(
        () => expect(browser).toHaveUrl('https://www.newegg.com/p/pl?d=Windows')
    );
});

Then("I should see that at least one item appears", async () => {
    browser.pause(3000);
    const itemsList = await $('div.list-wrap');
    await expect(itemsList).toBeExisting();
});

Given("I click to `Today's Best Deals` button", async () => {
    const redirectButton = await $('#trendingBanner_720202');
    await redirectButton.click();
});

Given("I am redirected to the `Today's Best Deals` tab", async () => {
    const expectedUrl = "https://www.newegg.com/todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202";
    await expect(browser).toHaveUrl(expectedUrl);
});

When("I click to the Logo button", async () => {
    const logoButton = await $('a.header2021-logo-img');
    await logoButton.click();
});

Then("I should be redirected to the main page", async () => {
    const expectedUrl = "https://www.newegg.com/";
    await expect(browser).toHaveUrl(expectedUrl);
});
