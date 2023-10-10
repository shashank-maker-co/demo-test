// playwright-dev-page.ts
import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../utils/helper';
import { BasePage } from './base.page';

export class NicobarPage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    // constructor(page: Page, browser: Browser) {
    //     this.page = page;
    //     this.helper = new Helper(this.page, browser);
    //     this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    //     this.pomLink = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
    //     this.tocList = page.locator('article div.markdown ul > li > a');
    // }


    get getStartedLink(): string {
        return "xpath=//a[text() = 'Get started']"
    }

    async getStarted() {
        await this.helper.clickOnElement(this.getStartedLink)
    }

    async getStopped() {
        await this.helper.clickOnElement(this.getStartedLink)
    }

}