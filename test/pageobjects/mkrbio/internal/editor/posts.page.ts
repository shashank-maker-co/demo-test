import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class PostsPage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    private readonly IG_POST_CARD: string = "xpath=(//div[@data-testid='ig-post-card'])[<param>]"
    async waitForIgPostsToBeDisplayed(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.IG_POST_CARD.replace('<param>', index))
    }
    async hoverOnIGPost(index) {
        await this.helper.elementIsVisibleEnhanced(this.IG_POST_CARD.replace('<param>', index))
        await this.helper.hoverOnElement(this.IG_POST_CARD.replace('<param>', index))
    }
    private readonly IG_POST_CARD_PIN_BUTTON: string = "xpath=(//div[@data-testid='ig-post-card'])[<param>]//button[@data-testid='ig-pin']"
    async waitForIgPinButtonToBeDisplayed(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.IG_POST_CARD_PIN_BUTTON.replace('<param>', index))
    }
    async clickOnIgPinButton(index) {
        await this.helper.clickOnElement(this.IG_POST_CARD_PIN_BUTTON.replace('<param>', index))
    }
    private readonly IG_POST: string = "xpath=(//div[@data-testid='ig-post-card'])[<param>]"
    private readonly IG_POST_WITH_ATTRIBUTE: string = "xpath=(//div[@data-testid='ig-post-card' and @data-id])[<param>]"
    async getPostIDWithIndex(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.IG_POST.replace('<param>', index))
        await this.helper.waitForAttribute(this.IG_POST_WITH_ATTRIBUTE.replace('<param>', index))
        return await this.helper.getAttributeValue(this.IG_POST.replace('<param>', index), 'data-id')
    }
    async clickOnIGpost(index: string) {
        return await this.helper.clickOnElement(this.IG_POST.replace('<param>', index))
    }
    private readonly HIDE_POSTS_BUTTON: string = "xpath=//button[@data-testid='ig-hide']"
    async waitForPostsHideButtonToBeDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.HIDE_POSTS_BUTTON)
    }
    async clickOnPostsHideButton() {
        await this.helper.clickOnElement(this.HIDE_POSTS_BUTTON)
    }
    private readonly TAG_PRODUCTS_POSTS_BUTTON: string = "xpath=(//button[@data-testid='ig-tag-products'])"
    async clickOnPostsTagProductsButton() {
        await this.helper.clickOnElement(this.TAG_PRODUCTS_POSTS_BUTTON)
    }
    async waitForPostsTagProductsButtonToBeDisplayed() {
        await this.helper.clickOnElement(this.TAG_PRODUCTS_POSTS_BUTTON)
    }
    private readonly ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR: string = "xpath=//input[@placeholder='Search by product title or ID...']"
    async enterProductTitleOnSearchBar(text: string) {
        await this.helper.elementIsVisibleEnhanced(this.ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR)
        await this.helper.typeTextBox(this.ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR, text)
        // await this.helper.keyboardOps('enter')
    }
    private readonly CLOSE_BUTTON_ON_ADD_PRODUCTS_TO_MEDIA_POPUP: string = "xpath=//button[@data-testid='hotspots-editor-close-btn']"
    async clickPopUpCloseButton() {
        await this.helper.clickOnElement(this.CLOSE_BUTTON_ON_ADD_PRODUCTS_TO_MEDIA_POPUP)
    }
    private readonly DETAILS_PANEL: string = "xpath=//div[@data-testid='category-editor-tabs']/div[@data-id='Details']"
    async validateDetailsPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.DETAILS_PANEL)
    }
    private readonly TAG_PRODUCTS_ON_DETAILS_PANEL: string = "xpath=//button[@data-testid='hotspots-tagproducts']"
    async clickOnTagProductsButtonOnDetailsPanel() {
        await this.helper.clickOnElement(this.TAG_PRODUCTS_ON_DETAILS_PANEL)
    }
    private readonly ADD_PRODUCTS_TO_MEDIA_POPUP: string = "xpath=//div[text()='Add products to this media']"
    async validateAddProductsToMediaPopupIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.ADD_PRODUCTS_TO_MEDIA_POPUP)
    }
    async validateAddProductsToMediaPopupIsNotOpened() {
        await this.helper.elementIsNotVisibleEnhanced(this.ADD_PRODUCTS_TO_MEDIA_POPUP)
    }
    private readonly PRODUCT_TITLE_ONSEARCH_DROPDOWN: string = "xpath=//div[contains(text(), 'Add products')]/..//descendant::div[contains(text(),'<param>')]"
    async validateSearchResultIsDisplayed(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
    }
    async validateSearchResultIsNotDisplayed(title: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
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
        await this.helper.clickOnElement(this.UNFEATURE_BUTTON)
    }
    private readonly POSTS_MEDIA_TITLE: string = "//div[@data-testid='qv-stories-posts-node-item']//span[@data-testid='qv-stories-posts-node-title']"
    async verifyNoOfMediaAssociatedToPosts() {
        return await this.helper.getCountOfElements(this.POSTS_MEDIA_TITLE)
    }
    private readonly POSTS_TITLE: string = "xpath=//div[@data-testid='field-title']//input"
    async enterPostTitle(title: string) {
        await this.helper.clearTextBox(this.POSTS_TITLE)
        await this.helper.enterText(this.POSTS_TITLE, title)
    }
    private readonly POSTS_TITLE_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid='field-title']//input[@value]"
    async getReplacedPostsTitle() {
        await this.helper.waitForAttribute(this.POSTS_TITLE_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.POSTS_TITLE, "value")
    }
    private readonly LANDING_PAGE_DONE_BUTTON: string = "xpath=//button[@data-testid = 'edit-details-done']"
    async clickOnLandingPageDoneButton() {
        await this.helper.clickOnElement(this.LANDING_PAGE_DONE_BUTTON)
    }
    private readonly EDIT_HIGHLIGHTS_COVER_BUTTON: string = "xpath=//div[text() = 'Edit Highlight Cover']/.."
    async clickOnEditHighlightCover() {
        await this.helper.clickOnElement(this.EDIT_HIGHLIGHTS_COVER_BUTTON)
    }
    private readonly URL_IMAGE_INPUTBOX: string = "xpath=//div[@data-testid = 'category-image-url']//input"
    private readonly URL_IMAGE_FILLED_INPUTBOX: string = "xpath=//div[@data-testid='category-image-url']//input[@value='<param>']"
    async writeUrlInImageInputField(url: string) {
        await this.helper.elementIsVisibleEnhanced(this.URL_IMAGE_INPUTBOX)
        await this.helper.fillText(this.URL_IMAGE_INPUTBOX, url)
        await this.helper.elementIsVisibleEnhanced(this.URL_IMAGE_FILLED_INPUTBOX.replace("<param>", url))
    }

    private readonly URL_IMAGE_INPUTBOX_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid = 'category-image-url']//input[@value]"
    async getPostsCoverImageUrl() {
        await this.helper.waitForAttribute(this.URL_IMAGE_INPUTBOX_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.URL_IMAGE_INPUTBOX, "value")
    }
    private readonly HIDE_BUTTON_ON_DETAILS_PANEL: string = "xpath=//button/div[text()='Hide']"
    async clickOnHideButtonOnDetailsCoverImagePanel() {
        await this.helper.clickOnElement(this.HIDE_BUTTON_ON_DETAILS_PANEL)
    }
    private readonly SHOW_BUTTON_ON_DETAILS_PANEL: string = "xpath=//button/div[text()='Show']"
    async clickOnShowButtonOnDetailsCoverImagePanel() {
        await this.helper.clickOnElement(this.SHOW_BUTTON_ON_DETAILS_PANEL)
    }
    private readonly EDIT_BUTTON_ON_POST_CARD: string = "xpath=(//button[@data-testid= 'qv-stories-post-edit'])[<param>]"
    async clickOnButtonOfNthPostCardInHighlight(index: string) {
        await this.helper.clickOnElement(this.EDIT_BUTTON_ON_POST_CARD.replace("<param>", index))
    }
    private readonly MEDIA_TITLE_ON_POSTS: string = "xpath=(//span[@data-testid='qv-stories-posts-node-title'])[<param>]"
    async getTitleOfNthMediaOnPosts(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_TITLE_ON_POSTS.replace('<param>', index))
        return await this.helper.getTextOfAnElement(this.MEDIA_TITLE_ON_POSTS.replace('<param>', index))
    }
    async isPostCardInHighlightVisible(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_TITLE_ON_POSTS.replace("<param>", index))
    }
    async isPostCardInHighlightNotVisible(index: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.MEDIA_TITLE_ON_POSTS.replace("<param>", index))
    }

    private readonly POSTS_MEDIA_TITLE_TEXTBOX: string = "xpath=//div[@data-testid='field-title']//input"
    async editPostsMediaTitle(name: string) {
        await this.helper.clearTextBox(this.POSTS_MEDIA_TITLE_TEXTBOX)
        await this.helper.fillText(this.POSTS_MEDIA_TITLE_TEXTBOX, name)
    }
    private readonly ADD_MEDIA_BUTTON: string = "xpath=//button[@data-testid = 'qv-stories-addmedia']"
    async clickOnAddMedia() {
        await this.helper.clickOnElement(this.ADD_MEDIA_BUTTON)
    }
    private readonly FROM_MEDIA_MANAGER_DROPDOWN: string = "xpath=//div[@data-testid = 'qv-stories-from-posts']"
    async clickOnFromMediaManagerDropdown() {
        await this.helper.clickOnElement(this.FROM_MEDIA_MANAGER_DROPDOWN)
    }
    private readonly IGPOSTS_SUBMENU: string = "xpath=//div[@data-testid = 'qv-stories-media-modal']//div[@data-id = 'POSTS']"
    async clickOnPostsSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.IGPOSTS_SUBMENU)
        await this.helper.clickOnElement(this.IGPOSTS_SUBMENU)
    }
    private readonly ALL_SUBMENU: string = "xpath=//div[@data-testid= 'media-manager-horizontal-tabs']//div[text() = 'All']"
    async clickOnAllSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.ALL_SUBMENU, undefined, 15000)
        await this.helper.clickOnElement(this.ALL_SUBMENU)
    }

    private readonly IMAGES_SUBMENU: string = "xpath=//div[@data-testid= 'media-manager-horizontal-tabs']//div[text() = 'Images']"
    async clickOnImagesSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.IMAGES_SUBMENU)
        await this.helper.clickOnElement(this.IMAGES_SUBMENU)
    }

    private readonly IGREELS_SUBMENU: string = "xpath=//div[@data-testid= 'media-manager-horizontal-tabs']//div[text() = 'Videos']"
    async clickOnReelsSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.IGREELS_SUBMENU)
        await this.helper.clickOnElement(this.IGREELS_SUBMENU)
    }
    private readonly NEW_HIGHLIGHT_LATEST_IGPOST_CARD: string = "xpath=(//div[@data-testid = 'qv-stories-media-modal']//div[@data-testid = 'ig-post-card'])[1]"
    async selectLatestPostOnHighlightsModal() {
        await this.helper.elementIsVisibleEnhanced(this.NEW_HIGHLIGHT_LATEST_IGPOST_CARD)
        await this.helper.clickOnElement(this.NEW_HIGHLIGHT_LATEST_IGPOST_CARD)
    }

    private readonly CREATE_NEW_HIGHLIGHT_ADD_BUTTON: string = "xpath=//button[@data-testid = 'media-manager-add-btn']"
    async clickOnHighlightsModalAddButton() {
        await this.helper.elementIsVisibleEnhanced(this.CREATE_NEW_HIGHLIGHT_ADD_BUTTON)
        await this.helper.clickOnElement(this.CREATE_NEW_HIGHLIGHT_ADD_BUTTON)
    }

    private readonly NEW_HIGHLIGHT_NTH_IGPOST_CARD: string = "xpath=(//div[@data-testid= 'media-manager-card-content'])[<param>]"
    async selectNthPostOnHighlightsModal(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.NEW_HIGHLIGHT_NTH_IGPOST_CARD.replace("<param>", index), undefined, 15000)
        await this.helper.clickOnElement(this.NEW_HIGHLIGHT_NTH_IGPOST_CARD.replace("<param>", index))
    }
    private readonly DELETE_BUTTON_ON_POST_CARD: string = "xpath=(//button[@data-testid= 'qv-stories-post-delete'])[<param>]"
    async deleteNthPostCardInHighlight(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.DELETE_BUTTON_ON_POST_CARD.replace("<param>", index))
        await this.helper.clickOnElement(this.DELETE_BUTTON_ON_POST_CARD.replace("<param>", index))
    }
    private readonly EDIT_BUTTON_ON_POSTS_DETAILS_PANEL: string = "xpath=//div[@id='navigation-editor']//button/div[text()='Edit']"
    async clickOnEditButtonOnPostsDetailsPanel() {
        await this.helper.clickOnElement(this.EDIT_BUTTON_ON_POSTS_DETAILS_PANEL)
    }
    private readonly URL_VIDEO_INPUTBOX: string = "xpath=//div[@data-testid = 'category-video-url']//input"
    private readonly URL_VIDEO_FILLED_INPUTBOX: string = "xpath=//div[@data-testid='category-video-url']//input[@value='<param>']"
    async writeUrlInVideoInputField(url: string) {
        await this.helper.elementIsVisibleEnhanced(this.URL_VIDEO_INPUTBOX)
        await this.helper.fillText(this.URL_VIDEO_INPUTBOX, url)
        await this.helper.elementIsVisibleEnhanced(this.URL_VIDEO_FILLED_INPUTBOX.replace("<param>", url))
    }

    private readonly URL_VIDEO_INPUTBOX_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid = 'category-video-url']//input[@value]"
    async getVideoUrlText() {
        await this.helper.waitForAttribute(this.URL_VIDEO_INPUTBOX_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.URL_VIDEO_INPUTBOX, "value")
    }
    private readonly DELETE_VIDEO_BUTTON: string = "xpath=//button[@data-testid='category-video-media-remove']"
    async clickOnVideoThumbnailDeleteButton() {
        await this.helper.hoverOnElement(this.DELETE_VIDEO_BUTTON)
        await this.helper.elementIsVisibleEnhanced(this.DELETE_VIDEO_BUTTON)
        await this.helper.clickOnElement(this.DELETE_VIDEO_BUTTON)
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
        await this.helper.clickOnElement(this.USE_BUTTON.replace('<param>', index))
    }
    private readonly POST_LINK_TEXTBOX: string = "xpath=//div[@data-testid='field-link']//input"
    private readonly POST_LINK_FILLED_TEXTBOX: string = "xpath=//div[@data-testid='field-link']//input[@value='<param>']"

    async postsLinkInputField(link: string) {
        await this.helper.clearTextBox(this.POST_LINK_TEXTBOX)
        await this.helper.enterText(this.POST_LINK_TEXTBOX, link)
        await this.helper.elementIsVisibleEnhanced(this.POST_LINK_FILLED_TEXTBOX.replace("<param>", link))
    }

    private readonly POST_LINK_TEXTBOX_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid='field-link']//input[@value]"
    async getUrlOnPostsLinkInputField() {
        await this.helper.waitForAttribute(this.POST_LINK_TEXTBOX_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.POST_LINK_TEXTBOX, "value")
    }
    private readonly ADD_BUTTON_ON_MEDIA_MANAGER: string = "xpath=//button/div[text()='Add']"
    async clickOnAddButton() {
        await this.helper.clickOnElement(this.ADD_BUTTON_ON_MEDIA_MANAGER)
    }
}