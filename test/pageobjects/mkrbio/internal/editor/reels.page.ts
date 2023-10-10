import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class ReelsPage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    private readonly REELS_TAB: string = "xpath=//div[@data-id='REELS']"
    async clickOnReelsTab() {
        await this.helper.clickOnElement(this.REELS_TAB)
    }
    private readonly IG_REELS_CARD: string = "xpath=(//div[@data-testid='ig-post-card'])[<param>]"
    async waitForIgReelsToBeDisplayed(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.IG_REELS_CARD.replace('<param>', index))
    }
    async hoverOnIGReels(index: string) {
        await this.helper.hoverOnElement(this.IG_REELS_CARD.replace('<param>', index))
    }
    async clickOnIGReels(index: string) {
        return await this.helper.clickOnElement(this.IG_REELS_CARD.replace('<param>', index))
    }

    private readonly IG_REELS_CARD_WITH_ATTRIBUTE: string = "xpath=(//div[@data-testid='ig-post-card' and @data-id])[<param>]"
    async getReelsIDWithIndex(index: string) {
        await this.helper.waitForAttribute(this.IG_REELS_CARD_WITH_ATTRIBUTE.replace('<param>', index))
        return await this.helper.getAttributeValue(this.IG_REELS_CARD.replace('<param>', index), 'data-id')
    }
    private readonly HIDE_SHOW_REELS_BUTTON: string = "xpath=//button[@data-testid='ig-hide']"
    async waitForReelsShowHideButtonToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.HIDE_SHOW_REELS_BUTTON)
    }
    async clickOnReelsHideButton() {
        await this.helper.clickOnElement(this.HIDE_SHOW_REELS_BUTTON)
    }

    private readonly REELS_TAG_PRODUCTS_BUTTON: string = "xpath=(//button[@data-testid='ig-tag-products'])"
    async waitForPostsTagProductsButtonToBeDisplayed() {
        await this.helper.clickOnElement(this.REELS_TAG_PRODUCTS_BUTTON)
    }
    async clickOnReelsTagProductsButton() {
        await this.helper.clickOnElement(this.REELS_TAG_PRODUCTS_BUTTON)
    }
    private readonly DETAILS_PANEL: string = "xpath=//div[@data-testid='category-editor-tabs']/div[@data-id='Details']"
    async validateDetailsPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.DETAILS_PANEL)
    }
    private readonly ADD_PRODUCTS_TO_MEDIA_POPUP: string = "xpath=//div[text()='Add products to this media']"
    async validateAddProductsToMediaPopupIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.ADD_PRODUCTS_TO_MEDIA_POPUP)
    }

    async validateAddProductsToMediaPopupIsNotOpened() {
        await this.helper.elementIsNotVisibleEnhanced(this.ADD_PRODUCTS_TO_MEDIA_POPUP)
    }
    private readonly ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR: string = "xpath=//input[@placeholder='Search by product title or ID...']"
    async enterProductTitleOnSearchBar(text: string) {
        await this.helper.typeTextBox(this.ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR, text)
        // await this.helper.keyboardOps('enter')
    }
    private readonly CLOSE_BUTTON_ON_ADD_PRODUCTS_TO_MEDIA_POPUP: string = "xpath=//button[@data-testid='hotspots-editor-close-btn']"
    async clickPopUpCloseButton() {
        await this.helper.clickOnElement(this.CLOSE_BUTTON_ON_ADD_PRODUCTS_TO_MEDIA_POPUP)
        await this.helper.waitForNavigation()
    }

    private readonly TAG_PRODUCTS_ON_DETAILS_PANEL: string = "xpath=//button[@data-testid='hotspots-tagproducts']"
    async clickOnTagProductsButtonOnDetailsPanel() {
        await this.helper.clickOnElement(this.TAG_PRODUCTS_ON_DETAILS_PANEL)
    }


    private readonly PRODUCT_TITLE_ONSEARCH_DROPDOWN: string = "xpath=//div[contains(text(), 'Add products')]/..//descendant::div[contains(text(),'<param>')]"
    async validateSearchResultIsDisplayed(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
    }
    async clickOnProductNameOnSearchResults(title: string) {
        await this.helper.clickOnElement(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
    }
    private readonly PRODUCT_TITLE_ON_LIST: string = "xpath=//span[@data-testid='productlist-node-title']//div[text()='<param>']"
    async waitForTaggedProductInTheList(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ON_LIST.replace('<param>', title))
    }

    async validateTaggedProductInTheList(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ON_LIST.replace('<param>', title))
    }
    async validateTaggedProductNotInTheList(title: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.PRODUCT_TITLE_ON_LIST.replace('<param>', title))
    }
    private readonly UNFEATURE_BUTTON: string = "xpath=//button[@data-testid='unfeature-button']"
    async clickOnUnfeaturedButton() {
        await this.helper.elementIsVisibleEnhanced(this.UNFEATURE_BUTTON)
        await this.helper.clickOnElement(this.UNFEATURE_BUTTON)
    }

    private readonly EDIT_BUTTON_ON_REELS_DETAILS_PANEL: string = "xpath=//div[@id='navigation-editor']//button/div[text()='Edit']"
    async clickOnEditButtonOnReelsDetailsPanel() {
        await this.helper.clickOnElement(this.EDIT_BUTTON_ON_REELS_DETAILS_PANEL)
    }
    private readonly REELS_TITLE: string = "xpath=//div[@data-testid='field-title']//input"
    async enterReelsTitle(title: string) {
        await this.helper.clearTextBox(this.REELS_TITLE)
        await this.helper.fillText(this.REELS_TITLE, title)
    }
    private readonly REELS_TITLE_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid='field-title']//input[@value]"
    async getReplacedReelsTitle() {
        await this.helper.waitForAttribute(this.REELS_TITLE_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.REELS_TITLE, "value")
    }
    private readonly LANDING_PAGE_DONE_BUTTON: string = "xpath=//button[@data-testid = 'edit-details-done']"
    async clickOnLandingPageDoneButton() {
        await this.helper.clickOnElement(this.LANDING_PAGE_DONE_BUTTON)
    }
    private readonly MANAGE_YOUR_VIDEOS_BUTTON: string = "xpath=//button[@data-testid='edit-details-manage-video-button']"
    async clickOnManageVideosButton() {
        await this.helper.clickOnElement(this.MANAGE_YOUR_VIDEOS_BUTTON)
    }
    private readonly MANAGE_VIDEOS_POPUP: string = "//h1[text()='Add Media']"
    async manageVideosPopupIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.MANAGE_VIDEOS_POPUP)
    }
    private readonly UPLOAD_BUTTON_ON_MANAGE_VIDEOS_POPUP: string = "xpath=//button/div[text()='Upload New']"
    async uploadButtonOnmanageVideosPopUpIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.UPLOAD_BUTTON_ON_MANAGE_VIDEOS_POPUP)
    }
    private readonly USE_BUTTON: string = "xpath=(//div[@data='isHidden? false']/div/div)[<param>]"
    async clickOnUseButton(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.USE_BUTTON.replace('<param>', index))
        await this.helper.clickOnElement(this.USE_BUTTON.replace('<param>', index))
    }
    private readonly ADD_BUTTON_ON_MEDIA_MANAGER: string = "xpath=//button/div[text()='Add']"
    async clickOnAddButton() {
        await this.helper.clickOnElement(this.ADD_BUTTON_ON_MEDIA_MANAGER)
    }
    private readonly REELS_LINK_TEXTBOX: string = "xpath=//div[@data-testid='field-link']//input"
    async reelsLinkInputField(link: string) {
        await this.helper.clearTextBox(this.REELS_LINK_TEXTBOX)
        await this.helper.fillText(this.REELS_LINK_TEXTBOX, link)
        await this.helper.waitFor(2000)
    }
    private readonly REELS_LINK_TEXTBOX_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid='field-link']//input[@value]"
    async getUrlOnPostsLinkInputField() {
        await this.helper.waitForAttribute(this.REELS_LINK_TEXTBOX_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.REELS_LINK_TEXTBOX, "value")
    }
    private readonly HIDE_BUTTON_ON_DETAILS_PANEL: string = "xpath=//button/div[text()='Hide']"
    async clickOnHideButtonOnDetailsPanel() {
        await this.helper.clickOnElement(this.HIDE_BUTTON_ON_DETAILS_PANEL)
    }
    private readonly SHOW_BUTTON_ON_DETAILS_PANEL: string = "xpath=//button/div[text()='Show']"
    async clickOnShowButtonOnDetailsPanel() {
        await this.helper.clickOnElement(this.SHOW_BUTTON_ON_DETAILS_PANEL)
    }
    private readonly DESCRIPTION_REELS_TEXTBOX: string = "xpath=//div[@data-testid='field-description']/textarea"
    async editReelsDescription(description: string) {
        await this.helper.clearTextBox(this.DESCRIPTION_REELS_TEXTBOX)
        await this.helper.fillText(this.DESCRIPTION_REELS_TEXTBOX, description)
        await this.helper.waitFor(2000)
    }
    async getDescriptionText() {
        return this.helper.getTextOfAnElement(this.DESCRIPTION_REELS_TEXTBOX)
    }
    private readonly DESCRIPTION_REELS_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='edit-details-showDescription']"
    async reelsDescriptionToggle(state) {
        await this.toggleSwitch(state, this.DESCRIPTION_REELS_TOGGLE_BUTTON)
    }




    private readonly POSTS_MEDIA_TITLE: string = "//div[@data-testid='qv-stories-posts-node-item']//span[@data-testid='qv-stories-posts-node-title']"
    async verifyNoOfMediaAssociatedToPosts() {
        return await this.helper.getCountOfElements(this.POSTS_MEDIA_TITLE)
    }

    private readonly EDIT_HIGHLIGHTS_COVER_BUTTON: string = "xpath=//div[text() = 'Edit Highlight Cover']/.."
    async clickOnEditHighlightCover() {
        await this.helper.clickOnElement(this.EDIT_HIGHLIGHTS_COVER_BUTTON)
    }
    private readonly URL_INPUTBOX: string = "xpath=//div[text() = 'URL']/following::input[@type='text']"
    private readonly URL_FILLED_INPUTBOX: string = "xpath=//div[@data-testid='category-image-url']//input[@value='<param>']"
    async writeUrlInInputField(url: string) {
        await this.helper.elementIsVisibleEnhanced(this.URL_INPUTBOX)
        await this.helper.enterText(this.URL_INPUTBOX, url)
        await this.helper.elementIsVisibleEnhanced(this.URL_FILLED_INPUTBOX.replace("<param>", url))
    }
    private readonly URL_INPUTBOX_WITH_ATTRIBUTE: string = "xpath=//div[text() = 'URL']/following::input[@type='text' and @value]"
    async getPostsCoverImageUrl() {
        await this.helper.waitForAttribute(this.URL_INPUTBOX_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.URL_INPUTBOX, "value")
    }

    private readonly EDIT_BUTTON_ON_POST_CARD: string = "xpath=(//button[@data-testid= 'qv-stories-post-edit'])[<param>]"
    async clickOnButtonOfNthPostCardInHighlight(index: string) {
        await this.helper.clickOnElement(this.EDIT_BUTTON_ON_POST_CARD.replace("<param>", index))
    }
    private readonly MEDIA_TITLE_ON_POSTS: string = "xpath=(//span[@data-testid='qv-stories-posts-node-title'])[<param>]"
    async getTitleOfNthMediaOnPosts(index: string) {
        return await this.helper.getTextOfAnElement(this.MEDIA_TITLE_ON_POSTS.replace('<param>', index))
    }
    async isPostCardInHighlightVisible(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_TITLE_ON_POSTS.replace("<param>", index))
    }

    private readonly POSTS_MEDIA_TITLE_TEXTBOX: string = "xpath=//div[@data-testid = 'edit-details-title']//input"
    async editPostsMediaTitle(name: string) {
        await this.helper.clearTextBox(this.POSTS_MEDIA_TITLE_TEXTBOX)
        await this.helper.fillText(this.POSTS_MEDIA_TITLE_TEXTBOX, name)
        await this.helper.waitFor(2000)

    }
    private readonly ADD_MEDIA_BUTTON: string = "xpath=//button[@data-testid = 'qv-stories-addmedia']"
    async clickOnAddMedia() {
        await this.helper.clickOnElement(this.ADD_MEDIA_BUTTON)
    }
    private readonly FROM_POSTS_AND_REELS_DROPDOWN: string = "xpath=//div[@data-testid = 'qv-stories-from-posts']"
    async clickOnFromPostsAndReels() {
        await this.helper.clickOnElement(this.FROM_POSTS_AND_REELS_DROPDOWN)
    }
    private readonly IGPOSTS_SUBMENU: string = "xpath=//div[@data-testid = 'qv-stories-media-modal']//div[@data-id = 'POSTS']"
    async clickOnPostsSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.IGPOSTS_SUBMENU)
        await this.helper.clickOnElement(this.IGPOSTS_SUBMENU)
    }
    private readonly NEW_HIGHLIGHT_LATEST_IGPOST_CARD: string = "xpath=(//div[@data-testid = 'qv-stories-media-modal']//div[@data-testid = 'ig-post-card'])[1]"
    async selectLatestPostOnHighlightsModal() {
        await this.helper.elementIsVisibleEnhanced(this.NEW_HIGHLIGHT_LATEST_IGPOST_CARD)
        await this.helper.clickOnElement(this.NEW_HIGHLIGHT_LATEST_IGPOST_CARD)
    }
    private readonly CREATE_NEW_HIGHLIGHT_ADD_BUTTON: string = "xpath=//button[@data-testid = 'media-manager-add-btn']"
    async clickOnHighlightsModalDoneButton() {
        await this.helper.clickOnElement(this.CREATE_NEW_HIGHLIGHT_ADD_BUTTON)
    }
    private readonly DELETE_BUTTON_ON_POST_CARD: string = "xpath=(//button[@data-testid= 'qv-stories-post-delete'])[<param>]"
    async deleteNthPostCardInHighlight(index: string) {
        await this.helper.clickOnElement(this.DELETE_BUTTON_ON_POST_CARD.replace("<param>", index))
    }

    private readonly VIDEO_URL_INPUT_FIELD: string = "xpath=//div[@data-testid='category-video-url']/input"
    async writeUrlInVideoInputField(url: string) {
        await this.helper.fillText(this.VIDEO_URL_INPUT_FIELD, url)
        await this.helper.waitForPageLoad()
        await this.helper.waitForNavigation()
    }
    private readonly VIDEO_URL_INPUT_FIELD_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid='category-video-url']/input[@value]"
    async getVideoUrlText() {
        await this.helper.waitForAttribute(this.VIDEO_URL_INPUT_FIELD_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.VIDEO_URL_INPUT_FIELD, "value")
    }
    private readonly DELETE_VIDEO_BUTTON: string = "xpath=//button[@data-testid='category-video-media-remove']"
    async clickOnVideoThumbnailDeleteButton() {
        await this.helper.hoverOnElement(this.DELETE_VIDEO_BUTTON)
        await this.helper.waitFor(500)
        await this.helper.clickOnElement(this.DELETE_VIDEO_BUTTON)
    }
}