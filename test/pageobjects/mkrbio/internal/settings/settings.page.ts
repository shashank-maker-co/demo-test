// playwright-dev-page.ts
import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from './../base.page';

export class SettingsPage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    private readonly PRODUCT_CARD_SETTINGS: string = "xpath=//div[@data-testid='settings-product-cards']"
    async clickOnProductCardSettings() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_SETTINGS)
    }
    private readonly PRODUCT_CARDS_HEADER: string = "xpath=//div[text()='Customize settings related to product cards, such as display options, layout, style, and related product recommendations.']"
    async validateProductCardHeaderTextToDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_CARDS_HEADER)
    }
    private readonly QUICK_ADD_TO_CART_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-productCardEnableAddToCart']"
    async quickAddToCartToggle(state) {
        await this.toggleSwitch(state, this.QUICK_ADD_TO_CART_TOGGLE_BUTTON)
    }
    private readonly PRODUCT_CARD_SQUARE_SHAPE: string = "xpath=//div[@data-testid='categoryCardShape-Square']"
    async selectSquareProductCardshape() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_SQUARE_SHAPE)
    }
    private readonly PRODUCT_CARD_POTRAIT_SHAPE: string = "xpath=//div[@data-testid='categoryCardShape-Portrait']"
    async selectPotraitProductCardshape() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_POTRAIT_SHAPE)
    }
    private readonly PRODUCT_CARD_LANDSCAPE_SHAPE: string = "xpath=//div[@data-testid='categoryCardShape-Landscape']"
    async selectPotraitLandscapeCardshape() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_LANDSCAPE_SHAPE)
    }
    private readonly PRODUCT_CARD_IMAGE_FIT_ARROW: string = "xpath=//div[@data-testid='field-productCardFitToContainer']"
    async clickOnImageFitDropdownArrow() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_IMAGE_FIT_ARROW)
    }
    private readonly PRODUCT_CARD_IMAGE_FIT_COVER_OPTION: string = "xpath=//ul[@role='menu']/li[text()='Cover']"
    async clickOnImageFitDropdownCoverOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_IMAGE_FIT_COVER_OPTION)
    }
    private readonly PRODUCT_CARD_IMAGE_FIT_CONTAIN_OPTION: string = "xpath=//ul[@role='menu']/li[text()='Contain']"
    async clickOnImageFitDropdownContainOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_IMAGE_FIT_CONTAIN_OPTION)
    }
    private readonly PRODUCT_CARD_CROP_TITLE_ARROW: string = "xpath=//div[@data-testid='field-productCardTitleLineTruncate']"
    async clickOnCropTitleDropdownArrow() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_CROP_TITLE_ARROW)
    }
    private readonly PRODUCT_CARD_CROP_TITLE_TO_1LINE: string = "xpath=//ul[@role='menu']/li[text()='1 line']"
    async clickOnCropTitleTo1LineOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_CROP_TITLE_TO_1LINE)
    }
    private readonly PRODUCT_CARD_CROP_TITLE_TO_2LINE: string = "xpath=//ul[@role='menu']/li[text()='2 lines']"
    async clickOnCropTitleTo2LineOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_CROP_TITLE_TO_2LINE)
    }
    private readonly PRODUCT_CARD_CROP_TITLE_TO_3LINE: string = "xpath=//ul[@role='menu']/li[text()='3 lines']"
    async clickOnCropTitleTo3LineOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_CROP_TITLE_TO_3LINE)
    }
    private readonly PRODUCT_CARD_CROP_TITLE_TO_4LINE: string = "xpath=//ul[@role='menu']/li[text()='4 lines']"
    async clickOnCropTitleTo4LineOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_CROP_TITLE_TO_4LINE)
    }
    private readonly PRODUCT_CARD_CROP_TITLE_TO_5LINE: string = "xpath=//ul[@role='menu']/li[text()='5 lines']"
    async clickOnCropTitleTo5LineOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_CROP_TITLE_TO_5LINE)
    }
    private readonly PRODUCT_CARD_DISPLAY_VARIANT_ARROW: string = "xpath=//div[@data-testid='field-displayVariantBy']"
    async clickOnDisplayVariantDropdownArrow() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_DISPLAY_VARIANT_ARROW)
    }
    private readonly PRODUCT_CARD_DISPLAY_VARIANT_MAX_PRICE: string = "xpath=//ul[@role='menu']/li[text()='Max Price']"
    async clickOnDisplayVariantMaxpriceOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_DISPLAY_VARIANT_MAX_PRICE)
    }
    private readonly PRODUCT_CARD_DISPLAY_VARIANT_MIN_PRICE: string = "xpath=//ul[@role='menu']/li[text()='Min Price']"
    async clickOnDisplayVariantMinpriceOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_DISPLAY_VARIANT_MIN_PRICE)
    }

    private readonly PRODUCT_CARD_DISPLAY_VARIANT_AUTOMATIC_PRICE: string = "xpath=//ul[@role='menu']/li[text()='Automatic']"
    async clickOnDisplayVariantAutopriceOption() {
        await this.helper.clickOnElement(this.PRODUCT_CARD_DISPLAY_VARIANT_AUTOMATIC_PRICE)
    }

    private readonly GENERAL_HEADING: string = "xpath=//div[contains(text(), 'Take control')]"
    async generalSectionHeadingIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.GENERAL_HEADING)
    }

    private readonly SHOPPABLE_MEDIA_SUBSECTION: string = "xpath=//div[@data-testid='settings-shoppable-media']"
    async clickOnShoppableMediaSectionUnderSettings() {
        await this.helper.clickOnElement(this.SHOPPABLE_MEDIA_SUBSECTION)
    }

    private readonly PDP_MEDIA_SUBSECTION: string = "xpath=//div[@data-testid='settings-pdp']"
    async clickOnProductDesignPageSectionUnderSettings() {
        await this.helper.clickOnElement(this.PDP_MEDIA_SUBSECTION)
    }

    private readonly VIDEOS_SUBSECTION: string = "xpath=//div[@data-testid='settings-videos']"
    async clickOnVideosSectionUnderSettings() {
        await this.helper.clickOnElement(this.VIDEOS_SUBSECTION)
    }

    private readonly SHOPPABLE_MEDIA_HEADING: string = "xpath=//div[contains(text(), 'Customize the display of shoppable media')]"
    async shoppableMediaSectionHeadingIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.SHOPPABLE_MEDIA_HEADING)
    }

    private readonly PDP_HEADING: string = "xpath=//div[contains(text(), 'Choose your preferred product')]"
    async productDesignPageSectionHeadingIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PDP_HEADING)
    }

    private readonly SETTINGS_BUTTON: string = "xpath=//div[@data-id='Settings']"
    async clickOnSettingsButton() {
        await this.helper.elementIsVisibleEnhanced(this.SETTINGS_BUTTON)
        await this.helper.clickOnElement(this.SETTINGS_BUTTON)
    }

    private readonly MINICART_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-cart']"
    async toggleMiniCartSwitchOn() {
        await this.toggleSwitch("on", this.MINICART_TOGGLE_BUTTON)
    }
    async toggleMiniCartSwitchOff() {
        await this.toggleSwitch("off", this.MINICART_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }

    private readonly CAROUSEL_DESKTOP_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-quickviewCarousel']"
    async toggleCarouselDesktopSwitchOn() {
        await this.toggleSwitch("on", this.CAROUSEL_DESKTOP_TOGGLE_BUTTON)
    }
    async toggleCarouselDesktopSwitchOff() {
        await this.toggleSwitch("off", this.CAROUSEL_DESKTOP_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }

    private readonly SHOW_CONTROLS_TOGGLE_BUTTON: string = "xpath=//div[text() = 'Show Controls']//..//..//input"
    async toggleShowControlsSwitchOn() {
        await this.toggleSwitch("on", this.SHOW_CONTROLS_TOGGLE_BUTTON)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }
    async toggleShowControlsSwitchOff() {
        await this.toggleSwitch("off", this.SHOW_CONTROLS_TOGGLE_BUTTON)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }

    private readonly MUTE_TOGGLE_BUTTON: string = "xpath=//div[text() = 'Mute']//..//..//input"
    async toggleMuteSwitchOn() {
        await this.toggleSwitch("on", this.MUTE_TOGGLE_BUTTON)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }
    async toggleMuteSwitchOff() {
        await this.toggleSwitch("off", this.MUTE_TOGGLE_BUTTON)
        await this.helper.waitFor(1000)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }

    private readonly AUTOPLAY_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-quickviewAutoplay']"
    async toggleAutoPlaySwitchOn() {
        await this.toggleSwitch("on", this.AUTOPLAY_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }
    async toggleAutoPlaySwitchOff() {
        await this.toggleSwitch("off", this.AUTOPLAY_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }

    private readonly PICTURE_IN_PICTURE_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-quickviewPictureInPicture']"
    async togglePictureInPictureSwitchOn() {
        await this.toggleSwitch("on", this.PICTURE_IN_PICTURE_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }
    async togglePictureInPictureSwitchOff() {
        await this.toggleSwitch("off", this.PICTURE_IN_PICTURE_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }

    private readonly SHOW_OUT_OF_STOCK_PRODUCTS_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-hideOutOfStock']"
    async toggleShowOutOfStockProductsSwitchOff() {
        await this.toggleSwitch("off", this.SHOW_OUT_OF_STOCK_PRODUCTS_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }
    async toggleShowOutOfStockProductsSwitchOn() {
        await this.toggleSwitch("on", this.SHOW_OUT_OF_STOCK_PRODUCTS_TOGGLE_BUTTON)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
    }

    private readonly DESIGN_HEADER: string = "xpath=//div[text()='The design panel in the settings allows you to customize the appearance of the interface by changing font styles and colors to fit your personal preference.']"
    async validateDesignHeaderTextToDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.DESIGN_HEADER)
    }
    private readonly OPEN_LINKS_IN_NEW_TAB_TOGGLE_BUTTON: string = "xpath=//input[@data-testid='field-openLinkNewTab']"
    async toggleOpenLinksInNewTabSwitchOn() {
        await this.toggleSwitch("on", this.OPEN_LINKS_IN_NEW_TAB_TOGGLE_BUTTON)
        await this.helper.waitForNavigation()
    }
    private readonly DESIGN_SETTINGS: string = "xpath=//div[@data-testid='settings-design']"
    async clickOnDesignSettings() {
        await this.helper.elementIsVisibleEnhanced(this.DESIGN_SETTINGS)
        await this.helper.clickOnElement(this.DESIGN_SETTINGS)
    }
    private readonly FONT_FAMILY_TEXT_FIELD: string = "xpath=//input[@type='text'][@placeholder='system-ui, Helvetica, sans-serif']"
    private readonly FONT_FAMILY_HEADER_FIELD: string = "xpath=//div[text() ='Font Family']"
    async enterFontFamily(font: string) {
        await this.helper.clearTextBox(this.FONT_FAMILY_TEXT_FIELD)
        await this.helper.enterText(this.FONT_FAMILY_TEXT_FIELD, font)
        await this.helper.clickOnElement(this.FONT_FAMILY_HEADER_FIELD)
    }

    private readonly PRIMARY_COLOR_TEXT_FIELD: string = "xpath=//div[@data-testid='field-primaryColor']//input[@type='text']"
    async enterPrimaryColor(color: string) {
        //await this.helper.(this.PRIMARY_COLOR_TEXT_FIELD)
        await this.helper.fillText(this.PRIMARY_COLOR_TEXT_FIELD, color)
        await this.helper.waitFor(8000)
    }
    private readonly SECONDARY_COLOR_TEXT_FIELD: string = "xpath=//div[@data-testid='field-secondaryColor']//input[@type='text']"
    async enterSecondaryColor(color: string) {
        await this.helper.fillText(this.SECONDARY_COLOR_TEXT_FIELD, color)
        await this.helper.waitFor(5000)
    }
    private readonly TERTIARY_COCLOR_TEXT_FIELD: string = "xpath=//div[@data-testid='field-tertiaryColor']//input[@type='text']"
    async enterTertiaryColor(color: string) {
        //await this.helper.clearTextBox(this.TERTIARY_COCLOR_TEXT_FIELD)
        await this.helper.fillText(this.TERTIARY_COCLOR_TEXT_FIELD, color)
        await this.helper.waitFor(8000)
    }
    private readonly ACCENT_COCLOR_TEXT_FIELD: string = "xpath=//div[@data-testid='field-accentColor']//input[@type='text']"
    async enterAccentColor(color: string) {
        //await this.helper.clearTextBox(this.ACCENT_COCLOR_TEXT_FIELD)
        await this.helper.fillText(this.ACCENT_COCLOR_TEXT_FIELD, color)
    }
    private readonly PLACEHOLDER_COLOR_TEXT_FIELD: string = "xpath=//div[@data-testid='field-productCardPlaceholderColor']//input[@type='text']"
    async enterPlaceholderColor(color: string) {
        await this.helper.fillText(this.PLACEHOLDER_COLOR_TEXT_FIELD, color)
    }

    private readonly MAKER_PDP_CARD: string = "xpath=//div[@data-testid='openProductLink-no']"
    async clickOnMakerPDPCard() {
        await this.helper.clickOnElement(this.MAKER_PDP_CARD)
        await this.helper.waitForPageLoad()
    }

    private readonly YOUR_SHOPIFY_CARD: string = "xpath=//div[@data-testid='openProductLink-yes']"
    async clickYourShopifyStoreCard() {
        await this.helper.clickOnElement(this.YOUR_SHOPIFY_CARD)
        await this.helper.waitForPageLoad()
        await this.helper.waitForNavigation()
    }

    private readonly ADD_TO_CART_PREVIEW_BUTTON: string = "xpath=//div[@data-testid='pdpCTAButtons-primary-addtocart']"
    async clickAddToCartSettingsCard() {
        return await this.helper.clickOnElement(this.ADD_TO_CART_PREVIEW_BUTTON)
    }

    private readonly OPEN_SHOPIFY_BUTTON: string = "xpath=//div[@data-testid='pdpCTAButtons-primary-openlink']"
    async clickOpenYourShopifyStorePDPCard() {
        return await this.helper.clickOnElement(this.OPEN_SHOPIFY_BUTTON)
    }


    private readonly SECONDARY_CTA_OPEN_SHOPIFY_BUTTON: string = "xpath=//div[@data-testid='pdpCTAButtons-secondary-openlink']"
    async isSecondaryCTAButtonOpenYourShopifyStorePDPVisible() {
        await this.helper.elementIsVisibleEnhanced(this.SECONDARY_CTA_OPEN_SHOPIFY_BUTTON)
    }
    async isSecondaryCTAButtonOpenYourShopifyStorePDPNotVisible() {
        await this.helper.elementIsNotVisibleEnhanced(this.SECONDARY_CTA_OPEN_SHOPIFY_BUTTON)
    }
    private readonly SECONDARY_CTA_ADD_TO_CART_BUTTON: string = "xpath=//div[@data-testid='pdpCTAButtons-secondary-addtocart']"
    async isSecondaryCTAButtonAddToCartVisible() {
        await this.helper.elementIsVisibleEnhanced(this.SECONDARY_CTA_ADD_TO_CART_BUTTON)
    }

    async isSecondaryCTAButtonAddToCartNotVisible() {
        await this.helper.elementIsNotVisibleEnhanced(this.SECONDARY_CTA_ADD_TO_CART_BUTTON)
    }
    private readonly ADD_TO_CART_LABEL_INPUT_FIELD: string = "xpath=//div[@data-testid='field-pdpAddToCartLabel']/input"
    async enterTextToAddToCartLabel(text: string) {
        await this.helper.fillText(this.ADD_TO_CART_LABEL_INPUT_FIELD, text)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }

    private readonly PLAN_AND_BILLING_HEADING: string = "xpath=//div[contains(text(), 'Pick an account plan that fits')]"
    async planAndBillingHeadingIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PLAN_AND_BILLING_HEADING)
    }
    private readonly CURRENT_PLAN_HEADING: string = "xpath=//div[contains(text(), 'your account if you need to downgrade during the billing cycle')]"
    async currentPlanHeadingIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.CURRENT_PLAN_HEADING)
    }


    private readonly ACCOUNT_AND_BILLING_SUBHEADER: string = "xpath=//div[@data-id = 'Plan & Billing']"
    async clickOnPlanAndBillingSubHeader() {
        await this.helper.clickOnElement(this.ACCOUNT_AND_BILLING_SUBHEADER)
    }

    private readonly INTEGRATION_SUBHEADER: string = "xpath=//div[@data-id = 'Integrations']"
    async clickOnIntegrationSubHeader() {
        await this.helper.clickOnElement(this.INTEGRATION_SUBHEADER)
    }

    private readonly MKR_BIO_SUBHEADER: string = "xpath=//div[@data-id = 'Mkr.Bio']"
    async clickOnMkrBioSubHeader() {
        await this.helper.clickOnElement(this.MKR_BIO_SUBHEADER)
    }

    private readonly STARTER_PLAN_CARD: string = "xpath=//div[contains(text(), 'Small stores just starting out')]"
    async starterPlanCard() {
        await this.helper.elementIsVisibleEnhanced(this.STARTER_PLAN_CARD)
    }

    private readonly PRO_PLAN_CARD: string = "xpath=//div[contains(text(), 'Growing stores with sizable traffic')]"
    async proPlanCard() {
        await this.helper.elementIsVisibleEnhanced(this.PRO_PLAN_CARD)
    }

    private readonly ENTERPRISE_PLAN_CARD: string = "xpath=//div[contains(text(), 'Custom pricing to fit your needs')]"
    async enterprisePlanCard() {
        await this.helper.elementIsVisibleEnhanced(this.ENTERPRISE_PLAN_CARD)
    }

    private readonly CANCEL_SUBSCRIPTION_BUTTON: string = "xpath=//div[contains(text(), 'Cancel subscription')]/..//parent::button"
    async cancelSubscription() {
        await this.helper.elementIsVisibleEnhanced(this.CANCEL_SUBSCRIPTION_BUTTON)
    }

    private readonly SHOPIFY_CARD: string = "xpath=//div[text()='Shopify']"
    async shopifyIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.SHOPIFY_CARD)
    }

    private readonly INSTAGRAM_CARD: string = "xpath=//div[text()='Instagram']"
    async instagramIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.INSTAGRAM_CARD)
    }

    private readonly GOOGLE_ADS_CARD: string = "xpath=//div[text()='Google Ads']"
    async googleAdsIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.GOOGLE_ADS_CARD)
    }

    private readonly FACEBOOK_CARD: string = "xpath=//div[text()='Facebook Pixel']"
    async facebookIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.FACEBOOK_CARD)
    }

    private readonly PINTREST_CARD: string = "xpath=//div[text()='Pinterest Tag']"
    async pintresetIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.PINTREST_CARD)
    }

    private readonly MAKER_PAGES_CARD: string = "xpath=//div[text()='Maker Pages']"
    async makerPagesIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.MAKER_PAGES_CARD)
    }

    private readonly MKR_BIO_HEADER_TEXT: string = "xpath=//div[contains(text(),'Bio related settings')]"
    async verifyHeaderTextOfMkrBio() {
        await this.helper.elementIsVisibleEnhanced(this.MKR_BIO_HEADER_TEXT)
    }

    private readonly POWERED_BY_MAKER_TOGGLE_BUTTON: string = "xpath=//input[@type='checkbox']"
    async toggleShowPoweredbyMaker(state) {
        await this.toggleSwitch(state, this.POWERED_BY_MAKER_TOGGLE_BUTTON)
    }

    private readonly MKR_BIO_SAVE_BUTTON: string = "xpath=//div[text()='Save']/.."
    async clickOnSaveButtonOnMkrBio() {
        await this.helper.clickOnElement(this.MKR_BIO_SAVE_BUTTON)
        await this.helper.waitForNavigation()
    }

    private readonly MKR_BIO_DELETE_BUTTON: string = "xpath=//div[text()='Bio Config']/../..//following-sibling::div//button"
    async verifyDeleteButtonInMkrBioIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.MKR_BIO_DELETE_BUTTON)
    }

    private readonly SHOPIFY_CONNECT_TEXT: string = "xpath=//div[text()='Bio Config']/../..//following-sibling::div//button/../../..//div//span"
    async verifyShopifyConnectTextIsVisible() {
        await this.helper.elementIsVisibleEnhanced(this.SHOPIFY_CONNECT_TEXT)
    }

}
