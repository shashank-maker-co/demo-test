import { Locator, Page } from '@playwright/test';
import { accountData } from '../../../../test-data/accountIds';
import { Helper } from '../../../../utils/helper';

export class BasePage {
    readonly page: Page;
    readonly helper: Helper;

    constructor(page: Page) {
        this.page = page;
        this.helper = new Helper(page);
    }

    async openNewTab(url: string) {
        await this.helper.openNewTab(url);
    }

    async waitFor(milliseconds?: number) {
        await this.helper.waitFor(milliseconds);
    }

    async gotoUrl(url: string) {
        let targetURL: string
        if (process.env.ENVIRONMENT_NAME == 'preview') {
            targetURL = `${process.env.ENVIRONMENT_URL}/support_app/navigation?token=${accountData.staging[0].token}&account_id=${accountData.staging[0].account}`
            console.log(`Running Preview Vercel Deployment URL= ${targetURL}`)
        }
        else if (process.env.ENVIRONMENT_NAME == 'production') {
            targetURL = `${process.env.ENVIRONMENT_URL}/support_app/navigation?token=${accountData.production[0].token}&account_id=${accountData.production[0].account}`
            console.log(`Running Production Vercel Deployment URL= ${targetURL}`)
        } else {
            targetURL = `${url}`
            console.log(`Running Non-Vercel Deployment URL= ${targetURL}`)
        }
        await this.page.goto(targetURL);
    }
    async goto(url: string) {
        await this.page.goto(url);
    }

    get editorHeader(): string {
        return "xpath=//div[@data-id = 'Editor']"
    }

    async verifyEditorHeaderIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.editorHeader)
    }
    async verifyEditorHeaderIsFocused() {
        const status = await this.helper.isAttributePresent(this.editorHeader, "data-active")
        return status
    }

    async clickOnEditorHeader() {
        await this.helper.clickOnElement(this.editorHeader)
    }

    get analyticsHeader(): string {
        return "xpath=//div[@data-id = 'Analytics']"
    }

    async verifyAnalyticsHeaderIsVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.analyticsHeader)
    }
    get settingsHeader(): string {
        return "xpath=//div[@data-id = 'Settings']//div[text() = 'Settings']"
    }
    async clickSettingsHeader() {
        return await this.helper.clickOnElement(this.settingsHeader)
    }
    private readonly ACCOUNT_SUBSECTION: string = "xpath=//div[@data-testid ='settings-account']"
    async clickAccountSubsection() {
        return await this.helper.clickOnElement(this.ACCOUNT_SUBSECTION)
    }
    async verifySettingsHeaderIsVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.settingsHeader)
    }
    get whatsNewHeader(): string {
        return "xpath=//div[contains(@data-id, 'What') and contains(@data-id, 'new')]"
    }

    async verifyWhatsNewHeaderIsVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.whatsNewHeader)
    }


    private readonly YOURLINK_TEXT: string = "xpath=//div[contains(text(), 'Your link:')]"
    async verifyYourLinkTextVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.YOURLINK_TEXT)
    }

    private readonly BIOURL_ATAG: string = `xpath=//div[contains(text(), 'Your link:')]//a`
    async verifyBioUrlWorks() {
        const [newTab] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.helper.clickOnElement(this.BIOURL_ATAG)
        ])
        return await this.helper.getCurrentURL(newTab)
    }

    private readonly HISTORY_TEXT: string = "xpath=//div[@data-id = 'History']"
    async verifyHistoryHeaderIsNotVisible() {
        await this.helper.elementIsVisibleEnhanced(this.HISTORY_TEXT)
    }

    private readonly PUBLISH_BUTTON: string = "xpath=//div[text() = 'Publish']/.."
    async verifyPublishButtonIsVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.PUBLISH_BUTTON)
    }

    async refreshPage() {
        return await this.helper.refreshBrowser()
    }
    // async tagProductToPostThoughAPI(executionConfig, { request }) {
    //     await this.commonFunction.tagProductToPostThoughAPI(executionConfig, { request })
    // }

    // async tagOutOfStockProductToPostThoughAPI(executionConfig, { request }) {
    //     await this.commonFunction.tagOutOfStockProductToPostThoughAPI(executionConfig, { request })
    // }

    // async importLatestAndOlderPostsAndReelsUsingAPI(configID, { request }) {
    //     await this.commonFunction.importLatestAndOlderPostsAndReelsUsingAPI(configID, { request })
    // }

    async setViewport(w, h) {
        await this.helper.setViewport(w, h)
    }

    private readonly SPINNER_ANIMATION: string = "xpath=//div[@class='tw__all tw__spinner']"
    async waitForPreviewLoadingSpinnerToDisapper() {
        await this.helper.elementIsNotVisibleEnhanced(this.SPINNER_ANIMATION);
    }

    private readonly IG_TABS: string = "xpath=//div[@data-testid='ig-tabs']"
    async waitForIGTabsToBeVisible() {
        const timeout = 15000; // 15 seconds
        const timeoutPromise = new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, timeout);
        });
        const visibilityPromise = this.helper.elementIsVisibleEnhanced(this.IG_TABS, undefined, timeout);
        const result = await Promise.race([visibilityPromise, timeoutPromise]);
        if (result === undefined) {
            await this.helper.refreshBrowser();
        }
    }

    async toggleSwitch(state: "on" | "off", selector: string) {
        const togglestate = await this.helper.isAttributePresent(
            selector,
            "data-active"
        );
        const isOn = togglestate === true;
        if ((state === "off" && isOn) || (state === "on" && !isOn)) {
            await this.helper.clickOnElement(selector);
            console.log(`Switch turned ${state}.`);
        } else {
            console.log(`Switch is already ${state}.`);
        }
    }
}