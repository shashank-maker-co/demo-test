import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from './../base.page';
import { CommonFunction } from '../../../../../utils/commonFunction';
export class HomePage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }

    async gotoHomePage() {
        await this.page.goto("https://nav-git-master-makerco.vercel.app/support_app/_/dashboard?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE&account_id=bzILjdIZb");
    }
    private readonly WELCOME_TEXT_ON_HOME_PAGE: string = "xpath=//h1[text()='Welcome!']"
    async validatewelcomeTextIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.WELCOME_TEXT_ON_HOME_PAGE)
    }
    private readonly HOME_BUTTON: string = "xpath=//div[@data-id='Home']"
    async waitForHomeButtonToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.HOME_BUTTON)
    }
    private readonly CREATE_NEW_BUTTON_HOME_PAGE: string = "xpath=//button/div[text()='Create New Nav']"
    async validateCreateNewButtonIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.CREATE_NEW_BUTTON_HOME_PAGE)
    }
    private readonly EDIT_MENUS_BUTTON_HOME_PAGE: string = "xpath=//button/div[text()='Edit Menus']"
    async validateEditMenuButtonIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.EDIT_MENUS_BUTTON_HOME_PAGE)
    }
}