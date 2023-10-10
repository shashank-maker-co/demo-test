// playwright-dev-page.ts
import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class HighlightsPage extends BasePage {
    readonly helper: Helper;


    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }

    private readonly CREATE_NEW_HIGHLIGHT_BUTTON: string = "xpath=//button[@data-testid = 'ig-highlights-createnew']"
    private readonly CREATE_NEW_HIGHLIGHT_MODAL: string = "xpath=//div[@data-testid = 'qv-stories-media-modal']"
    private readonly CREATE_NEW_HIGHLIGHT_IG_TAB: string = "xpath=//div[@data-testid = 'qv-stories-media-modal']//div[@data-testid = 'ig-tabs']"
    async verifyCreateNewHighlightIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.CREATE_NEW_HIGHLIGHT_BUTTON)
    }

    async clickOnCreateNewHighlightButton() {
        await this.helper.elementIsVisibleEnhanced(this.CREATE_NEW_HIGHLIGHT_BUTTON)
        await this.helper.clickOnElement(this.CREATE_NEW_HIGHLIGHT_BUTTON)
    }

    private readonly ALL_SUBMENU: string = "xpath=//div[@data-testid='media-manager-horizontal-tabs']//div[@data-id='All']"
    async clickOnAllSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.ALL_SUBMENU, undefined, 15000)
        await this.helper.clickOnElement(this.ALL_SUBMENU)
    }

    private readonly IMAGES_SUBMENU: string = "xpath=//div[@data-testid='media-manager-horizontal-tabs']//div[@data-id='Images']"
    async clickOnImagesSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.IMAGES_SUBMENU)
        await this.helper.clickOnElement(this.IMAGES_SUBMENU)
    }

    private readonly IGREELS_SUBMENU: string = "xpath=//div[@data-testid= 'media-manager-horizontal-tabs']//div[text() = 'Videos']"
    async clickOnReelsSubMenu() {
        await this.helper.elementIsVisibleEnhanced(this.IGREELS_SUBMENU)
        await this.helper.clickOnElement(this.IGREELS_SUBMENU)
    }

    private readonly NEW_HIGHLIGHT_NTH_IGPOST_CARD: string = "xpath=(//div[@data-testid= 'media-manager-card-content'])[<param>]"
    async selectNthPostOnHighlightsModal(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.NEW_HIGHLIGHT_NTH_IGPOST_CARD.replace("<param>", index), undefined, 15000)
        await this.helper.clickOnElement(this.NEW_HIGHLIGHT_NTH_IGPOST_CARD.replace("<param>", index))
    }

    private readonly NEW_HIGHLIGHT_LATEST_IGREEL_CARD: string = "xpath=(//div[@data-testid = 'qv-stories-media-modal']//div[@data-testid = 'ig-post-card'])[1]"
    async selectLatestReelOnHighlightsModal() {
        await this.helper.elementIsVisibleEnhanced(this.NEW_HIGHLIGHT_LATEST_IGREEL_CARD)
        await this.helper.clickOnElement(this.NEW_HIGHLIGHT_LATEST_IGREEL_CARD)
    }

    private readonly CREATE_NEW_HIGHLIGHT_ADD_BUTTON: string = "xpath=//button[@data-testid = 'media-manager-add-btn']"
    async clickOnHighlightsModalAddButton() {
        await this.helper.elementIsVisibleEnhanced(this.CREATE_NEW_HIGHLIGHT_ADD_BUTTON)
        await this.helper.clickOnElement(this.CREATE_NEW_HIGHLIGHT_ADD_BUTTON)
    }

    private readonly CREATE_NEW_HIGHLIGHT_CLOSE_BUTTON: string = "xpath=//button[@data-testid = 'media-manager-close-btn']"
    async clickOnHighlightsModalCloseButton() {
        await this.helper.elementIsVisibleEnhanced(this.CREATE_NEW_HIGHLIGHT_CLOSE_BUTTON)
        await this.helper.clickOnElement(this.CREATE_NEW_HIGHLIGHT_CLOSE_BUTTON)
    }
    private readonly NAME_NEW_HIGHLIGHT_TEXTBOX: string = "xpath=//div[@data-testid = 'field-title']//input"
    private readonly NAME_NEW_HIGHLIGHT_FILLED_TEXTBOX: string = "xpath=//div[@data-testid='field-title']//input[@value='<param>']"
    private readonly DELETE_POPUP: string = "xpath=//button[@title='Delete']"
    async editNameOfNewHighlight(name: string) {
        await this.helper.elementIsVisibleEnhanced(this.NAME_NEW_HIGHLIGHT_TEXTBOX)
        await this.helper.clickOnElement(this.NAME_NEW_HIGHLIGHT_TEXTBOX)
        await this.helper.clearTextBoxUsingBackspace(this.NAME_NEW_HIGHLIGHT_TEXTBOX)
        if (await this.helper.isDisplayed(this.DELETE_POPUP) == true) {
            await this.helper.clickOnElement(this.DELETE_POPUP)
        }
        else { }
        await this.helper.typeTextBox(this.NAME_NEW_HIGHLIGHT_TEXTBOX, name)
        await this.helper.elementIsVisibleEnhanced(this.NAME_NEW_HIGHLIGHT_FILLED_TEXTBOX.replace("<param>", name))
    }

    private readonly DESCRIPTION_NEW_HIGHLIGHT_POST_TEXTBOX: string = "xpath=//div[@data-testid = 'field-description']//textarea"
    private readonly DESCRIPTION_NEW_HIGHLIGHT_FILLED_TEXTBOX: string = "xpath=//div[@data-testid='field-description']//textarea[text()='<param>']"
    async editDescriptionOfNewHighlight(description: string) {
        await this.helper.fillText(this.DESCRIPTION_NEW_HIGHLIGHT_POST_TEXTBOX, description)
        await this.helper.elementIsVisibleEnhanced(this.DESCRIPTION_NEW_HIGHLIGHT_FILLED_TEXTBOX.replace("<param>", description))
    }

    private readonly LINK_NEW_HIGHLIGHT_POST_TEXTBOX: string = "xpath=//div[@data-testid = 'field-link']//input"
    private readonly LINK_NEW_HIGHLIGHT_POST_FILLED_TEXTBOX: string = "xpath=//div[@data-testid='field-link']//input[@value='<param>']"
    private readonly LINK_NEW_HIGHLIGHT_POST_DROPDOWN: string = "xpath=//div[text()='<param>']"

    async editLinkOfNewHighlight(link: string) {
        await this.helper.elementIsVisibleEnhanced(this.LINK_NEW_HIGHLIGHT_POST_TEXTBOX)
        await this.helper.clickOnElement(this.LINK_NEW_HIGHLIGHT_POST_TEXTBOX)
        await this.helper.fillText(this.LINK_NEW_HIGHLIGHT_POST_TEXTBOX, link)
        await this.helper.clickOnElement(this.LINK_NEW_HIGHLIGHT_POST_DROPDOWN.replace("<param>", link))

        await this.helper.elementIsVisibleEnhanced(this.LINK_NEW_HIGHLIGHT_POST_FILLED_TEXTBOX.replace("<param>", link))
    }

    private readonly NAME_NEW_HIGHLIGHT_TEXTBOX_WITH_ATTRIBUTE_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid = 'field-title']//input[@value]"
    async verifyTitleHasText() {
        await this.helper.waitForAttribute(this.NAME_NEW_HIGHLIGHT_TEXTBOX_WITH_ATTRIBUTE_WITH_ATTRIBUTE)
        return await this.helper.getAttributeValue(this.NAME_NEW_HIGHLIGHT_TEXTBOX, "value")
    }


    // private readonly SHOW_DONE_BUTTON: string = "xpath=//button[@data-testid = 'edit-details-done']"
    // async clickOnShowButton() {
    //     await this.helper.clickOnElement(this.LANDING_PAGE_DONE_BUTTON)
    // }


    private readonly LANDING_PAGE_DONE_BUTTON: string = "xpath=//button[@data-testid = 'edit-details-done']"
    async clickOnLandingPageDoneButton() {
        await this.helper.clickOnElement(this.LANDING_PAGE_DONE_BUTTON)
        await this.helper.waitFor(5000)

    }
    async landingPageDoneButtonIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.LANDING_PAGE_DONE_BUTTON)
    }

    private readonly ALL_HIGHLIGHT_CARDS: string = "xpath=//button[@data-testid='ig-highlights-item']//div[text() ='<param>']"
    async verifyNewHighlightIsCreatedWithName(nameOfNewHighlight: any) {
        await this.helper.elementIsVisibleEnhanced(this.ALL_HIGHLIGHT_CARDS.replace("<param>", nameOfNewHighlight))
    }

    async verifyNewHighlightIsNotCreatedWithName(nameOfNewHighlight: any) {
        await this.helper.elementIsNotVisibleEnhanced(this.ALL_HIGHLIGHT_CARDS.replace("<param>", nameOfNewHighlight))
    }

    private readonly ADD_MEDIA_BUTTON: string = "xpath=//button[@data-testid = 'qv-stories-addmedia']"
    async clickOnAddMedia() {
        await this.helper.clickOnElement(this.ADD_MEDIA_BUTTON)
    }
    private readonly FROM_MEDIA_MANAGER_DROPDOWN: string = "xpath=//div[@data-testid = 'qv-stories-from-posts']"
    async clickOnFromMediaManagerDropdown() {
        await this.helper.clickOnElement(this.FROM_MEDIA_MANAGER_DROPDOWN)
    }

    private readonly FROM_POSTS_AND_REELS_DROPDOWN: string = "xpath=//div[@data-testid = 'qv-stories-from-posts']"
    async clickOnFromPostsAndReels() {
        await this.helper.hoverOnElement(this.FROM_POSTS_AND_REELS_DROPDOWN)
        await this.helper.clickOnElement(this.FROM_POSTS_AND_REELS_DROPDOWN)
    }


    private readonly EDIT_HIGHLIGHTS_COVER_BUTTON: string = "xpath=//div[text() = 'Edit Highlight Cover']/.."
    async clickOnEditHighlightCover() {
        await this.helper.clickOnElement(this.EDIT_HIGHLIGHTS_COVER_BUTTON)
    }

    private readonly HIGHLIGHT_COVER_ERROR_TEXT: string = "xpath=//div[@data-testid = 'category-image-media-error']//div[text() ='Failed to load an image from this URL.']"
    async verifyHighlightCoverErrorText() {
        await this.helper.elementIsVisibleEnhanced(this.HIGHLIGHT_COVER_ERROR_TEXT)
    }


    private readonly URL_INPUTBOX: string = "xpath=//div[text() = 'URL']/following::input[@type='text']"
    private readonly URL_FILLED_INPUTBOX: string = "xpath=//div[@data-testid='category-image-url']//input[@value='<param>']"
    async writeUrlInInputField(url: string) {
        await this.helper.elementIsVisibleEnhanced(this.URL_INPUTBOX)
        await this.helper.enterText(this.URL_INPUTBOX, url)
        await this.helper.elementIsVisibleEnhanced(this.URL_FILLED_INPUTBOX.replace("<param>", url))
    }

    private readonly URL_EMPTY_INPUTBOX: string = "xpath=//div[@data-testid='category-image-url']//input[@value='']"
    async clearUrlInInputField() {
        await this.helper.elementIsVisibleEnhanced(this.URL_INPUTBOX)
        await this.helper.clearTextBox(this.URL_INPUTBOX)
        await this.helper.elementIsVisibleEnhanced(this.URL_EMPTY_INPUTBOX)
    }

    private readonly URL_VIDEO_INPUTBOX: string = "xpath=//div[@data-testid = 'category-video-url']//input"
    private readonly URL_VIDEO_FILLED_INPUTBOX: string = "xpath=//div[@data-testid='category-video-url']//input[@value='<param>']"
    async writeUrlInVideoInputField(url: string) {
        await this.helper.elementIsVisibleEnhanced(this.URL_VIDEO_INPUTBOX)
        await this.helper.fillText(this.URL_VIDEO_INPUTBOX, url)
        await this.helper.elementIsVisibleEnhanced(this.URL_VIDEO_FILLED_INPUTBOX.replace("<param>", url))

    }
    private readonly URL_VIDEO_EMPTY_INPUTBOX: string = "xpath=//div[@data-testid='category-video-url']//input[@value='']"

    async removeUrlInVideoInputField() {
        await this.helper.fillText(this.URL_VIDEO_INPUTBOX, "")
        await this.helper.elementIsVisibleEnhanced(this.URL_VIDEO_EMPTY_INPUTBOX)

    }
    private readonly REPLACE_IMAGE_DOMTEXT: string = "xpath=(//div[text() = 'Replace?'])[1]"
    async verifyReplaceTextInImageIsPresent() {
        await this.helper.elementIsVisibleEnhanced(this.REPLACE_IMAGE_DOMTEXT)
    }

    async verifyReplaceTextInImageIsNotPresent() {
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.elementIsNotVisibleEnhanced(this.REPLACE_IMAGE_DOMTEXT)
    }
    private readonly REPLACE_VIDEO_DOMTEXT: string = "xpath=(//div[text() = 'Replace?'])[2]"

    async verifyReplaceTextInVideoIsPresent() {
        await this.helper.elementIsVisibleEnhanced(this.REPLACE_VIDEO_DOMTEXT)
    }

    async verifyReplaceTextInVideoIsNotPresent() {
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.elementIsNotVisibleEnhanced(this.REPLACE_VIDEO_DOMTEXT)
    }
    private readonly UPLOAD_BUTTON: string = "xpath=//div[text() ='or paste video link above']//preceding-sibling::div"
    async verifyUploadButtonIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.UPLOAD_BUTTON)
    }
    async verifyUploadButtonIsNotDisplayed() {
        await this.helper.elementIsNotVisibleEnhanced(this.UPLOAD_BUTTON)
    }

    private readonly ADD_BUTTON: string = "xpath=//div[text() ='Add']/.."
    async clickOnAddButton() {
        await this.helper.clickOnElement(this.ADD_BUTTON)
    }

    async hoverOnTheImage() {
        return await this.helper.hoverOnElement(this.REPLACE_IMAGE_DOMTEXT)
    }


    private readonly DELETE_BUTTON: string = "xpath=//button[@title = 'Remove']"
    async verifyDeleteButtonIsVisible() {
        return await this.helper.isPresent(this.DELETE_BUTTON)
    }

    async clickOnDeleteButton() {
        await this.helper.clickOnElement(this.DELETE_BUTTON)
    }

    private readonly HIGHLIGHT_DELETE_BUTTON: string = "xpath=//div[@id='navigation-editor']//div[text() = 'Delete']/.."
    async clickOnHighlightDeleteButton() {
        await this.helper.elementIsVisibleEnhanced(this.HIGHLIGHT_DELETE_BUTTON)
        await this.helper.clickOnElement(this.HIGHLIGHT_DELETE_BUTTON)
    }

    private readonly HIGHLIGHT_DELETE_CONFIRMATION_BUTTON: string = "xpath=//span[text() = 'Delete']/.."
    async clickOnHighlightDeleteConfirmationButton() {
        await this.helper.clickOnElement(this.HIGHLIGHT_DELETE_CONFIRMATION_BUTTON)
    }

    private readonly TOTAL_HIGHLIGHT_ROUNDICON: string = "xpath=//div[@id = 'navigation-tree']//button[@data-testid='ig-highlights-item']"
    private readonly NTH_HIGHLIGHT_ROUNDICON: string = "xpath=(//div[@id = 'navigation-tree']//button[@data-testid='ig-highlights-item'])[<param>]"
    async clickNthHighlighFromLeft(index: string) {
        if (index == "first") {
            return await this.helper.clickOnElement(this.NTH_HIGHLIGHT_ROUNDICON.replace("<param>", "1"))

        } else if (index == "last") {
            const count = await this.helper.getCountOfElements(this.TOTAL_HIGHLIGHT_ROUNDICON)
            await this.helper.scrollToElement(this.NTH_HIGHLIGHT_ROUNDICON.replace("<param>", count.toString()))
            return await this.helper.clickOnElement(this.NTH_HIGHLIGHT_ROUNDICON.replace("<param>", count.toString()))

        } else {
            return await this.helper.clickOnElement(this.NTH_HIGHLIGHT_ROUNDICON.replace("<param>", index))
        }
    }

    private readonly DELETE_HIGHLIGHT_BUTTON: string = "xpath=//div[text() ='Delete']/.."
    private readonly POPUP_DELETE_BUTTON: string = "xpath=//button[@title= 'Delete']"

    async clickOnDeleteHighlightButton() {
        await this.helper.clickOnElement(this.DELETE_HIGHLIGHT_BUTTON)
        await this.helper.elementIsVisibleEnhanced(this.POPUP_DELETE_BUTTON)
        await this.helper.clickOnElement(this.POPUP_DELETE_BUTTON)
    }

    private readonly HIGHLIGHTA_POST_CARD: string = "xpath=(//span[@data-testid= 'qv-stories-posts-node-title'])[<param>]"
    async getNameOnPostOfHighlights(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.HIGHLIGHTA_POST_CARD.replace("<param>", index))
        return await this.helper.getTextOfAnElement(this.HIGHLIGHTA_POST_CARD.replace("<param>", index))
    }


    async isPostCardInHighlightVisible(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.HIGHLIGHTA_POST_CARD.replace("<param>", index))
    }

    async isPostCardInHighlightNotVisible(index: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.HIGHLIGHTA_POST_CARD.replace("<param>", index))
    }

    private readonly DELETE_BUTTON_ON_POST_CARD: string = "xpath=(//button[@data-testid= 'qv-stories-post-delete'])[<param>]"
    async deleteNthPostCardInHighlight(index: string) {
        await this.helper.clickOnElement(this.DELETE_BUTTON_ON_POST_CARD.replace("<param>", index))
    }

    private readonly EDIT_BUTTON_ON_POST_CARD: string = "xpath=(//button[@data-testid= 'qv-stories-post-edit'])[<param>]"
    async ValidateButtonOfNthPostCardInHighlightIsVisible(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.EDIT_BUTTON_ON_POST_CARD.replace("<param>", index))
    }
    async clickOnButtonOfNthPostCardInHighlight(index: string) {
        await this.helper.clickOnElement(this.EDIT_BUTTON_ON_POST_CARD.replace("<param>", index))
    }

    private readonly TITLE_INPUTFIELD: string = "xpath=//div[@data-testid= 'field-title']//input"
    private readonly TITLE_FILLED_INPUTFIELD: string = "xpath=//div[@data-testid='field-title']//input[@value='<param>']"

    async editNameOfPost(title: string) {
        await this.helper.fillText(this.TITLE_INPUTFIELD, title)
        await this.helper.elementIsVisibleEnhanced(this.TITLE_FILLED_INPUTFIELD.replace("<param>", title))
    }

    async verifyNameofNthPost(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.HIGHLIGHTA_POST_CARD.replace("<param>", index))
        return await this.helper.getTextOfAnElement(this.HIGHLIGHTA_POST_CARD.replace("<param>", index))
    }

    private readonly DESCRIPTION_HIGHLIGHT_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='edit-details-showDescription']"
    async highlightDescriptionToggle(state) {
        await this.toggleSwitch(state, this.DESCRIPTION_HIGHLIGHT_TOGGLE_BUTTON)
    }

    private readonly HIGHLIGHT_HIDE_BUTTON: string = "xpath=//div[@id='navigation-editor']//div[text() = 'Hide']/.."
    async clickOnHideButton() {
        await this.helper.clickOnElement(this.HIGHLIGHT_HIDE_BUTTON)
        // await this.helper.waitFor(5000)

    }

    private readonly HIGHLIGHT_SHOW_BUTTON: string = "xpath=//div[@id='navigation-editor']//div[text() = 'Show']/.."
    async clickOnShowButton() {
        await this.helper.clickOnElement(this.HIGHLIGHT_SHOW_BUTTON)
    }

    private readonly EDIT_THUMBNAIL_BUTTON: string = "xpath=//div[text() = 'Edit']/.."
    async clickOnEditThumbnailButton() {
        await this.helper.clickOnElement(this.EDIT_THUMBNAIL_BUTTON)
    }

    private readonly MANAGE_VIDEOS_BUTTON: string = "xpath=//button[@data-testid='edit-details-manage-video-button']"
    async manageYourVideosButton() {
        await this.helper.clickOnElement(this.MANAGE_VIDEOS_BUTTON)

    }

    private readonly ADD_MEDIA_HEADER: string = "xpath=//h1[text() = 'Add Media']"
    private readonly USE_BUTTON: string = "xpath=//div[text() = 'Add']/.."
    async verifyManageYourVideosModalUI() {
        await this.helper.elementIsVisibleEnhanced(this.ADD_MEDIA_HEADER)
        await this.helper.elementIsVisibleEnhanced(this.USE_BUTTON)
    }


    private readonly VIDEOS_NTH_INDEX: string = "xpath=(//label//input[@type = 'checkbox']/..)[<param>]"
    async clickOnNthVideoInManageVideoModal(index: string) {
        await this.helper.clickOnElement(this.VIDEOS_NTH_INDEX.replace("<param>", index))
    }

    private readonly REMOVE_VIDEO_BUTTON: string = "xpath=//button[@data-testid = 'category-video-media-remove' and @title='Remove']/.."
    async clickOnRemoveVideoButton() {
        await this.helper.clickOnElement(this.REMOVE_VIDEO_BUTTON)
    }


    private readonly TAG_PRODUCTS_ON_DETAILS_PANEL: string = "xpath=//button[@data-testid='hotspots-tagproducts']"
    async clickOnTagProductsButtonOnDetailsPanel() {
        await this.helper.clickOnElement(this.TAG_PRODUCTS_ON_DETAILS_PANEL)
    }

    private readonly ADD_PRODUCTS_TO_MEDIA_POPUP: string = "xpath=//div[text()='Add products to this media']"
    async validateAddProductsToMediaPopupIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.ADD_PRODUCTS_TO_MEDIA_POPUP)
    }
    private readonly DETAILS_PANEL: string = "xpath=//div[@data-testid='category-editor-tabs']/div[@data-id='Details']"
    async validateDetailsPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.DETAILS_PANEL)
    }

    private readonly ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR: string = "xpath=//input[@placeholder='Search by product title or ID...']"
    async enterProductTitleOnSearchBar(text: string) {
        await this.helper.typeTextBox(this.ADD_PRODUCTS_TO_MEDIA_POPUP_SEARCH_BAR, text)
        // await this.helper.keyboardOps('enter')
    }

    private readonly PRODUCT_TITLE_ONSEARCH_DROPDOWN: string = "xpath=//div[contains(text(), 'Add products')]/..//descendant::div[contains(text(),'<param>')]"
    async validateSearchResultIsDisplayed(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
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
    private readonly HOTSPOT_EDITOR_CLOSE_BUTTON: string = "xpath=//button[@data-testid='hotspots-editor-close-btn']"
    async clickOnHotspotEditorCloseButton() {
        await this.helper.elementIsVisibleEnhanced(this.HOTSPOT_EDITOR_CLOSE_BUTTON)
        await this.helper.clickOnElement(this.HOTSPOT_EDITOR_CLOSE_BUTTON)
    }
}