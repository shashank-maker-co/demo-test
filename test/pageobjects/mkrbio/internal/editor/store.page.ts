import { Browser, expect, Locator, Page } from '@playwright/test';
import { Helper } from '../../../../../utils/helper';
import { BasePage } from '../base.page';

export class StorePage extends BasePage {
    readonly helper: Helper;
    constructor(page: Page) {
        super(page);
        this.helper = new Helper(this.page);
    }
    private readonly INDEX_NODE_MORE_OPTIONS_BUTTON: string = "xpath=//button[@data-id='index'][@data-testid='node-action-more-options']"
    async clickOnAllTabMoreOptionsButton() {
        await this.helper.clickOnElement(this.INDEX_NODE_MORE_OPTIONS_BUTTON)
    }
    private readonly INDEX_NODE_EDIT_BUTTON: string = "xpath=//div[@data-id='index'][@data-testid='node-action-edit-details']"
    async hoverOnAllTabEditButton() {
        //await this.helper.elementIsVisibleEnhanced(this.INDEX_NODE_EDIT_BUTTON)
        await this.helper.hoverOnElement(this.INDEX_NODE_EDIT_BUTTON)
    }
    async clickOnAllTabEditButton() {
        await this.helper.clickOnElement(this.INDEX_NODE_EDIT_BUTTON)
    }
    private readonly DETAILS_PANEL: string = "xpath=//div[@data-testid='category-editor-tabs']/div[@data-id='Details']"
    async validateDetailsPanelIsOpened() {
        return await this.helper.isDisplayed(this.DETAILS_PANEL)
    }
    private readonly STORE_TAB: string = "xpath=//div[@data-id='Store']"
    async clickOnStoreTab() {
        await this.helper.clickOnElement(this.STORE_TAB)
    }
    private readonly ADD_NEW_ITEM_ON_STORE: string = "xpath=//div[@id='insert-tool-button']"
    async clickOnAddNewItemOnStoreTab() {
        await this.helper.clickOnElement(this.ADD_NEW_ITEM_ON_STORE)
    }
    private readonly NAVIGATION_INSERT_PANEL: string = "xpath=//div[@id='insert-tool-button']"
    async validateNavigationInsertPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.NAVIGATION_INSERT_PANEL)
    }
    private readonly CATEGORIES_MENU_ON_SIDE_PANEL: string = "xpath=//div[contains(@class,'commonly_used-<param1>')]//div[text()='<param2>']"
    async clickOnMenuOnSidePanel(menu: string, menuItem: string) {
        await this.helper.elementIsVisibleEnhanced(this.CATEGORIES_MENU_ON_SIDE_PANEL.replace('<param1>', menu).replace('<param2>', menuItem))
        await this.helper.clickOnElement(this.CATEGORIES_MENU_ON_SIDE_PANEL.replace('<param1>', menu).replace('<param2>', menuItem))
    }
    private readonly SUBMENU_ITEM_ON_SIDE_PANEL: string = "xpath=//div[contains(@class,'commonly_used-<param1>/<param2>/<param3>')]//div[text()='<param4>']"
    async clickOnSubMenuItemOnSidePanel(name: string, type: string, subMenu: string, subMenuItem: string) {
        await this.helper.elementIsVisibleEnhanced(this.SUBMENU_ITEM_ON_SIDE_PANEL.replace('<param1>', name).replace('<param2>', type).replace('<param3>', subMenu).replace('<param4>', subMenuItem))
        await this.helper.clickOnElement(this.SUBMENU_ITEM_ON_SIDE_PANEL.replace('<param1>', name).replace('<param2>', type).replace('<param3>', subMenu).replace('<param4>', subMenuItem))
    }
    private readonly NODE_TITLE: string = `xpath=//span[@data-testid='navtree-node-title']//div[text()="<param>"]`
    async validateNodeTitle(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.NODE_TITLE.replace('<param>', title))
    }
    async validateNodeTitleNoToBePresent(title: string) {
        await this.helper.elementIsNotVisibleEnhanced(this.NODE_TITLE.replace('<param>', title))
    }
    private readonly PRODUCT_COLLECTION_ON_SIDE_PANEL: string = "xpath=//div[text()='<param>']/parent::div//div//button[@data-testid='store-collection-add-store-collection']"
    async clickOnProductCollectionItemOnSidePanel(name: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_COLLECTION_ON_SIDE_PANEL.replace('<param>', name))
        await this.helper.clickOnElement(this.PRODUCT_COLLECTION_ON_SIDE_PANEL.replace('<param>', name))
    }
    private readonly TREE_NODE_ITEM: string = `xpath=//div[@data-testid='navtree-node-item'][@data-id="<param>"]`
    async hoverOnNodeTreeItem(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.TREE_NODE_ITEM.replace('<param>', title))
        await this.helper.hoverOnElement(this.TREE_NODE_ITEM.replace('<param>', title))
    }
    async clickOnNodeTreeItem(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.TREE_NODE_ITEM.replace('<param>', title))
        await this.helper.clickOnElement(this.TREE_NODE_ITEM.replace('<param>', title))
    }
    private readonly ADD_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-id='<param>']//button[@data-testid='node-action-combine-expand-insert-panel']"
    async clickAddButtonOnNodeTreeItem(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.ADD_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.hoverOnElement(this.ADD_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.clickOnElement(this.ADD_BUTTON_ON_TREE_NODE.replace('<param>', title))
    }
    private readonly REPLACE_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-id='<param>']//button[@data-testid='node-action-replace-init']"
    async clickReplaceButtonOnNodeTreeItem(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.REPLACE_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.hoverOnElement(this.REPLACE_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.clickOnElement(this.REPLACE_BUTTON_ON_TREE_NODE.replace('<param>', title))
    }
    private readonly EDIT_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-id='<param>']//button[@data-testid='node-action-edit-details']"
    async clickEditButtonOnNodeTreeItem(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.EDIT_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.hoverOnElement(this.EDIT_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.clickOnElement(this.EDIT_BUTTON_ON_TREE_NODE.replace('<param>', title))
    }
    private readonly PRODUCT_COLLECTION_NAVIGATION_INSERT_PANEL: string = "xpath=//div[@id='navigation-insert-panel']"
    async validateProductCollectionNavigationInsertPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_COLLECTION_NAVIGATION_INSERT_PANEL)
    }
    private readonly PRODUCT_COLLECTION_NAVIGATION_EDITOR: string = "xpath=//div[@id='navigation-editor']"
    async validateProductCollectionNavigationEditorPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_COLLECTION_NAVIGATION_EDITOR)
    }
    private readonly TITLE_FIELD_ON_DETAILS_PANEL: string = "xpath=//div[@data-testid='field-title']/input"
    async editTitle(title: string) {
        await this.helper.enterText(this.TITLE_FIELD_ON_DETAILS_PANEL, title)
    }
    private readonly PRODUCTS_TAB_ON_FIELD_ON_NAVIGATION_EDITOR: string = "xpath=//div[@data-id='Products']"
    async clickOnProductsTabOnNavigationEditor() {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCTS_TAB_ON_FIELD_ON_NAVIGATION_EDITOR)
        await this.helper.clickOnElement(this.PRODUCTS_TAB_ON_FIELD_ON_NAVIGATION_EDITOR)
    }
    private readonly MANUALLY_ADD_PRODUCTS_SECTION_ON_NAVIGATION_EDITOR: string = "xpath=//div[@datatestid='field-featuredProducts']"
    async validateManuallyAddProductsSectionIsPresentInNavigationEditor() {
        await this.helper.elementIsVisibleEnhanced(this.MANUALLY_ADD_PRODUCTS_SECTION_ON_NAVIGATION_EDITOR)
    }

    private readonly COLLECTION_CROSS_BUTTON: string = "xpath=//button[@data-testid='disconnect-button']"
    async disconnectACollectionIfPresent() {
        if (await this.helper.isDisplayed(this.COLLECTION_CROSS_BUTTON) == true) {
            await this.helper.clickOnElement(this.COLLECTION_CROSS_BUTTON)
        } else { }

    }
    private readonly CONNECT_TO_A_COLLECTION_SECTION_ON_NAVIGATION_EDITOR: string = "xpath=//div[text()='Connect to a collection']"
    async validateConnectToACollectionSectionIsPresentInNavigationEditor() {
        await this.helper.elementIsVisibleEnhanced(this.CONNECT_TO_A_COLLECTION_SECTION_ON_NAVIGATION_EDITOR)
    }
    private readonly MANUALLY_ADD_PRODUCTS_SECTION_SEARCH_BOX_ON_NAVIGATION_EDITOR: string = "xpath=//input[@placeholder='Search by product title or ID...']"
    async enterTextInToManuallyAddProductsSectionInNavigationEditor(title: string) {
        return await this.helper.enterText(this.MANUALLY_ADD_PRODUCTS_SECTION_SEARCH_BOX_ON_NAVIGATION_EDITOR, title)
    }
    private readonly PRODUCT_TITLE_ON_MANUALLY_ADD_PRODUCTS_SECTION_SEARCH_DROPDOWN: string = "xpath=//div[@datatestid='field-featuredProducts']//div[text()='<param>']"
    async validateSearchResultIsDisplayedOnManuallyAddProductsSectionInNavigationEditor(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ON_MANUALLY_ADD_PRODUCTS_SECTION_SEARCH_DROPDOWN.replace('<param>', title))
    }
    async clickOnProductNameOnSearchResultsOnManuallyAddProductsSectionInNavigationEditor(title: string) {
        await this.helper.clickOnElement(this.PRODUCT_TITLE_ON_MANUALLY_ADD_PRODUCTS_SECTION_SEARCH_DROPDOWN.replace('<param>', title))
    }
    private readonly PRODUCT_TITLE_ON_LIST_ON_MANUALLY_ADD_PRODUCTS_SECTION: string = "xpath=//span[@data-testid='productlist-node-title']//div[text()='<param>']"
    async waitForTaggedProductInTheListOfManuallyAddProductsSectionInNavigationEditor(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ON_LIST_ON_MANUALLY_ADD_PRODUCTS_SECTION.replace('<param>', title))
    }
    async validateTaggedProductInTheListOfManuallyAddProductsSectionInNavigationEditor(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ON_LIST_ON_MANUALLY_ADD_PRODUCTS_SECTION.replace('<param>', title))
    }
    private readonly CONNECT_TO_A_COLLECTION_SECTION_SEARCH_BOX_ON_NAVIGATION_EDITOR: string = "xpath=//input[@placeholder='Search by collection title or ID...']"
    async enterTextInToConnectToACollectionSectionInNavigationEditor(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.CONNECT_TO_A_COLLECTION_SECTION_SEARCH_BOX_ON_NAVIGATION_EDITOR)
        await this.helper.enterText(this.CONNECT_TO_A_COLLECTION_SECTION_SEARCH_BOX_ON_NAVIGATION_EDITOR, title)
    }
    async clickOnSearchBarInConnectToACollectionSectionInNavigationEditor() {
        return await this.helper.clickOnElement(this.CONNECT_TO_A_COLLECTION_SECTION_SEARCH_BOX_ON_NAVIGATION_EDITOR)
    }
    private readonly CONNECT_TO_A_COLLECTION_SECTION_SEARCH_DROPDOWN: string = "xpath=//div[text()='Connect to a collection']//div[text()='<param>']"
    async validateSearchResultIsDisplayedOnConnectToACollectionSectioInNavigationEditor(title: string) {
        return await this.helper.elementIsVisibleEnhanced(this.CONNECT_TO_A_COLLECTION_SECTION_SEARCH_DROPDOWN.replace('<param>', title))
    }
    private readonly CONNECT_TO_A_COLLECTION_SECTION_SEARCH_ITEM_DROPDOWN: string = "xpath=//div[text()='Connect to a collection']/following::div[text()='<param>']"
    async clickOnProductNameOnSearchResultsOnConnectToACollectionSectioInNavigationEditor(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.CONNECT_TO_A_COLLECTION_SECTION_SEARCH_ITEM_DROPDOWN.replace('<param>', title))
        await this.helper.clickOnElement(this.CONNECT_TO_A_COLLECTION_SECTION_SEARCH_ITEM_DROPDOWN.replace('<param>', title))
    }
    private readonly COLLECTION_TITLE_ON_LIST_ON_CONNECT_TO_A_COLLECTION_SECTION: string = "xpath=//div[@datatestid='field-connectedProducts']//div[text()='<param>']"
    async waitForTaggedProductInTheListOfConnectToACollectionSectioInNavigationEditor(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.COLLECTION_TITLE_ON_LIST_ON_CONNECT_TO_A_COLLECTION_SECTION.replace('<param>', title))
    }
    async validateTaggedProductInTheListOfConnectToACollectionSectionInNavigationEditor(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.COLLECTION_TITLE_ON_LIST_ON_CONNECT_TO_A_COLLECTION_SECTION.replace('<param>', title))
    }
    private readonly STYLES_TAB_ON_NAVIGATION_EDITOR: string = "xpath=//div[@data-id='Style']"
    async clickOnStylesTabOnNavigationEditor() {
        await this.helper.elementIsVisibleEnhanced(this.STYLES_TAB_ON_NAVIGATION_EDITOR)
        await this.helper.clickOnElement(this.STYLES_TAB_ON_NAVIGATION_EDITOR)
    }
    async validateStylesTabOnNavigationEditorIsSelected() {
        await this.helper.elementIsVisibleEnhanced(this.STYLES_TAB_ON_NAVIGATION_EDITOR)
        return await this.helper.getAttributeValue(this.STYLES_TAB_ON_NAVIGATION_EDITOR, 'data-active')
    }
    private readonly NAVIGATION_EDITOR__STYLE_PRESETS: string = "xpath=//div[text()='<param1>']/parent::div/parent::div//div[@data-id='<param2>']"
    private readonly NAVIGATION_EDITOR__STYLE_PRESETS_WITH_ATTRIBUTE: string = "xpath=//div[text()='<param1>']/parent::div/parent::div//div[@data-id='<param2>' and @data-active]"
    async validateStylePresetToBeSelected(type: string, style: string) {
        await this.helper.waitForAttribute(this.NAVIGATION_EDITOR__STYLE_PRESETS_WITH_ATTRIBUTE.replace('<param1>', type).replace('<param2>', style))
        return await this.helper.getAttributeValues(this.NAVIGATION_EDITOR__STYLE_PRESETS.replace('<param1>', type).replace('<param2>', style), 'data-active')
    }
    async selectStylePreset(type: string, style: string) {
        await this.helper.elementIsVisibleEnhanced(this.NAVIGATION_EDITOR__STYLE_PRESETS.replace('<param1>', type).replace('<param2>', style))
        await this.helper.clickOnElement(this.NAVIGATION_EDITOR__STYLE_PRESETS.replace('<param1>', type).replace('<param2>', style))
    }
    private readonly DONE_BUTTON: string = "xpath=//button/div[text()='Done']"
    async clickDoneButton() {
        await this.helper.clickOnElement(this.DONE_BUTTON)
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.waitForNavigation()
    }
    async clickDoneButtonEnhanced() {
        await this.helper.clickOnElement(this.DONE_BUTTON)
    }
    private readonly CARD_SIZE_ON_NAVIGATION_EDITOR: string = "xpath=//div[@data-id='slider-mark'][text()='<param>']"
    async clickOnCardSizeOnNavigationEditor(size: string) {
        await this.helper.elementIsVisibleEnhanced(this.CARD_SIZE_ON_NAVIGATION_EDITOR.replace('<param>', size))
        await this.helper.clickOnElement(this.CARD_SIZE_ON_NAVIGATION_EDITOR.replace('<param>', size))
    }
    private readonly PRESETS_COLLAPSE_AND_EXPAND_ACCORDIAN_ON_NAVIGATION_EDITOR: string = "xpath=//div[@id='navigation-editor']//div[text()='<param>']"
    async clickOnExpandAndCollapseAccordianOnNavigationEditor(text: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRESETS_COLLAPSE_AND_EXPAND_ACCORDIAN_ON_NAVIGATION_EDITOR.replace('<param>', text))
        await this.helper.clickOnElement(this.PRESETS_COLLAPSE_AND_EXPAND_ACCORDIAN_ON_NAVIGATION_EDITOR.replace('<param>', text))
    }
    private readonly ADVANCED_SECTION_LAYOUT_ON_NAVIGATION_EDITOR: string = "xpath=//button[@data-id='<param>']"

    async validateAdvancedSectionLayoutToBeSelected(type: string) {
        return await this.helper.getAttributeValues(this.ADVANCED_SECTION_LAYOUT_ON_NAVIGATION_EDITOR.replace('<param>', type), 'data-active')
    }
    async clickOnSectionLayoutOnNavigationEditor(type: string) {
        await this.helper.clickOnElement(this.ADVANCED_SECTION_LAYOUT_ON_NAVIGATION_EDITOR.replace('<param>', type))
    }
    private readonly MOBILE_SECTION_LAYOUT: string = "xpath=//div[@data-id='Mobile layout']"
    async clickOnSectionLayoutMobileOnNavigationEditor() {
        await this.helper.elementIsVisibleEnhanced(this.MOBILE_SECTION_LAYOUT)
        await this.helper.clickOnElement(this.MOBILE_SECTION_LAYOUT)
    }

    private readonly DESKTOP_SECTION_LAYOUT: string = "xpath=//div[@data-id='Desktop layout']"
    async clickOnSectionLayoutDesktopOnNavigationEditor() {
        await this.helper.clickOnElement(this.DESKTOP_SECTION_LAYOUT)
    }

    private readonly SECTION_LAYOUT_RESET_TO_DEFAULTS_BUTTON: string = "xpath=//div[text()='Section layout']/parent::div//div[text()='Reset to default']"
    async clickOnSectionLayoutResetToDefaultsOnNavigationEditor() {
        await this.helper.elementIsVisibleEnhanced(this.SECTION_LAYOUT_RESET_TO_DEFAULTS_BUTTON)
        await this.helper.clickOnElement(this.SECTION_LAYOUT_RESET_TO_DEFAULTS_BUTTON)
    }
    private readonly CARD_SHAPE_ON_NAVIGATION_EDITOR: string = "xpath=//div[text() = 'Card shape']/../..//div[contains(@title, '<param>')]"
    async selectCardShapeOnNavigationEditor(shape: string) {
        await this.helper.elementIsVisibleEnhanced(this.CARD_SHAPE_ON_NAVIGATION_EDITOR.replace('<param>', shape))
        await this.helper.clickOnElement(this.CARD_SHAPE_ON_NAVIGATION_EDITOR.replace('<param>', shape))
    }
    private readonly ADVANCED_OPTIONS: string = "xpath=//div[text()='Advanced <param> options']/parent::div/parent::div//input[@type='checkbox']"
    async clickOnAdvancedOptionsToggle(shape: string) {
        await this.helper.clickOnElement(this.ADVANCED_OPTIONS.replace('<param>', shape))
    }
    private readonly COLUMNS_ADVANCED_OPTIONS: string = "xpath=//div[text()='Columns']"
    async validateColumnsOptionsOnInNavigationEditorIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.COLUMNS_ADVANCED_OPTIONS)
    }
    private readonly ADVANCED_TRUNCATE_GRID_OPTIONS: string = "xpath=//div[text()='Truncate <param>']/parent::div/parent::div//input[@type='checkbox']"
    async clickOnAdvancedOptionsTruncateGridToggle(shape: string) {
        await this.helper.clickOnElement(this.ADVANCED_TRUNCATE_GRID_OPTIONS.replace('<param>', shape))
    }
    private readonly MAX_NO_OF_ROWS_ADVANCED_OPTIONS: string = "xpath=//div[text()='Max number of rows']"
    async validateMaxNoOfRowsOnInNavigationEditorIsDisplayed() {
        await this.helper.elementIsVisibleEnhanced(this.MAX_NO_OF_ROWS_ADVANCED_OPTIONS)
    }
    private readonly MORE_OPTIONS_BUTTON_ON_TREE_NODE: string = `xpath=//div[@data-id="<param>"]//button[@data-testid='node-action-more-options']`
    async clickOnMoreOptionsOnNodeTreeItem(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.hoverOnElement(this.MORE_OPTIONS_BUTTON_ON_TREE_NODE.replace('<param>', title))
        await this.helper.clickOnElement(this.MORE_OPTIONS_BUTTON_ON_TREE_NODE.replace('<param>', title))
    }
    private readonly MORE_OPTIONS_EDIT_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-testid='node-action-edit-details']"
    async clickOnMoreOptionsEditButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_EDIT_BUTTON_ON_TREE_NODE)
        await this.helper.clickOnElement(this.MORE_OPTIONS_EDIT_BUTTON_ON_TREE_NODE)
    }
    private readonly MORE_OPTIONS_REPLACE_WITH_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-testid='node-action-replace-init']"
    async clickOnMoreOptionsReplaceWithButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_REPLACE_WITH_BUTTON_ON_TREE_NODE)
        await this.helper.hoverOnElement(this.MORE_OPTIONS_REPLACE_WITH_BUTTON_ON_TREE_NODE)
        await this.helper.clickOnElement(this.MORE_OPTIONS_REPLACE_WITH_BUTTON_ON_TREE_NODE)
    }
    private readonly REPLACE_BUTTON_ON_INSERT_PANEL: string = "xpath=//div[text()='<param>']/parent::div//button[@data-testid='store-collection-replace-do']"
    async clickONReplaceButtonOnInsetPanel(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.REPLACE_BUTTON_ON_INSERT_PANEL.replace('<param>', title))
        await this.helper.clickOnElement(this.REPLACE_BUTTON_ON_INSERT_PANEL.replace('<param>', title))
    }
    private readonly MORE_OPTIONS_MOVE_TO_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-testid='node-action-move-to']"
    async hoverOnMoreOptionsMoveToButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_MOVE_TO_BUTTON_ON_TREE_NODE)
        await this.helper.hoverOnElement(this.MORE_OPTIONS_MOVE_TO_BUTTON_ON_TREE_NODE)
    }
    private readonly SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE: string = "xpath=//input[@placeholder='Search menu to add to...']"
    async validateSearchBarIsOpenedOnClickingMoveToInNodeTreeMoreOptions() {
        await this.helper.elementIsVisibleEnhanced(this.SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE)
    }
    async enterTextOnMoveToSearchBarInNodeTreeMoreOptions(text: string) {
        await this.helper.enterText(this.SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE, text)
    }
    private readonly SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE_SEARCH_RESULTS: string = `xpath=//div[@data-id="relevant-<param>"]`
    async clickOnSearchResultOnMoveToSearchListInNodeTreeMoreOptions(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE_SEARCH_RESULTS.replace('<param>', title))
        await this.helper.hoverOnElement(this.SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE_SEARCH_RESULTS.replace('<param>', title))
        await this.helper.clickOnElement(this.SEARCH_MENU_TO_ADD_TEXT_FIELD_ON_TREE_NODE_SEARCH_RESULTS.replace('<param>', title))
    }
    private readonly CHILD_TREE_NODE: string = `xpath=//div[@data-testid='navtree-node-item'][@data-id="<param1>"][@data-count='<param2>']`
    async validateNodeIsAddedAsChildNode(title: string, position: string) {
        await this.helper.elementIsVisibleEnhanced(this.CHILD_TREE_NODE.replace('<param1>', title).replace('<param2>', position))
    }
    private readonly MORE_OPTIONS_MOVE_UP_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-testid='node-action-move-up']"
    async clickOnMoreOptionsMoveUpButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_MOVE_UP_BUTTON_ON_TREE_NODE)
        await this.helper.clickOnElement(this.MORE_OPTIONS_MOVE_UP_BUTTON_ON_TREE_NODE)
    }
    private readonly MORE_OPTIONS_MOVE_DOWN_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-testid='node-action-move-down']"
    async clickOnMoreOptionsMoveDownButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_MOVE_DOWN_BUTTON_ON_TREE_NODE)
        await this.helper.clickOnElement(this.MORE_OPTIONS_MOVE_DOWN_BUTTON_ON_TREE_NODE)
    }
    private readonly MORE_OPTIONS_VISIBILITY_BUTTON_ON_TREE_NODE: string = "xpath=//div[@data-testid='node-action-visibility']"
    async hoverOnMoreOptionsVisibilityButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_VISIBILITY_BUTTON_ON_TREE_NODE)
        await this.helper.hoverOnElement(this.MORE_OPTIONS_VISIBILITY_BUTTON_ON_TREE_NODE)
    }
    private readonly NODE_ITEM: string = `xpath=(//div[@data-testid='navtree-node-item'])[<param>]`
    async validateNodeItemPosition(position: string) {
        return await this.helper.getAttributeValue(this.NODE_ITEM.replace('<param>', position), 'data-id')
    }
    private readonly MORE_OPTIONS_OPTION_ON_NODE_TREE_ITEM: string = "xpath=//div[@data-testid='node-action-<param>']"
    async clickOnMoreOptionsButtonsOnNodeTreeItem(option: string) {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_OPTION_ON_NODE_TREE_ITEM.replace('<param>', option))
        await this.helper.hoverOnElement(this.MORE_OPTIONS_OPTION_ON_NODE_TREE_ITEM.replace('<param>', option))
        await this.helper.clickOnElement(this.MORE_OPTIONS_OPTION_ON_NODE_TREE_ITEM.replace('<param>', option))
    }
    async hoverOnMoreOptionsButtonsOnNodeTreeItem(option: string) {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_OPTION_ON_NODE_TREE_ITEM.replace('<param>', option))
        await this.helper.hoverOnElement(this.MORE_OPTIONS_OPTION_ON_NODE_TREE_ITEM.replace('<param>', option))
    }
    private readonly MORE_OPTIONS_ADD_MENU_ITEM_OPTION_ON_NODE_TREE: string = "xpath=//div[text()='Add Menu Item']"
    async clcikOnMoreOptionsAddMenuItemButtonOnNodeTreeItem() {
        await this.helper.elementIsVisibleEnhanced(this.MORE_OPTIONS_ADD_MENU_ITEM_OPTION_ON_NODE_TREE)
        await this.helper.clickOnElement(this.MORE_OPTIONS_ADD_MENU_ITEM_OPTION_ON_NODE_TREE)
    }
    private readonly DELETE_BUTTON_ON_DELETE_MENU_POPUP: string = "xpath=//button[@title='Delete']/span"
    async clickOnDeleteButtonOnDeleteMenuPopup() {
        await this.helper.elementIsVisibleEnhanced(this.DELETE_BUTTON_ON_DELETE_MENU_POPUP)
        await this.helper.clickOnElement(this.DELETE_BUTTON_ON_DELETE_MENU_POPUP)
    }
    private readonly TITLE_TOGGLE_ON_DETAILS_PANEL: string = "xpath=//input[@data-testid='edit-details-showTitle']"
    async titleToggleOnDetailsPanel(state) {
        await this.toggleSwitch(state, this.TITLE_TOGGLE_ON_DETAILS_PANEL)
    }
    private readonly DESCRIPTION_TEXT_FIELS_ON_DETAILS_PANEL: string = "xpath=//div[@data-testid='field-description']//textarea"
    private readonly DESCRIPTION_TEXT_FIELS_ON_DETAILS_PANEL_FILLED: string = "xpath=//div[@data-testid='field-description']//textarea[text()='womens category card description']"
    async enterDiscriptionOnDetailsPanel(text: string) {
        await this.helper.elementIsVisibleEnhanced(this.DESCRIPTION_TEXT_FIELS_ON_DETAILS_PANEL)
        await this.helper.enterText(this.DESCRIPTION_TEXT_FIELS_ON_DETAILS_PANEL, text)
        await this.helper.elementIsVisibleEnhanced(this.DESCRIPTION_TEXT_FIELS_ON_DETAILS_PANEL_FILLED.replace("<param>", text))
    }
    private readonly DESCRIPTION_TOGGLE_ON_DETAILS_PANEL: string = "xpath=//input[@data-testid='edit-details-showDescription']"
    async descriptionToggleOnDetailsPanel(state) {
        await this.toggleSwitch(state, this.DESCRIPTION_TOGGLE_ON_DETAILS_PANEL)
    }
    private UPLOAD_MEDIA_BUTTON_ON_DETAILS_PANEL: string = "xpath=//div[@data-testid='edit-details-upload-media']"
    async clickOnUploadMediaButtonOnDetailsPanel() {
        await this.helper.elementIsVisibleEnhanced(this.UPLOAD_MEDIA_BUTTON_ON_DETAILS_PANEL)
        await this.helper.clickOnElement(this.UPLOAD_MEDIA_BUTTON_ON_DETAILS_PANEL)
    }
    private readonly MEDIA_PANEL: string = "xpath=//div[@data-id='Media']"
    async validateMediaPanelIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_PANEL)
    }
    private readonly VIDEO_URL_INPUT_FIELD: string = "xpath=//div[@data-testid='category-video-url']/input"
    async writeUrlInVideoInputField(url: string) {
        await this.helper.elementIsVisibleEnhanced(this.VIDEO_URL_INPUT_FIELD)
        await this.helper.fillText(this.VIDEO_URL_INPUT_FIELD, url)
        //await this.helper.waitForPageLoad()
        //await this.helper.waitForNavigation()
    }
    async getVideoUrlText() {
        return await this.helper.getAttributeValue(this.VIDEO_URL_INPUT_FIELD, "value")
    }
    private readonly EDIT_MEDIA_BUTTON_ONDETAILS_PANEL: string = "xpath=//button/div[text()='Edit']"
    async clickOnEditButtonOnDetailsPanel() {
        await this.helper.elementIsVisibleEnhanced(this.EDIT_MEDIA_BUTTON_ONDETAILS_PANEL)
        await this.helper.clickOnElement(this.EDIT_MEDIA_BUTTON_ONDETAILS_PANEL)
    }
    private readonly CATEGORY_VISIBILITY_ARROW: string = "xpath=//div[@data-testid='field-visibility']"
    async clickOnCategoryVisibilityArrowOnDetailsPanel() {
        await this.helper.elementIsVisibleEnhanced(this.CATEGORY_VISIBILITY_ARROW)
        await this.helper.clickOnElement(this.CATEGORY_VISIBILITY_ARROW)
    }
    private readonly VISIBILITY_OPTIONS_ON_DROPDOWN: string = "xpath=//li[@role='menuitem' and text()='<param>']"
    private readonly VISIBILITY_OPTIONS_ON_DROPDOWN_POST_SELECTION: string = "xpath=//div[text() = 'Category visibility']/..//div[text() = '<param>']"
    async clickOnVisibilityOptionsOnDetailsPanel(option: string) {
        await this.helper.elementIsVisibleEnhanced(this.VISIBILITY_OPTIONS_ON_DROPDOWN.replace('<param>', option))
        await this.helper.clickOnElement(this.VISIBILITY_OPTIONS_ON_DROPDOWN.replace('<param>', option))
        await this.helper.elementIsVisibleEnhanced(this.VISIBILITY_OPTIONS_ON_DROPDOWN_POST_SELECTION.replace('<param>', option))
    }
    private readonly NODE_ITEM_COLLAPSE_AND_EXPAND_BUTTON: string = "xpath=//div[@data-id='<param>']//button[@data-testid='navtree-expand-collapse']"
    async clickNodeItemExpandCollapseButton(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.NODE_ITEM_COLLAPSE_AND_EXPAND_BUTTON.replace('<param>', title))
        await this.helper.clickOnElement(this.NODE_ITEM_COLLAPSE_AND_EXPAND_BUTTON.replace('<param>', title))
    }
    private readonly HIDE_IN_PARENT_TOGGLE: string = "xpath=//input[@data-testid='edit-details-visibleInParent']"
    async toggleHideInParentToggle(state) {
        await this.toggleSwitch(state, this.HIDE_IN_PARENT_TOGGLE)
    }
    private readonly HIDE_IN_SUB_MENU_TOGGLE: string = "xpath=//input[@data-testid='edit-details-visibleInParent']"
    async toggleHideInSubMenuToggle(state) {
        await this.toggleSwitch(state, this.HIDE_IN_SUB_MENU_TOGGLE)
    }
    private readonly PRODUCT_TITLE_ONSEARCH_DROPDOWN: string = "xpath=//div[contains(text(),'<param>')]"
    async validateSearchResultIsDisplayed(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
    }

    async validateSearchResultIsDisplayedUnderCollection(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.PRODUCT_TITLE_ONSEARCH_DROPDOWN.replace('<param>', title))
    }

    private readonly FEATURED_PRODUCT_OUT_OF_STOCK_TAG: string = "xpath=//div[@datatestid='field-featuredProducts']//div[text()='<param>']//*[text()='Out of Stock']"
    async verifyOutOfStockTagForProductAddedUnderFeaturedProducts(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.FEATURED_PRODUCT_OUT_OF_STOCK_TAG.replace('<param>', title))
    }

    private readonly UNPIN_FEATURED_PRODUCT_ICON: string = "xpath=(//div[text()='<param>']//ancestor::div[@datatestid='field-featuredProducts']//button[@data-testid='unfeature-button'])[1]"
    async unpinProductUnderFeaturedProducts(title: string) {
        await this.helper.clickOnElement(this.UNPIN_FEATURED_PRODUCT_ICON.replace('<param>', title))
        await this.helper.elementIsNotVisibleEnhanced(this.UNPIN_FEATURED_PRODUCT_ICON.replace('<param>', title))
    }

    private readonly NTH_PIN_CONNECTED_CONNECTION_PRODUCT_ICON: string = "xpath=(//ancestor::div[@datatestid='field-connectedProducts']//button[@data-testid='feature-product'])[<param>]"
    async nThPinProductUnderConnectedCollectionProducts(index: string) {
        await this.helper.clickOnElement(this.NTH_PIN_CONNECTED_CONNECTION_PRODUCT_ICON.replace('<param>', index))
    }
    private readonly MANAGE_YOUR_IMAGES_BUTTON: string = "xpath=//button/div[text()='Manage Your Images']"
    async clickOnManageImagesButton() {
        await this.helper.clickOnElement(this.MANAGE_YOUR_IMAGES_BUTTON)
    }
    private readonly EDIT_MEDIA_BUTTON: string = "xpath=//button[@data-testid='edit-details-edit-media']"
    async clickOnEditMediaButton() {
        await this.helper.elementIsVisibleEnhanced(this.EDIT_MEDIA_BUTTON)
        await this.helper.clickOnElement(this.EDIT_MEDIA_BUTTON)
    }
    private readonly MEDIA_MANAGER_CLOSE_BUTTON: string = "xpath=//button[@data-testid='media-manager-close-btn']"
    async clickOnMediaManagerCloseButton() {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_MANAGER_CLOSE_BUTTON)
        await this.helper.clickOnElement(this.MEDIA_MANAGER_CLOSE_BUTTON)
    }
    private readonly MEDIA_MANAGER_ADD_BUTTON: string = "xpath=//button[@data-testid='media-manager-add-btn']"
    async validateMediaManagerIsOpened() {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_MANAGER_ADD_BUTTON)
    }
    async validateMediaManagerIsNotOpened() {
        await this.helper.elementIsNotVisibleEnhanced(this.MEDIA_MANAGER_ADD_BUTTON)
    }
    async clickOnMediaManagerAddButton() {
        await this.helper.clickOnElement(this.MEDIA_MANAGER_ADD_BUTTON)
    }
    private readonly MEDIA_MANAGER_CARD_CONTENT: string = "xpath=(//div[@data-testid='media-manager-card-content'])[<param>]"
    async clickOnMediaManagerContentCard(index: string) {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_MANAGER_CARD_CONTENT.replace('<param>', index))
        await this.helper.clickOnElement(this.MEDIA_MANAGER_CARD_CONTENT.replace('<param>', index))
    }
    private readonly MEDIA_MANAGER_IMAGE: string = "xpath=//div[@id='navigation-editor']//img[@data-original-src]"
    async validateMediaManagerImageIsPresent() {
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_MANAGER_IMAGE)
    }
    async validateMediaManagerImageIsNotPresent() {
        await this.helper.elementIsNotVisibleEnhanced(this.MEDIA_MANAGER_IMAGE)
    }
    private readonly MEDIA_IMAGE_DELETE_BUTTON: string = "xpath=//div[@idata-testid='category-image-media-remove']"
    async clickOnMediaImageDeleteButton() {
        await this.helper.hoverOnElement(this.MEDIA_MANAGER_IMAGE)
        await this.helper.elementIsVisibleEnhanced(this.MEDIA_IMAGE_DELETE_BUTTON)
        await this.helper.clickOnElement(this.MEDIA_IMAGE_DELETE_BUTTON)
    }
    private readonly REPLACE_IMAGE_DOMTEXT: string = "xpath=(//div[text() = 'Replace?'])[1]"
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
    async verifyReplaceTextInImageIsNotPresent() {
        await this.helper.waitForPageLoad()
        await this.helper.waitForPageToLoad()
        await this.helper.elementIsNotVisibleEnhanced(this.REPLACE_IMAGE_DOMTEXT)
    }
    private readonly MEDIA_URL_FIELD: string = "xpath=//div[@data-testid='category-image-url']/input"
    async enterUrlInImageUrlField(url: string) {
        await this.helper.enterText(this.MEDIA_URL_FIELD, url)
    }
    private readonly NODE_IMAGE: string = `xpath=//div[@data-testid='navtree-node-image']//img[@alt="<param>"]`
    async validateNodeImageIsPresent(title: string) {
        await this.helper.elementIsVisibleEnhanced(this.NODE_IMAGE.replace('<param>', title))
    }
}
