// playwright-dev-page.ts
import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class LandingPage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }

}