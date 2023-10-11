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

test.beforeEach(async ({ page }) => {
    test.setTimeout(60000)
    basePage = new BasePage(page);
    previewPage = new PreviewPage(page); await basePage.gotoUrl('http://localhost:3000');
});

test.afterAll(async () => {
});

test.describe('Add new item - category', () => {
    test('5CD72BC2	Verify user is able to add Grid Categories-> Panorama item from the Template and is able to see it in Store and its Preview	@S1	@categories @grid', async () => {
        await test.step('User clicks on add new item on store tab', async () => {
            await basePage.waitFor(5000)
        })
    });
})



