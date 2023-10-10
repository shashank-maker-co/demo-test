import { Browser, ElementHandle, expect, FrameLocator, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../utils/helper';
import { CommonFunction } from '../../../../utils/commonFunction';

export class BasePage {
    readonly page: Page;
    readonly gettingStartedHeader: Locator;
    readonly pomLink: Locator;
    readonly tocList: Locator;
    readonly helper: Helper;
    readonly commonFunction: CommonFunction;

    constructor(page: Page) {
        this.page = page;
        this.helper = new Helper(this.page);
        this.commonFunction = new CommonFunction();
        this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
        this.pomLink = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
        this.tocList = page.locator('article div.markdown ul > li > a');
    }

    async openNewTab(url: string) {
        await this.helper.openNewTab(url);
    }

    async goto(path: string) {
        await this.page.goto(`https://mkr.bio/${path}`);
        await this.helper.waitForPageToLoad()
    }

    async verifyAPIRoute() {
        this.page.on('console', async msg => {
            await expect(msg.type(), `Console error: ${msg.text()}`).not.toBe('error');
        });
        this.page.route('**/*', async route => {
            await expect(route.request().failure(), `API request failed: ${route.request().url()}`).not.toBe(false);
            route.continue();
        });
    }

    private readonly CUSTOMER_HEADER: string = "xpath=//p[@data-testid = 'profile-header-name']"
    async getCustomerHeader() {
        await this.helper.elementIsVisibleEnhanced(this.CUSTOMER_HEADER)
        return await this.helper.getTextOfAnElement(this.CUSTOMER_HEADER)
    }
    private readonly CUSTOMER_DESCRIPTION: string = "xpath=//p[@data-testid = 'profile-header-name']/following-sibling::p"
    async isCustomerDescriptionVisible() {
        await this.helper.elementIsVisibleEnhanced(this.CUSTOMER_DESCRIPTION, undefined, 30000)
        return await this.helper.isDisplayed(this.CUSTOMER_DESCRIPTION)
    }
    private readonly INSTAGRAM_IN_PAGE_TAB: string = "xpath=//div[@data-testid = 'navbar-l1']//div[text() = 'INSTAGRAM']"
    async instagramInPageTabToBeAvailable() {
        await this.helper.elementIsVisibleEnhanced(this.INSTAGRAM_IN_PAGE_TAB, undefined, 30000)
        return await this.helper.isDisplayed(this.INSTAGRAM_IN_PAGE_TAB)
    }

    async clickOnInstagramTab() {
        await this.helper.clickOnElement(this.INSTAGRAM_IN_PAGE_TAB)
    }

    private readonly SHOP_IN_PAGE_TAB: string = "xpath=//div[@data-testid = 'navbar-l1']//div[text() = 'SHOP']"
    async shopInPageTabToBeAvailable() {
        await this.helper.elementIsVisibleEnhanced(this.SHOP_IN_PAGE_TAB, undefined, 25000)
        return await this.helper.isDisplayed(this.SHOP_IN_PAGE_TAB)
    }

    private readonly STORY_IN_PAGE_TAB: string = "xpath=//div[@data-testid = 'navbar-l1']//div[text() = '<param>']"
    async storyInPageTabToBeAvailable(story: string) {
        await this.helper.elementIsVisibleEnhanced(this.STORY_IN_PAGE_TAB.replace("<param>", story))

        return await this.helper.isDisplayed(this.STORY_IN_PAGE_TAB.replace("<param>", story))
    }

    private readonly CHECKOUT_BUTTON: string = "xpath=//div[@data-testid = 'navbar-button-checkout']"
    async checkoutButtonToBeClickable() {
        await this.helper.clickOnElement(this.CHECKOUT_BUTTON)
    }

    private readonly CART_CLOSE_BUTTON: string = "xpath=//div[text() = 'Close']"
    async clickOnCloseButton() {
        await this.helper.clickOnElement(this.CHECKOUT_BUTTON)
    }

    async findBrokenLinksNonMakerPage(selector) {
        await this.helper.elementIsVisibleEnhanced(selector, undefined, 14000)
        await this.page.waitForTimeout(5000);
        const elements: Locator = await this.page.locator(selector);
        const urls: any = [];
        let urlsWithoutDuplicate: string[] = [];
        for (const el of await elements.elementHandles()) {
            let href: any = await el.getAttribute("href");
            urls.push(href);
        }
        const urlSet: Set<string> = new Set(urls);
        urlsWithoutDuplicate = Array.from(urlSet);
        console.log("Non Maker Page Links - " + urlsWithoutDuplicate);
        for (let i = 0; i <= urlsWithoutDuplicate.length - 1; i++) {
            const response = await this.page.goto(urlsWithoutDuplicate[i]); //deleted , { timeout: 0, waitUntil: 'networkidle' }
            const status = response?.status();
            expect(
                status,
                `Expected status code of ${urlsWithoutDuplicate[i]} not to be greater than 400 but recieved response code as ${status}`
            ).not.toBeGreaterThan(400);
        }
    }

    private readonly LINKS_ON_NON_MAKER_PAGE: string = "a[href*='www']"
    async findBrokenLinksInBioNonMakerPages() {
        await this.findBrokenLinksNonMakerPage(this.LINKS_ON_NON_MAKER_PAGE)
    }

    async findBrokenLinksMakerPages(selector) {
        await this.page.waitForTimeout(5000);
        const elements: Locator = await this.page
            .frameLocator('iframe[title="Content"]')
            .locator(selector);
        const urls: any = [];
        let urlsWithoutDuplicate: string[] = [];
        for (const el of await elements.elementHandles()) {
            let href: any = await el.getAttribute("href");
            urls.push(href);
        }
        const urlSet: Set<string> = new Set(urls);
        urlsWithoutDuplicate = Array.from(urlSet);
        console.log("Maker Page Links - " + urlsWithoutDuplicate);
        for (let i = 0; i <= urlsWithoutDuplicate.length - 1; i++) {
            const response = await this.page.goto(urlsWithoutDuplicate[i]); //deleted , { timeout: 0, waitUntil: 'networkidle' }
            const status = response?.status();
            expect(
                status,
                `Expected status code of ${urlsWithoutDuplicate[i]} not to be greater than 400 but recieved response code as ${status}`
            ).not.toBeGreaterThan(399);
        }
    }

    private readonly LINKS_ON_MAKER_PAGE: string = "a[href*='www']"
    async findBrokenLinksInBioMakerPages() {
        await this.findBrokenLinksMakerPages(this.LINKS_ON_MAKER_PAGE);
    }

    private readonly TOTAL_CARDS_IN_BIO_PAGE: string = "xpath=//div[@data-testid = 'section-content-grid']//div[@data-testid = 'category-card-test-id' or @data-testid = 'social-network-post']"
    async verifyPostsFromInstagram() {
        await this.page.waitForTimeout(8000)
        const igCards: Locator = await this.page.locator(this.TOTAL_CARDS_IN_BIO_PAGE);
        let cardCount = 1
        for (const el of await igCards.elementHandles()) {
            let dataTestId: any = await el.getAttribute('data-testid');
            expect(dataTestId, `Card number ${cardCount} is not fetching data from Instagram`).toBe("social-network-post");
            cardCount = cardCount + 1;
        }
    }

    async verifyImagesOnWebpage() {
        await this.helper.waitFor(20000)
        const images = await this.page.$$('img');
        for (const image of images) {
            try {
                expect(await image.evaluate((node) => node.complete)).toBeTruthy();
                expect(await image.evaluate((node) => node.naturalWidth)).toBeGreaterThan(0);
                expect(await image.evaluate((node) => node.naturalHeight)).toBeGreaterThan(0);
            } catch (error) {
                console.log(`Error occurred while loading image: ${error} for Image = ${image}`);
                expect(true, `Error occurred while loading image: ${error} for Image = ${image}`).toBe(false);

            }
        }
    }
}