import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';
import { CommonFunction } from '../../../../../utils/commonFunction';

export class ImportIGPage extends BasePage {
    readonly helper: Helper;
    readonly commonFunctions: CommonFunction;


    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
        this.commonFunctions = new CommonFunction(this.page)

    }
    private readonly DELETE_BUTTON: string = "xpath=//button[@title = 'Remove']"

    async clickOnDeleteButton() {
        await this.helper.clickOnElement(this.DELETE_BUTTON)
    }

    private readonly IMPORT_LATEST_OLDER_POSTS_REELS_BUTTON: string = "xpath=//button[@data-testid = 'ig-import-button']"
    async clickOnImportLatestAndOlderPostsAndReelsButton() {
        await this.helper.clickOnElement(this.IMPORT_LATEST_OLDER_POSTS_REELS_BUTTON)
    }

    private readonly INSTAGRAM_CONTENT_DROPDOWN: string = "xpath=//div[text() = 'Instagram content']"
    async clickOnInstagramContentDropdown() {
        await this.helper.clickOnElement(this.INSTAGRAM_CONTENT_DROPDOWN)
    }

    private readonly FETCHING_POSTS_POPUP: string = "xpath=//p[text() = 'Fetching posts...']"
    async waitUntilFetchingPostsPopupCloses() {
        await this.helper.elementIsVisibleEnhanced(this.FETCHING_POSTS_POPUP)
        await this.helper.waitForElementToNotBeDisplayed(this.FETCHING_POSTS_POPUP)
    }

    private readonly DONE_POPUP: string = "xpath=//p[text() = 'Done!']"
    async waitUntilDonePopupCloses() {
        await this.helper.elementIsVisibleEnhanced(this.DONE_POPUP)
        await this.helper.waitForElementToNotBeDisplayed(this.DONE_POPUP)
    }



}