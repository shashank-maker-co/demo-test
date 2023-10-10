import { test, expect } from '@playwright/test';
import { FemellaPage } from '../../../pageobjects/mkrbio/external/femmella.page';
import { BasePage } from '../../../pageobjects/mkrbio/external/base.page';

let basePage: BasePage;
let femellaPage: FemellaPage;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    femellaPage = new FemellaPage(page);
});

test.beforeEach(async () => {
    await femellaPage.goto("femmellaofficial");
});

test.afterAll(async ({ browser }) => {
    await browser.close()
});
test('TC_SMOKE_001 Verify the website doesnt return 404', async () => {
    await femellaPage.verifyAPIRoute()
    await femellaPage.goto("femmellaofficial");
});

test('TC_SMOKE_002 Verify the Femella bio page has correct title', async () => {
    expect(await femellaPage.getCustomerHeader(), `Expected Femella but recieved ${await femellaPage.getCustomerHeader()}`).toBe('Femmella');
});

test('TC_SMOKE_003 Verify the Femella bio page has correct description', async () => {
    expect(await femellaPage.isCustomerDescriptionVisible(), `Customer Description is not visible.`).toBe(true);
});

test('TC_SMOKE_004 Verify the Femella bio page has Instagram Tab visible', async () => {
    expect(await femellaPage.instagramInPageTabToBeAvailable(), `Instagram tab not visible.`).toBe(true);
});

test('TC_SMOKE_005 Verify the Femella bio page has Shop Tab visible', async () => {
    expect(await femellaPage.shopInPageTabToBeAvailable(), `Shop tab not visible.`).toBe(true);
});

test.skip('TC_SMOKE_006 Verify the Femella bio page has non maker links accessable', async () => {
    test.setTimeout(100000)
    await femellaPage.findBrokenLinksInBioNonMakerPages()
});
// test('TC_SMOKE_007 Verify the Femella bio page has Story Tab visible', async () => {
//     expect(await femellaPage.storyInPageTabToBeAvailable("STORY"), `Story tab not visible.`).toBe(true);
// });


test('TC_SMOKE_008 Verify the Femella bio page has cart visible', async () => {
    await femellaPage.checkoutButtonToBeClickable()
    await femellaPage.clickOnCloseButton()
});

test('TC_SMOKE_009 Verify the Femella bio page has each post connected to instagram', async () => {
    await femellaPage.clickOnInstagramTab()
    await femellaPage.verifyPostsFromInstagram()
});

test('TC_SMOKE_010 Verify the Femella bio page has maker links accessable', async () => {
    test.setTimeout(100000)
    await femellaPage.findBrokenLinksInBioMakerPages()
});

test('TC_SMOKE_011 Verify the Femella bio page has no broken Images', async () => {
    test.setTimeout(100000)
    await femellaPage.verifyImagesOnWebpage()
});
