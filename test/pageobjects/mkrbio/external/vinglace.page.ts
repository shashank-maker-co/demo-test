// playwright-dev-page.ts
import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../utils/helper';
import { BasePage } from './base.page';

export class VinglacePage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }

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