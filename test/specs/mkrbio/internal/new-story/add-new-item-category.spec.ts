import { test, expect } from '@playwright/test';
import { StorePage } from '../../../../pageobjects/mkrbio/internal/editor/store.page';
import { BasePage } from '../../../../pageobjects/mkrbio/internal/base.page';
import { PreviewPage } from '../../../../pageobjects/mkrbio/internal/editor/preview.page';
import { CommonFunction } from '../../../../../utils/commonFunction';

let basePage: BasePage;
let storePage: StorePage;
let previewPage: PreviewPage
let executionConfig: any;
let commonFunction: CommonFunction;
test.beforeAll(async ({ request }) => {
    commonFunction = new CommonFunction();
    executionConfig = await commonFunction.duplicateAConfigThoughAPI({ request }, "8q20ktlbn6")
    await commonFunction.publishConfigThoughAPI(executionConfig, { request })
})
test.beforeEach(async ({ page }) => {
    test.setTimeout(60000)
    basePage = new BasePage(page);
    storePage = new StorePage(page);
    previewPage = new PreviewPage(page)
    await basePage.gotoUrl('http://localhost:3000/');
    await basePage.waitForIGTabsToBeVisible()
});

test.afterAll(async ({ request }) => {
    await commonFunction.deleteConfigThoughAPI(executionConfig, { request })
});

test.describe('Add new item - category', () => {
    test('5CD72BC2	Verify user is able to add Grid Categories-> Panorama item from the Template and is able to see it in Store and its Preview	@S1	@categories @grid', async () => {
        await test.step('User clicks on add new item on store tab', async () => {
            await storePage.clickOnStoreTab()
            await storePage.clickOnAddNewItemOnStoreTab()
            await storePage.validateNavigationInsertPanelIsOpened()
        })
        await test.step('User clicks on add grid panorama category', async () => {
            await storePage.clickOnMenuOnSidePanel('categories', 'Categories')
            await storePage.clickOnSubMenuItemOnSidePanel('categories', 'grid', 'panorama', 'Panorama ')
        })
        await test.step('User validates node of grid panorama category is created on editor', async () => {
            await storePage.validateNodeTitle('Panorama ')
        })
        await test.step('User validates node of grid panorama category is created on preview', async () => {
            await previewPage.clickOnStoreTab()
            await previewPage.validateCLPSectionHeaderOnPreview('Panorama ')
            await previewPage.validateAddedCategoryIsAGrid('Panorama ')
        })
    });
    test('433F1BD4	Verify user is able to add Slider Categories-> Square item from the Template and is able to see it in Store and its Preview	@S1	@categories @slider', async () => {
        await test.step('User clicks on add new item on store tab', async () => {
            await storePage.clickOnStoreTab()
            await storePage.clickOnAddNewItemOnStoreTab()
            await storePage.validateNavigationInsertPanelIsOpened()
        })
        await test.step('User clicks on add slider square category', async () => {
            await storePage.clickOnMenuOnSidePanel('categories', 'Categories')
            await storePage.clickOnSubMenuItemOnSidePanel('categories', 'slider', 'square', 'Square')
        })
        await test.step('User validates node of slider square category is created on editor', async () => {
            await storePage.validateNodeTitle('Square')
        })
        await test.step('User validates node of slider square category is created on preview', async () => {
            await previewPage.clickOnStoreTab()
            await previewPage.validateCLPSectionHeaderOnPreview('Square')
            await previewPage.validateAddedCategoryIsASlider('Square')
        })
    })
    /*test('5816976A	Verify user is able to add Grid Categories-> Portrait item from the Template and is able to see it in Store and its Preview	@S2	@categories @grid', async () => {
        await storePage.clickOnStoreTab()
        await storePage.clickOnAddNewItemOnStoreTab()
        await storePage.validateNavigationInsertPanelIsOpened()
        await storePage.clickOnMenuOnSidePanel('categories', 'Categories')
        await storePage.clickOnSubMenuItemOnSidePanel('categories', 'grid', 'portrait', 'Portrait')
        await storePage.validateNodeTitle('Portrait')
        await previewPage.clickOnStoreTab()
        await previewPage.validateCLPSectionHeaderOnPreview('Portrait')
        await previewPage.validateAddedCategoryIsAGrid('Portrait')
    })
    test('30486E7A	Verify user is able to add Grid Categories-> Landscape item from the Template and is able to see it in Store and its Preview	@S2	@categories @grid', async () => {
        await storePage.clickOnStoreTab()
        await storePage.clickOnAddNewItemOnStoreTab()
        await storePage.validateNavigationInsertPanelIsOpened()
        await storePage.clickOnMenuOnSidePanel('categories', 'Categories')
        await storePage.clickOnSubMenuItemOnSidePanel('categories', 'grid', 'landscape', 'Landscape')
        await storePage.validateNodeTitle('Landscape')
        await previewPage.clickOnStoreTab()
        await previewPage.validateCLPSectionHeaderOnPreview('Landscape')
        await previewPage.validateAddedCategoryIsAGrid('Landscape')
    })
    test('97C4670E	Verify user is able to add Grid Categories -> Square item from the Template and is able to see it in Store and its Preview	@S2 @categories @grid', async () => {
        await storePage.clickOnStoreTab()
        await storePage.clickOnAddNewItemOnStoreTab()
        await storePage.validateNavigationInsertPanelIsOpened()
        await storePage.clickOnMenuOnSidePanel('categories', 'Categories')
        await storePage.clickOnSubMenuItemOnSidePanel('categories', 'grid', 'square', 'Square')
        await storePage.validateNodeTitle('Square')
        await previewPage.clickOnStoreTab()
        await previewPage.validateCLPSectionHeaderOnPreview('Square')
        await previewPage.validateAddedCategoryIsAGrid('Square')
    })
    test('DFAE3737	Verify user is able to add Grid Categories -> Circular item from the Template and is able to see it in Store and its Preview @S2 @categories @grid', async () => {
        await storePage.clickOnStoreTab()
        await storePage.clickOnAddNewItemOnStoreTab()
        await storePage.validateNavigationInsertPanelIsOpened()
        await storePage.clickOnMenuOnSidePanel('categories', 'Categories')
        await storePage.clickOnSubMenuItemOnSidePanel('categories', 'grid', 'circular', 'Circular')
        await storePage.validateNodeTitle('Circular')
        await previewPage.clickOnStoreTab()
        await previewPage.validateCLPSectionHeaderOnPreview('Circular')
        await previewPage.validateAddedCategoryIsAGrid('Circular')
    })*/
})



