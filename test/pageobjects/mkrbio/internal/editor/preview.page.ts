import { Locator, Page, expect } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class PreviewPage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    private readonly PROFILE_NAME_FILLED: string = "xpath=//p[@data-testid='profile-header-name' and contains(text(), '<param>')]"
    private readonly PROFILE_NAME: string = "xpath=//p[@data-testid='profile-header-name']"
    private readonly PREVIEW_IFRAME: string = "iframe[title='Preview']"
    async getProfileNameOnPreview(name: any) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_NAME_FILLED.replace('<param>', name), this.PREVIEW_IFRAME)
    }
    async verifyProfileNameOnPreviewNotToBePresent() {
        await this.helper.elementIsNotVisibleEnhanced(this.PROFILE_NAME, this.PREVIEW_IFRAME)
    }
    private readonly PROFILE_DESCRIPTION: string = "xpath=//p[@data-testid='profile-header-description']"
    private readonly PROFILE_DESCRIPTION_WITH_EXPECTED_TEXT: string = "xpath=//p[@data-testid='profile-header-description' and text() = '<param>']"
    async getProfileDescriptionOnPreview(description: any) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_DESCRIPTION_WITH_EXPECTED_TEXT.replace("<param>", description), this.PREVIEW_IFRAME)
    }

    async verifyProfileDescriptionOnPreviewNotToBePresent() {
        await this.helper.elementIsNotVisibleEnhanced(this.PROFILE_DESCRIPTION, this.PREVIEW_IFRAME)
    }
    private readonly PROFILE_HEADER_BUTTON: string = "xpath=//a[@data-testid='profile-header-cta-button']"
    async getProfileButtonOnHeader() {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_HEADER_BUTTON, this.PREVIEW_IFRAME)
        return await this.helper.getTextOfAnElement(this.PROFILE_HEADER_BUTTON, this.PREVIEW_IFRAME)
    }

    async clickOnProfileButtonOnHeader() {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_HEADER_BUTTON, this.PREVIEW_IFRAME)
        const elements: Locator = await this.page.frameLocator(this.PREVIEW_IFRAME).locator(this.PROFILE_HEADER_BUTTON);
        await elements.click();
    }

    private readonly PROFILE_HEADER_BUTTON_WITH_CLICKME_TEXT: string = "xpath=//a[@data-testid='profile-header-cta-button' and contains(text(), '<param>')]"
    async verifyProfileButtonPreviewToBePresent(text: any) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_HEADER_BUTTON_WITH_CLICKME_TEXT.replace("<param>", text), this.PREVIEW_IFRAME)
    }


    private readonly PROFILE_HEADER_BUTTON_WITH_LINK_FILLED: string = "xpath=//a[@data-testid='profile-header-cta-button' and contains(@href, '<param>')]"
    async verifyProfileButtonLinkToBePresent(link: any) {
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_HEADER_BUTTON_WITH_LINK_FILLED.replace("<param>", link), this.PREVIEW_IFRAME)
    }

    async expectUrlToBe(url: string) {
        try {
            await this.page.waitForURL(new RegExp(url), { timeout: 5000 });
        } catch (error) {
            expect(this.page.url()).toContain(url || 'chromewebdata');
        }
    }
    private readonly INSTAGRAM_LINK: string = "xpath=(//div[@data-testid='profile-header-social-links']//a)[<param>]"
    async clickOnSocialMediaButtonOnHeader(index: string) {
        const elements: Locator = await this.page.frameLocator(this.PREVIEW_IFRAME).locator(this.INSTAGRAM_LINK.replace('<param>', index));
        await elements.waitFor({ state: "visible" });
        await elements.click();
    }

    private readonly SOCIAL_MEDIA_LINK_ENHANCED: string = "xpath=//div[@data-testid='profile-header-social-links']//a[contains(@href, '<param>')]"
    async clickOnSocialMediaButtonOnHeaderEnhanced(socialMedia: string) {
        const elements: Locator = this.page.frameLocator(this.PREVIEW_IFRAME).locator(this.SOCIAL_MEDIA_LINK_ENHANCED.replace('<param>', socialMedia));
        await elements.waitFor({ state: "visible" });
        await elements.click();
    }

    private readonly PROFILE_HEADER_IMAGE: string = "xpath=//img[@data-testid='profile-header-logo']"
    private readonly PROFILE_HEADER_IMAGE_WITH_ATTRIBUTE: string = "xpath=//img[@data-testid='profile-header-logo' and @src]"
    async getProfileHeaderImageUrl() {
        await this.helper.waitForAttribute(this.PROFILE_HEADER_IMAGE_WITH_ATTRIBUTE, this.PREVIEW_IFRAME)
        return await this.helper.getAttributeValue(this.PROFILE_HEADER_IMAGE, 'src', this.PREVIEW_IFRAME)
    }
    async isProfileImageDisplayed() {
        return await this.helper.isPresent(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
    }

    async waitForPreviewPageToBeStable() {
        await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
    }

    // private readonly ALL_HIGHLIGHT_CARDS: string = "xpath=//div[@data-testid = 'list-page-slider']"
    // async verifyNewHighlightIsCreatedInPreviewWithName() {
    //     await this.helper.waitFor(5000)
    //     let arr = await this.helper.getTextOfElements(this.ALL_HIGHLIGHT_CARDS, this.PREVIEW_IFRAME)
    //     return arr
    // }

    private readonly ALL_HIGHLIGHT_CARDS: string = "xpath=//div[@data-testid = 'category-card-test-id']//div[text() = '<param>']"
    async verifyNewHighlightIsCreatedInPreviewWithName(name: any) {
        await this.helper.elementIsVisibleEnhanced(this.ALL_HIGHLIGHT_CARDS.replace("<param>", name), this.PREVIEW_IFRAME)
    }
    private readonly IG_LAUNCHER_ROUNDICON: string = "xpath=//div[@data-testid='launcher-item-label' and text() ='Instagram']/../..//div[@title='Instagram']"
    async clickOnInstagramLauncherItem() {
        await this.helper.elementIsVisibleEnhanced(this.IG_LAUNCHER_ROUNDICON, this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.IG_LAUNCHER_ROUNDICON, this.PREVIEW_IFRAME)
    }

    private readonly HIGHLIGHTS_ROUNDICON: string = "xpath=//div[@data-testid='list-page-slider']//div[text() = '<param>']//ancestor::div[@data-testid='category-card-test-id']"
    async clickOnPreviewHighlightWithName(name: any) {
        await this.helper.clickOnElement(this.HIGHLIGHTS_ROUNDICON.replace("<param>", name), this.PREVIEW_IFRAME)
    }

    private readonly DESCRIPTION_PREVIEW_HIGHLIGHT_TEXT: string = "xpath=//div[@data-testid='qv-media-description']"
    async descriptionOnHighlightInPreviewPage() {
        await this.helper.elementIsVisibleEnhanced(this.DESCRIPTION_PREVIEW_HIGHLIGHT_TEXT, this.PREVIEW_IFRAME)
        return await this.helper.getTextOfAnElement(this.DESCRIPTION_PREVIEW_HIGHLIGHT_TEXT, this.PREVIEW_IFRAME)
    }

    private readonly LEARN_MORE_LINK_TEXT: string = "xpath=//div[text() = 'Learn More']"
    // async clickOnLearnMoreLink() {
    //     const [newTab] = await Promise.all([
    //         this.page.waitForEvent("popup"),
    //         this.helper.clickOnElement(this.LEARN_MORE_LINK_TEXT, this.PREVIEW_IFRAME),
    //     ])
    //     return await this.helper.getCurrentURL(newTab)
    // }

    async clickOnLearnMoreLink() {
        await this.helper.clickOnElement(this.LEARN_MORE_LINK_TEXT, this.PREVIEW_IFRAME);
        // const newTab = await this.page.waitForEvent("popup");
        // return await this.helper.getCurrentURL(newTab);
    }

    private readonly VIEW_DETAILS_LINK_TEXT: string = "xpath=//div[@data-testid = 'qv-expand-panel-button']//div[text() = 'View Details']"
    async clickOnViewDetailsLink() {
        await this.helper.clickOnElement(this.VIEW_DETAILS_LINK_TEXT, this.PREVIEW_IFRAME)
    }

    private readonly IG_NTH_PREVIEW_POSTS: string = "xpath=//div[@data-testid='social-network-post' and @data = '<param>']"
    async validatePostNotToBePresentInPreview(postid: any) {
        await this.helper.elementIsNotVisibleEnhanced(this.IG_NTH_PREVIEW_POSTS.replace("<param>", postid), this.PREVIEW_IFRAME)
    }
    async validatePostToBePresentInPreview(postid: any) {
        await this.helper.elementIsVisibleEnhanced(this.IG_NTH_PREVIEW_POSTS.replace("<param>", postid), this.PREVIEW_IFRAME)
    }
    private readonly HIDDEN_HIGHLIGHT_CARDS: string = "xpath=//img[@alt = '<param>']"
    async verifyNewHighlightIsCreatedWithNameIsPresent(name: string) {
        await this.helper.elementIsVisibleEnhanced(this.HIDDEN_HIGHLIGHT_CARDS.replace('<param>', name), this.PREVIEW_IFRAME)
    }

    async verifyNewHighlightIsCreatedWithNameIsNotPresent(name: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.HIDDEN_HIGHLIGHT_CARDS.replace('<param>', name), this.PREVIEW_IFRAME)
    }

    private readonly REELS_TAB_ON_PREVIEW: string = "xpath=(//div[@data-testid='clp-sectionheader-tab'])[<param>]"
    async clickOnReelsTabOnPreview(index: string) {
        await this.helper.clickOnElement(this.REELS_TAB_ON_PREVIEW.replace('<param>', index), this.PREVIEW_IFRAME)
    }
    private readonly DESCRIPTION_PREVIEW_REELS_TEXT: string = "xpath=//div[@data='<param>']//div[@data-testid='category-description']"
    async descriptionOnReelsInPreviewPage(id) {
        return await this.helper.getTextOfAnElement(this.DESCRIPTION_PREVIEW_REELS_TEXT.replace('<param>', id), this.PREVIEW_IFRAME)
    }

    private readonly IG_POSTS_CARDS: string = "xpath=(//div[@data-testid='social-network-post'])[<param>]"
    async clickOnNthPostOnPreview(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.IG_POSTS_CARDS.replace('<param>', index), this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.IG_POSTS_CARDS.replace('<param>', index), this.PREVIEW_IFRAME)
    }
    private readonly IG_POSTS_PINS_ON_PREVIEW: string = "xpath=//div[@data-testid='qv-pin']"
    async clickOnNthPinOnIGPostOnPreview() {
        await this.helper.waitForNavigation()
        await this.helper.elementIsVisibleEnhanced(this.IG_POSTS_PINS_ON_PREVIEW, this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.IG_POSTS_PINS_ON_PREVIEW, this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW: string = "xpath=//div[@data-testid='product-card-add-to-cart']"
    async validateProductCardAddToCartIsDisplayedOnPreview() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW, this.PREVIEW_IFRAME)
    }

    async validateProductCardAddToCartIsNotDisplayedOnPreview() {
        await this.helper.elementIsNotVisibleEnhanced(this.PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW, this.PREVIEW_IFRAME)
    }
    async waitForInternalProductCardAddToCartIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW, this.PREVIEW_IFRAME)
    }
    private readonly EXTERNAL_PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW: string = "xpath=//a[@data-testid='navbar-button-checkout']"
    async waitForExternalProductCardAddToCartIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.EXTERNAL_PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW, this.PREVIEW_IFRAME)
    }
    async waitForProductCardAddToCartIsNotDisplayed() {
        await this.helper.elementIsNotVisibleEnhanced(this.PRODUCT_CARD_ADD_TO_CARD_BUTTON_ON_PREVIEW, this.PREVIEW_IFRAME)
    }
    private readonly SQUARE_PRODUCT_CARD_SHAPE_AND_RATIO: string = "xpath=//div[contains(@class,'QVTW__aspect-ratio-square')]"
    async validateProductcardShapeIsSquare() {
        return await this.helper.elementIsVisibleEnhanced(this.SQUARE_PRODUCT_CARD_SHAPE_AND_RATIO, this.PREVIEW_IFRAME)
    }
    private readonly POTRAIT_PRODUCT_CARD_SHAPE_AND_RATIO: string = "xpath=//div[contains(@class,'QVTW__aspect-ratio-2/3')]"
    async validateProductcardShapeIsPotrait() {
        return await this.helper.elementIsVisibleEnhanced(this.POTRAIT_PRODUCT_CARD_SHAPE_AND_RATIO, this.PREVIEW_IFRAME)
    }
    private readonly LANDSCAPE_PRODUCT_CARD_SHAPE_AND_RATIO: string = "xpath=//div[contains(@class,'QVTW__aspect-ratio-4/3')]"
    async validateProductcardShapeIsLandscape() {
        await this.helper.elementIsVisibleEnhanced(this.LANDSCAPE_PRODUCT_CARD_SHAPE_AND_RATIO, this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_IMAGE_COVER_RULE_ON_PREVIEW: string = "xpath=//img[@alt='<param>'][@data-fit-rule='cover']"
    async validateProductcardIsCoverImageFit(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_IMAGE_COVER_RULE_ON_PREVIEW.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_IMAGE_CONTAIN_RULE_ON_PREVIEW: string = "xpath=//img[@alt='<param>'][@data-fit-rule='contain']"
    async validateProductcardIsContainImageFit(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_IMAGE_CONTAIN_RULE_ON_PREVIEW.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_TITLE_IN_ONE_LINE: string = "xpath=//div[text()='<param>'][@data-testid='product-card-title'][contains(@class,'QVTW__truncate-lines-1')]"
    async validateProductcardTitleIsInOneLine(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_TITLE_IN_ONE_LINE.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_TITLE_IN_TWO_LINES: string = "xpath=//div[text()='<param>'][@data-testid='product-card-title'][contains(@class,'QVTW__truncate-lines-2')]"
    async validateProductcardTitleIsInTwoLines(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_TITLE_IN_TWO_LINES.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_TITLE_IN_THREE_LINES: string = "xpath=//div[text()='<param>'][@data-testid='product-card-title'][contains(@class,'QVTW__truncate-lines-3')]"
    async validateProductcardTitleIsInThreeLines(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_TITLE_IN_THREE_LINES.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_TITLE_IN_FOUR_LINES: string = "xpath=//div[text()='<param>'][@data-testid='product-card-title'][contains(@class,'QVTW__truncate-lines-4')]"
    async validateProductcardTitleIsInFourLines(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_TITLE_IN_FOUR_LINES.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_TITLE_IN_FIVE_LINES: string = "xpath=//div[text()='<param>'][@data-testid='product-card-title']"
    async validateProductcardTitleIsInFiveLines(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_TITLE_IN_FIVE_LINES.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly PRODUCT_CARD_DISPLAY_VARIANT: string = "xpath=//div[@data-testid='product-card-test-id']//div[text()='<param>']"
    async validateProductCartDisplayVariantIsDisplayed(price: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARD_DISPLAY_VARIANT.replace('<param>', price), this.PREVIEW_IFRAME)
    }

    private readonly PRODUCT_IN_THIS_IMAGE_CARD: string = "xpath=//div[@data-testid='product-card-test-id']//div[text()='<param>']"
    async clickOnProductInThisImageCardInPreview(name: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_IN_THIS_IMAGE_CARD.replace('<param>', name), this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.PRODUCT_IN_THIS_IMAGE_CARD.replace('<param>', name), this.PREVIEW_IFRAME)
    }

    private readonly CHECKOUT_CART_INTERNAL_PREVIEW_BUTTON: string = "xpath=//div[@data-testid='navbar-button-checkout']"
    async clickOnInternalCheckoutCartButton() {
        await this.helper.clickOnElement(this.PROFILE_DESCRIPTION, this.PREVIEW_IFRAME)
        await this.helper.lazyScrollToBottomOfWebpage()
        await this.helper.clickOnElement(this.CHECKOUT_CART_INTERNAL_PREVIEW_BUTTON, this.PREVIEW_IFRAME)
    }

    private readonly CHECKOUT_CART_PREVIEW_BUTTON: string = "xpath=//a[@data-testid='navbar-button-checkout']"
    async clickOnExternalCheckoutCartButton() {
        await this.helper.clickOnElement(this.CHECKOUT_CART_PREVIEW_BUTTON, this.PREVIEW_IFRAME)
    }

    async verifyExternalCartRedirctWorks() {
        const [newTab] = await Promise.all([
            this.page.waitForEvent("popup"),
            await this.helper.clickOnElement(this.CHECKOUT_CART_PREVIEW_BUTTON, this.PREVIEW_IFRAME)
        ])
        return await this.helper.getCurrentURL(newTab)
    }

    private readonly CHECKOUT_CART_PREVIEW_DIV: string = "xpath=//div[@data-testid='cart']"
    async checkoutCartIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.CHECKOUT_CART_PREVIEW_DIV, this.PREVIEW_IFRAME)
    }
    async checkoutCartIsNotVisible() {
        await this.helper.elementIsNotVisibleEnhanced(this.CHECKOUT_CART_PREVIEW_DIV, this.PREVIEW_IFRAME)
    }
    private readonly NTH_POST_PREVIEW_CARD: string = "xpath=(//div[@data-testid = 'social-network-post'])[<param>]" //tbc
    async clickOnNthPostInPreview(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.NTH_POST_PREVIEW_CARD.replace("<param>", index), this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.NTH_POST_PREVIEW_CARD.replace("<param>", index), this.PREVIEW_IFRAME)
        await this.helper.waitForPageToLoad()
    }

    private readonly VIEW_PRODUCTS_PANEL: string = "xpath=//div[@data-testid = 'product-listitem-test-id']"
    async viewProductsPanelNotVisible() {
        await this.helper.elementIsNotVisibleEnhanced(this.VIEW_PRODUCTS_PANEL, this.PREVIEW_IFRAME)
    }

    private readonly VIEW_PRODUCTS_WITH_NAME_PREVIEW_CARD: string = "xpath=//div[@data-testid = 'product-listitem-title' and text() = '<param>']"
    async clickTaggedProduct(name: string) {
        await this.helper.clickOnElement(this.VIEW_PRODUCTS_WITH_NAME_PREVIEW_CARD.replace("<param>", name), this.PREVIEW_IFRAME)
    }

    private readonly OUT_OF_STOCK_PDP_TEXT: string = "xpath=//p[text()='Out of Stock']"
    async productDescriptionPageOutOfStockTextIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.OUT_OF_STOCK_PDP_TEXT, this.PREVIEW_IFRAME)
    }


    private readonly EXPAND_PREVIEW: string = "xpath=//button[@data-testid = 'preview-fullscreen']"
    async clickOnExpandPreviewButton() {
        await this.helper.elementIsVisibleEnhanced(this.EXPAND_PREVIEW)
        await this.helper.clickOnElement(this.EXPAND_PREVIEW)
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_HEADER_BUTTON, this.PREVIEW_IFRAME)
    }


    private readonly PREVIEW_DEVICE_TEXT: string = "xpath=//button[@data-testid = 'preview-device']"
    async clickOnDesktopPreviewDeviceButton() {
        await this.helper.elementIsVisibleEnhanced(this.PREVIEW_DEVICE_TEXT)
        await this.helper.clickOnElement(this.PREVIEW_DEVICE_TEXT)
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_HEADER_BUTTON, this.PREVIEW_IFRAME)
    }

    private readonly MINIMIZE_GROUP_BUTTON: string = "xpath=//button[@data-testid = 'preview-controls']"
    async clickOnMinimizePreviewDeviceButtonGroup() {
        await this.helper.elementIsVisibleEnhanced(this.MINIMIZE_GROUP_BUTTON)
        await this.helper.clickOnElement(this.MINIMIZE_GROUP_BUTTON)
    }

    private readonly CAROUSEL_PREVIEW_TEXT: string = "xpath=//div[@data-testid = 'qv-mediabox-slider']"
    private readonly CAROUSEL_PREVIEW_TEXT_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid = 'qv-mediabox-slider'and @class]"
    async verifyCarouselPresenceOnWebpage() {
        await this.helper.waitForAttribute(this.CAROUSEL_PREVIEW_TEXT_WITH_ATTRIBUTE, this.PREVIEW_IFRAME)
        return await this.helper.getAttributeValue(this.CAROUSEL_PREVIEW_TEXT, 'class', this.PREVIEW_IFRAME)
    }

    private readonly QV_TAB_ITEM: string = "xpath=//div[@data-testid ='qv-album-tabs']//div[@data-testid ='qv-tab-item'][<param>]"
    private readonly QV_TAB_ITEM_WITH_ATTRIBUTE: string = "xpath=//div[@data-testid ='qv-album-tabs']//div[@data-testid ='qv-tab-item' and @data-active][<param>]"
    async qvTabHighlightStatus(index: string) {
        await this.helper.waitForAttribute(this.QV_TAB_ITEM_WITH_ATTRIBUTE.replace("<param>", index), this.PREVIEW_IFRAME)
        return await this.helper.getAttributeValue(this.QV_TAB_ITEM.replace("<param>", index), 'data-active', this.PREVIEW_IFRAME)
    }

    private readonly PICTURE_IN_PICTURE_PREVIEW_BUTTON: string = "xpath=//div[@data-testid='qv-pip-button']"
    async pictureInPictureButtonVisible() {
        await this.helper.elementIsVisibleEnhanced(this.PICTURE_IN_PICTURE_PREVIEW_BUTTON, this.PREVIEW_IFRAME)
    }
    async pictureInPictureButtonNotVisible() {
        await this.helper.elementIsNotVisibleEnhanced(this.PICTURE_IN_PICTURE_PREVIEW_BUTTON, this.PREVIEW_IFRAME)
    }
    async clickOnPictureInPictureButton() {
        await this.helper.clickOnElement(this.PICTURE_IN_PICTURE_PREVIEW_BUTTON, this.PREVIEW_IFRAME)
    }

    private readonly PICTURE_IN_PICTURE_PREVIEW_WINDOW: string = "xpath=//div[@id='maker-smartnav-pip']"
    async pictureInPictureWindowIsVisible() {
        return await this.helper.isDisplayed(this.PICTURE_IN_PICTURE_PREVIEW_WINDOW, this.PREVIEW_IFRAME)
    }

    private readonly PRODUCTS_IN_THIS_IMAGE_TEXT: string = "xpath=//div[text()='Product in this image']"
    async getFontFamilyOnPreview() {
        await this.helper.waitFor(8000)
        await this.helper.elementIsVisibleEnhanced(this.PROFILE_DESCRIPTION, this.PREVIEW_IFRAME)
        return await this.helper.getCSSPropertyValue(this.PROFILE_DESCRIPTION, '--maker-font-family', this.PREVIEW_IFRAME)
    }
    private readonly PRIMARY_COLOR_IN_PREVIEW: string = "xpath=//div[@data-testid= 'clp-sectionheader-title']//div[text() = 'Instagram']"
    async getPrimaryColorOnPreview() {
        await this.helper.elementIsVisibleEnhanced(this.PRIMARY_COLOR_IN_PREVIEW, this.PREVIEW_IFRAME)
        return await this.helper.getCSSPropertyValue(this.PRIMARY_COLOR_IN_PREVIEW, '--smartnav-color-primary', this.PREVIEW_IFRAME)
    }

    private readonly STORE_PREVIEW_ROUNDICON: string = "xpath=//div[@data-testid='launcher-item-label' and text() ='Store']"

    async getSecondaryColorOnPreview() {
        await this.helper.elementIsVisibleEnhanced(this.STORE_PREVIEW_ROUNDICON, this.PREVIEW_IFRAME)
        return await this.helper.getCSSPropertyValue(this.STORE_PREVIEW_ROUNDICON, '--smartnav-color-secondary', this.PREVIEW_IFRAME)
    }
    async getTertiaryColorOnPreview() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCTS_IN_THIS_IMAGE_TEXT, this.PREVIEW_IFRAME)
        return await this.helper.getCSSPropertyValue(this.PRODUCTS_IN_THIS_IMAGE_TEXT, '--smartnav-color-tertiary', this.PREVIEW_IFRAME)
    }
    async getAccentColorOnPreview() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCTS_IN_THIS_IMAGE_TEXT, this.PREVIEW_IFRAME)
        return await this.helper.getCSSPropertyValue(this.PRODUCTS_IN_THIS_IMAGE_TEXT, '--smartnav-color-accent', this.PREVIEW_IFRAME)
    }
    async placeholderColorOnPreview() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCTS_IN_THIS_IMAGE_TEXT, this.PREVIEW_IFRAME)
        return await this.helper.getCSSPropertyValue(this.PRODUCTS_IN_THIS_IMAGE_TEXT, '--smartnav-product-card-placeholder', this.PREVIEW_IFRAME)
    }

    private readonly PRODUCT_TITLE_TEXT: string = "xpath=//div[@data-testid='pdp-product-title']"
    async getTextOfProductTitleInPDP() {
        return await this.helper.getTextOfAnElement(this.PRODUCT_TITLE_TEXT, this.PREVIEW_IFRAME)
    }

    async verifyRedirectionToShopify() {
        return await this.helper.getCurrentURL(this.page);
    }

    private readonly PRIMARY_CTA_ON_PDP_BUTTON: string = "xpath=(//div[@data-section-id='cta buttons']//div[@data-testid='pdp-button-add-to-cart']//div[@data-testid='open-link-label'])[2]"
    async verifyTextOnPrimaryCTCButtonOnPDP() {
        await this.helper.lazyScrollToBottomOfWebpage()
        await this.helper.scrollOnLazyLoadWebPage(this.PRIMARY_CTA_ON_PDP_BUTTON, this.PREVIEW_IFRAME)
        await this.helper.elementIsVisibleEnhanced(this.PRIMARY_CTA_ON_PDP_BUTTON, this.PREVIEW_IFRAME)
        // return await this.helper.getTextOfAnElement(this.PRIMARY_CTA_ON_PDP_BUTTON, this.PREVIEW_IFRAME)
    }

    private readonly BACK_PDP_BUTTON: string = "xpath=//div[@data-testid='pdp-button-back']"
    async clickOnPDPBackButton() {
        await this.helper.scrollToElement(this.BACK_PDP_BUTTON)
        await this.helper.clickOnElement(this.BACK_PDP_BUTTON)
    }
    private readonly STORE_TAB: string = "xpath=//div[@data-testid='navbar-l1']//div[text()='Store']"
    async clickOnStoreTab() {
        await this.helper.elementIsVisibleEnhanced(this.STORE_TAB, this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.STORE_TAB, this.PREVIEW_IFRAME)
    }
    private readonly CLP_CARD_NAME: string = "xpath=//div[@data-testid='clp-sectionheader-title']//div[text()='<param>']"
    async validateCLPCardNameOnPreview(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.CLP_CARD_NAME.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    async validateCLPCardNameOnPreviewNotToBeDisplayed(title: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.CLP_CARD_NAME.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly L2_MENU: string = "xpath=//div[@data-testid='navbar-l2']//div[text()='<param>']/parent::div"
    async validateL2MenuOnPreview(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.L2_MENU.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    async clickOnL2MenuOnPreview(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.L2_MENU.replace('<param>', title), this.PREVIEW_IFRAME)
        await this.helper.clickOnElement(this.L2_MENU.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    async validateL2MenuOnPreviewNotToBeDisplayed(title: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.L2_MENU.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly GRID_CATEGORY: string = "xpath=//div[@data-id='<param>']/div[@data-testid='list-page-grid']"
    async validateAddedCategoryIsAGrid(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.GRID_CATEGORY.replace('<param>', title), this.PREVIEW_IFRAME)
    }

    private readonly SLIDER_CATEGORY: string = "xpath=//div[@data-id='<param>']//div[@data-testid='list-page-slider']"
    async validateAddedCategoryIsASlider(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.SLIDER_CATEGORY.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly CLP_SECTION_HEADER: string = "xpath=//div[@data-testid='clp-sectionheader-title']/div[text()='<param>']"
    async validateCLPSectionHeaderOnPreview(title: string) {
        await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
        await this.helper.scrollOnLazyLoadWebPage(this.CLP_SECTION_HEADER.replace('<param>', title), this.PREVIEW_IFRAME)
        await this.helper.elementIsVisibleEnhanced(this.CLP_SECTION_HEADER.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly TYPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE: string = "xpath=//div[@data-id='<param>']//div[@data-testid='list-page-slider']"
    async validateCategoryPresetsOnCLPPreview(shape: string) {
        await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
        await this.helper.scrollOnLazyLoadWebPage(this.TYPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE.replace('<param>', shape), this.PREVIEW_IFRAME)
        return await this.helper.elementIsVisibleEnhanced(this.TYPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE.replace('<param>', shape), this.PREVIEW_IFRAME)
    }
    async validateCLPSectionHeaderOnPreviewIsNotPresent(shape: string) {
        //await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
        return await this.helper.elementIsNotVisibleEnhanced(this.CLP_SECTION_HEADER.replace('<param>', shape), this.PREVIEW_IFRAME)
    }
    private readonly TYPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE_AS_GRID: string = "xpath=//div[@data-id='<param>'][@data-testid='section-content-grid']"
    async validateCategoryPresetsIsGridOnCLPPreview(shape: string) {
        await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
        await this.helper.scrollOnLazyLoadWebPage(this.TYPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE_AS_GRID.replace('<param>', shape), this.PREVIEW_IFRAME)
        return await this.helper.elementIsVisibleEnhanced(this.TYPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE_AS_GRID.replace('<param>', shape), this.PREVIEW_IFRAME)
    }
    private readonly SHAPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE: string = "xpath=(//div[@data-id='<param1>']//div[contains(@class,'QVTW__aspect-ratio-<param2>')])[1]"
    async validateCategoryShapeOnCLPPreview(shape: string, aspectRatio: string) {
        await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
        await this.helper.scrollOnLazyLoadWebPage(this.SHAPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE.replace('<param1>', shape).replace('<param2>', aspectRatio), this.PREVIEW_IFRAME)
        return await this.helper.elementIsVisibleEnhanced(this.SHAPE_OF_CATEGORY_ON_CLP_PREVIEW_PAGE.replace('<param1>', shape).replace('<param2>', aspectRatio), this.PREVIEW_IFRAME)
    }
    private readonly SHAPE_OF_CATEGORY_CARDS_ON_PREVIEW: string = "xpath=//div[@data-id='<param1>']//div[contains(@class,'swiper-slide-active')]"
    private readonly SHAPE_OF_CATEGORY_CARDS_ON_PREVIEW_WITH_ATTRIBUTE: string = "xpath=//div[@data-id='<param1>']//div[contains(@class,'swiper-slide-active') and @style]"
    async validateCardSizeOnCLPPreview(shape: string) {
        await this.helper.clickOnElement(this.PROFILE_HEADER_IMAGE, this.PREVIEW_IFRAME)
        await this.helper.scrollOnLazyLoadWebPage(this.SHAPE_OF_CATEGORY_CARDS_ON_PREVIEW.replace('<param1>', shape), this.PREVIEW_IFRAME)
        await this.helper.waitForAttribute(this.SHAPE_OF_CATEGORY_CARDS_ON_PREVIEW_WITH_ATTRIBUTE.replace('<param1>', shape), this.PREVIEW_IFRAME)
        return await this.helper.getAttributeValue(this.SHAPE_OF_CATEGORY_CARDS_ON_PREVIEW.replace('<param1>', shape), 'style', this.PREVIEW_IFRAME)
    }

    private readonly UNMUTE_BUTTON: string = "xpath=(//div[@title= 'Unmute'])[1]"
    async unmuteButtonShouldBeVisible() {
        await this.helper.elementIsVisibleEnhanced(this.UNMUTE_BUTTON, this.PREVIEW_IFRAME)
    }

    private readonly MUTE_BUTTON: string = "xpath=(//div[@title= 'Mute'])[1]"
    async muteButtonShouldBeVisible() {
        await this.helper.elementIsVisibleEnhanced(this.MUTE_BUTTON, this.PREVIEW_IFRAME)
    }

    async muteButtonShouldNotBeVisible() {
        await this.helper.elementIsNotVisibleEnhanced(this.MUTE_BUTTON, this.PREVIEW_IFRAME)
    }

    private readonly SHOW_POWERED_BY_MAKER_TEXT: string = "xpath=//div[@id='maker-smartnav-inline']//a[@data-testid='made-with-maker-watermark']"
    async verifyShowPoweredByMakerIsVisible() {
        await this.clickOnDesktopPreviewDeviceButton()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForPageLoad()
        await this.helper.waitForNavigation()
        return await this.helper.isDisplayed(this.SHOW_POWERED_BY_MAKER_TEXT, this.PREVIEW_IFRAME)
    }

    async statusOfShowPoweredByMakerIsVisible() {
        await this.clickOnDesktopPreviewDeviceButton()
        await this.helper.elementIsVisibleEnhanced(this.SHOW_POWERED_BY_MAKER_TEXT, this.PREVIEW_IFRAME)
    }
    async statusOfShowPoweredByMakerIsNotVisible() {
        await this.clickOnDesktopPreviewDeviceButton()
        await this.helper.elementIsNotVisibleEnhanced(this.SHOW_POWERED_BY_MAKER_TEXT, this.PREVIEW_IFRAME)
    }
    private readonly CLP_CARD_DESCRIPTION: string = "xpath=//p[@data-testid='category-description'][text()='<param>']"
    async validateCLPCardDescriptionOnPreview(description: string) {
        await this.helper.elementIsVisibleEnhanced(this.CLP_CARD_DESCRIPTION.replace('<param>', description), this.PREVIEW_IFRAME)
    }
    async validateCLPCardDescriptionNotToBeOnPreview(description: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.CLP_CARD_DESCRIPTION.replace('<param>', description), this.PREVIEW_IFRAME)
    }
    private readonly CATEGORY_CARD_ON_PREVIEW: string = "xpath=//div[@data-testid='category-card-test-id']//div[text()='<param>']"
    async validateCategoryCardIsNotPresentInPreview(title: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.CATEGORY_CARD_ON_PREVIEW.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    async validateCategoryCardIsPresentInPreview(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.CATEGORY_CARD_ON_PREVIEW.replace('<param>', title), this.PREVIEW_IFRAME)
    }
    private readonly MENU_NODE_IMAGE: string = `xpath=//div[@data-testid='navbar-l2']//div[text()="<param>"]/parent::div//img`
    async validateMenuImageIsPresentInPreview(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.MENU_NODE_IMAGE.replace('<param>', title), this.PREVIEW_IFRAME)
    }
}