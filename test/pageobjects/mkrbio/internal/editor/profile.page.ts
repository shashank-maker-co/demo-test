// playwright-dev-page.ts
import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class ProfilePage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    private readonly EDIT_BUTTON: string = "xpath=//button[@data-testid='bio-edit-profile']"
    async verifyEditButtonIsVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.EDIT_BUTTON)
    }
    async waitForEditButtonToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.EDIT_BUTTON)
    }
    async clickOnEditButton() {
        await this.helper.clickOnElement(this.EDIT_BUTTON)
    }
    async profileNameToggle(state) {
        await this.toggleSwitch(state, this.PROFILE_NAME_TOGGLE)
    }

    private readonly PROFILE_NAME_TOGGLE_ON: string = "xpath=//*[@data-active='true' and @data-testid='profile-name-toggle']"
    private readonly PROFILE_NAME_TOGGLE_OFF: string = "xpath=//*[not(@data-active) and @data-testid='profile-name-toggle']"

    async waitForProfileNameToggle(state: any) {
        if (state == "on") {
            await this.helper.elementIsVisibleEnhanced(this.PROFILE_NAME_TOGGLE_ON)
        } else if (state == "off") {
            await this.helper.elementIsVisibleEnhanced(this.PROFILE_NAME_TOGGLE_OFF)
        }
    }

    private readonly IG_ACCOUNT_NAME: string = "xpath=//span[text()='<param>']"
    async igAccountNameIsVisible(name: string) {
        await this.helper.elementIsVisibleEnhanced(this.IG_ACCOUNT_NAME.replace('<param>', name))
    }
    private readonly PROFILE_NAME: string = "xpath=//div[@data-testid='profile-name']/input"
    private readonly PROFILE_NAME_EMPTY: string = "xpath=//div[@data-testid='profile-name']/input[@value='']"

    async clearProfileName() {
        await this.helper.clearTextBox(this.PROFILE_NAME)
    }
    private readonly PROFILE_NAME_FILLED: string = "xpath=//div[@data-testid ='profile-name']//input[contains(@value, '<param>')]"

    async enterProfileName(name: string) {
        await this.helper.enterText(this.PROFILE_NAME, name)
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_NAME_FILLED.replace('<param>', name))
    }
    async waitForProfileNameFieldToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_NAME)
    }
    private readonly IMAGE_URL: string = "xpath=//div[@data-testid='profile-image']/input"
    async clearImageUrl() {
        await this.helper.clearTextBox(this.IMAGE_URL)
    }

    private readonly IMAGE_URL_FILLED: string = "xpath=//div[@data-testid='profile-image']//input[@value = '<param>']"
    async enterImageUrl(url: string) {
        await this.helper.enterText(this.IMAGE_URL, url)
        await this.helper.elementIsVisibleEnhanced(this.IMAGE_URL_FILLED.replace("<param>", url))

    }
    private readonly DONE_BUTTON: string = "xpath=//button/div[text()='Done']"
    private readonly PREVIEW_LOCATOR: string = "#maker-smartnav-inline > div > div > div.QVTW__all.QVTW__flex.QVTW__flex-col.QVTW__items-center.QVTW__mx-auto.QVTW__text-center > img"

    async clickDoneButton() {
        await this.helper.elementIsVisibleEnhanced(this.DONE_BUTTON)
        await this.helper.clickOnElement(this.DONE_BUTTON)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }

    async clickDoneButtonEnhanced() {
        await this.helper.elementIsVisibleEnhanced(this.DONE_BUTTON)
        await this.helper.clickOnElement(this.DONE_BUTTON)
    }

    private readonly TOGGLES_ON_PROFILE_PAGE: string = "xpath=(//input[@type='text'][@placeholder='Start typing...']/ancestor::div//input[@type='checkbox'])[<param>]"
    async clickOnToggleButton(index: string) {
        await this.helper.clickOnElement(this.TOGGLES_ON_PROFILE_PAGE.replace('<param>', index))
    }
    private readonly PROFILE_NAME_TOGGLE: string = "xpath=//input[@data-testid='profile-name-toggle']"
    async clickOnProfileNameToggleButton() {
        await this.helper.clickOnElement(this.PROFILE_NAME_TOGGLE)
    }
    private readonly PROFILE_DESCRIPTION: string = "xpath=//div[@data-testid='profile-description']/textarea"
    async clearProfileDescription() {
        await this.helper.clearTextBox(this.PROFILE_DESCRIPTION)
    }
    async enterProfileDescription(description: string) {
        await this.helper.enterText(this.PROFILE_DESCRIPTION, description)
    }
    async waitForProfileDescriptionTextFieldToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_DESCRIPTION)
    }
    private readonly PROFILE_DESCRIPTION_TOGGLE: string = "xpath=//input[@data-testid='profile-description-toggle']"
    async clickOnProfileDescriptionToggleButton() {
        await this.helper.clickOnElement(this.PROFILE_DESCRIPTION_TOGGLE)
    }
    async profileDescriptionToggle(state) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_DESCRIPTION_TOGGLE)
        await this.toggleSwitch(state, this.PROFILE_DESCRIPTION_TOGGLE)
        await this.helper.waitFor(5000)
    }

    private readonly PROFILE_DESCRIPTION_TOGGLE_ON: string = "xpath=//*[@data-active='true' and @data-testid='profile-description-toggle']"
    private readonly PROFILE_DESCRIPTION_TOGGLE_OFF: string = "xpath=//*[not(@data-active) and @data-testid='profile-description-toggle']"
    async waitForProfileDescriptionToggle(state: any) {
        if (state == "on") {
            await this.helper.elementIsVisibleEnhanced(this.PROFILE_DESCRIPTION_TOGGLE_ON)
        } else if (state == "off") {
            await this.helper.elementIsVisibleEnhanced(this.PROFILE_DESCRIPTION_TOGGLE_OFF)
        }
    }

    private readonly PROFILE_BUTTON: string = "xpath=//input[@type='text'][@placeholder='Add label']"

    async clearProfileButtonText() {
        await this.helper.clearTextBox(this.PROFILE_BUTTON)
    }

    private readonly PROFILE_BUTTON_FILLED: string = "xpath=//div[@data-testid='profile-button']//input[@value='<param>']"
    async enterProfileButtonText(description: string) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_BUTTON)
        await this.helper.enterText(this.PROFILE_BUTTON, description)
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_BUTTON_FILLED.replace("<param>", description))

    }
    async waitForProfileButtonTextFieldToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_BUTTON)
    }
    async waitForProfileButtonTextFieldNotToBeDisplayed() {
        await this.helper.elementIsNotVisibleEnhanced(this.PROFILE_BUTTON)
    }
    private readonly PROFILE_BUTTON_TOGGLE: string = "xpath=//input[@data-testid='profile-button-toggle']"
    async clickOnProfileButtonToggleButton() {
        await this.helper.clickOnElement(this.PROFILE_BUTTON_TOGGLE)
    }
    async profileButtonToggle(state) {
        await this.toggleSwitch(state, this.PROFILE_BUTTON_TOGGLE)
    }
    private readonly PROFILE_BUTTON_LINK: string = "xpath=//div[@data-testid='profile-link']//input"
    async clearProfileButtonLink() {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_BUTTON_LINK)
        await this.helper.clearTextBox(this.PROFILE_BUTTON_LINK)
    }

    private readonly PROFILE_BUTTON_LINK_FILLED: string = "xpath=//div[@data-testid='profile-link']//input[@value = '<param>']"
    async enterProfileButtonLink(link: string) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_BUTTON_LINK)
        await this.helper.enterText(this.PROFILE_BUTTON_LINK, link)
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_BUTTON_LINK_FILLED.replace("<param>", link))
        await this.helper.waitFor()
    }

    private readonly EDIT_PROFILE_PANEL: string = "xpath=//div[@id='navigation-editor']"
    async editProfilePanelIsVisible() {
        return await this.helper.elementIsVisibleEnhanced(this.EDIT_PROFILE_PANEL)
    }
    async doneButtonIsVisible() {
        await this.helper.elementIsVisibleEnhanced("xpath=//div[text()='Edit profile']")
        return await this.helper.elementIsVisibleEnhanced(this.DONE_BUTTON)
    }
    private readonly DISCONNECT_BUTTON: string = "xpath=//button/div[text()='Disconnect']"
    async disconnectButtonIsClickable() {
        await this.helper.elementIsVisibleEnhanced(this.DISCONNECT_BUTTON)
        return await this.helper.isEnabled(this.DISCONNECT_BUTTON)
    }

}
