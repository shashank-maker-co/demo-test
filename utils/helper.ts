import { Browser, Page, Locator, expect } from "@playwright/test";

export class Helper {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async clickOnElement(selector: string, iframe?: any) {
        await this.elementIsVisibleEnhanced(selector, iframe)
        if (iframe == undefined) {
            const el: Locator = await this.page.locator(selector);
            await el.click();
        } else {
            const el = await this.page.frameLocator(iframe).locator(selector);
            await el.click();
        }
    }

    async setViewport(w: number, h: number) {
        await this.page.setViewportSize({ width: w, height: h });
    }

    async forceClickOnElement(selector: string, iframe?: any) {
        await this.elementIsVisibleEnhanced(selector)
        if (iframe == undefined) {
            const el: Locator = await this.page.locator(selector);
            await el.click({ force: true });
        } else {
            const el = await this.page.frameLocator(iframe).locator(selector);
            await el.click({ force: true });
        }
    }

    async waitForPageToLoad() {
        await this.page.waitForLoadState("domcontentloaded");
    }
    async waitForPageLoad() {
        await this.page.waitForLoadState("load");
    }
    async getTextOfAnElement(selector: string, iframe?: any) {
        await this.elementIsVisibleEnhanced(selector, iframe)
        if (iframe == undefined) {
            const el: Locator = await this.page.locator(selector);
            return await el.textContent();
        } else {
            const el = await this.page.frameLocator(iframe).locator(selector);
            return await el.textContent();
        }
    }

    async elementIsVisibleEnhanced(selector: string, iframe?: any, defaultTimeout: number = 10000) {
        if (iframe == undefined) {
            const el: Locator = this.page.locator(selector);
            await el.waitFor({ state: "visible", timeout: defaultTimeout });
        } else {
            const el: Locator = await this.page.frameLocator(iframe).locator(selector);
            await el.waitFor({ state: "visible", timeout: defaultTimeout });
        }
    }

    async elementIsNotVisibleEnhanced(selector: string, iframe?: any) {
        await this.waitForPageLoad()
        await this.waitForPageToLoad()
        if (iframe == undefined) {
            const el: Locator = this.page.locator(selector);
            await el.waitFor({ state: "hidden" });
        } else {
            const el = await this.page.frameLocator(iframe).locator(selector);
            await el.waitFor({ state: "hidden" });
        }
    }
    async getTextOfElements(selector: string, iframe?: any) {
        const textArray: string[] = [];

        if (iframe == undefined) {
            let element: Locator = await this.page.locator(selector);
            for (const el of await element.elementHandles()) {
                let textOfElements: any = await el.textContent();
                textArray.push(textOfElements);
            }
        } else {
            const element = await this.page.frameLocator(iframe).locator(selector);
            for (const el of await element.elementHandles()) {
                let textOfElements: any = await el.textContent();
                textArray.push(textOfElements);
            }
        }
        return textArray.toString();
    }

    async waitForAttribute(selector: string, iframe?: any) {
        if (iframe == undefined) {
            await this.elementIsVisibleEnhanced(selector, undefined, 10000)
        } else {
            const frame = await this.page.frame(iframe);
            await frame?.waitForSelector(selector);
        }

    };

    async takeScreenshot() {
        const screenshot = await this.page.screenshot({ path: "screenshot.png" });
        return screenshot;
    }

    async closeBrowser() {
        await this.page.close();
    }

    async refreshBrowser() {
        await this.page.reload();
    }

    async isAttributePresent(selector: string, attribute: string) {
        await this.elementIsVisibleEnhanced(selector)
        const el: Locator = await this.page.locator(selector);
        let attrValue: any = await el.getAttribute(attribute);
        if (attrValue !== null) {
            return true;
        } else {
            return false;
        }
    }

    async waitFor(milliseconds: number = 5000): Promise<void> {
        await this.page.waitForTimeout(milliseconds);
    }

    async hoverOnElement(selector: string) {
        await this.elementIsVisibleEnhanced(selector)
        const el: Locator = await this.page.locator(selector);
        await el.hover();
    }

    async waitForNavigation() {
        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 13000));
        const navigationPromise = this.page.waitForLoadState("networkidle");
        await Promise.race([timeoutPromise, navigationPromise]);
    }

    async scrollToElement(selector: string, iframe?: any) {
        if (iframe == undefined) {
            await this.elementIsVisibleEnhanced(selector)
            const el: Locator = await this.page.locator(selector);
            await el.scrollIntoViewIfNeeded();
        } else {
            const el: Locator = await this.page
                .frameLocator(iframe)
                .locator(selector);
            await el.scrollIntoViewIfNeeded();
        }
    }

    async scrollToElementSlow(selector: string) {
        const element = await this.page.waitForSelector(selector, { timeout: 10000 });
        await this.page.evaluate((el) => {
            el.scrollIntoView({ behavior: "smooth" });
        }, element);
    }

    async lazyScrollToBottomOfWebpage() {
        await this.page.evaluate(async () => {
            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            for (let i = 0; i < document.body.scrollHeight; i += 100) {
                window.scrollTo(0, i);
                await delay(100);
            }
        });
    }
    async scrollOnLazyLoadWebPage(selector: string, iframe?: any) {
        if (iframe == undefined) {
            const element = await this.page.locator(selector);
            while (element.isVisible()) {
                this.page.mouse.wheel(0, 100)
            }
        } else {
            const element: Locator = await this.page
                .frameLocator(iframe)
                .locator(selector);
            while (await element.isVisible() == false) {
                await this.page.mouse.wheel(0, 100)
            }
        }
    }

    async isEnabled(selector: string) {
        const element: Locator = await this.page.locator(selector);
        return await element.isEnabled();
    }
    async isFocused(selector: string) {
        const element: Locator = await this.page.locator(selector);
        return await element.evaluate(
            (element) => document.activeElement === element
        );
    }
    async isSelected(selector: string) {
        const element: Locator = await this.page.locator(selector);
        return await element.isChecked();
    }
    async getAttributeValue(
        selector: string,
        attributeName: string,
        iframe?: any
    ) {
        if (iframe == undefined) {
            const element: Locator = await this.page.locator(selector);
            return await element.getAttribute(attributeName);
        } else {
            const element: Locator = await this.page
                .frameLocator(iframe)
                .locator(selector);
            return await element.getAttribute(attributeName);
        }
    }

    async getAttributeValues(
        selector: string,
        attributeName: string,
        iframe?: any
    ) {
        const attributeArray: string[] = [];
        if (iframe == undefined) {
            let element: Locator = await this.page.locator(selector);
            for (const el of await element.elementHandles()) {
                let attributeOfElement: any = await el.getAttribute(attributeName);
                attributeArray.push(attributeOfElement);
            }
        } else {
            const element = await this.page.frameLocator(iframe).locator(selector);
            for (const el of await element.elementHandles()) {
                let attributeOfElement: any = await el.getAttribute(attributeName);
                attributeArray.push(attributeOfElement);
            }
        }
        return attributeArray.toString();
    }

    async getCountOfElements(selector: string, iframe?: any) {
        if (iframe == undefined) {
            const elements: Locator = await this.page.locator(selector);
            return elements.count();
        } else {
            const elements: Locator = await this.page
                .frameLocator(iframe)
                .locator(selector);
            return elements.count();
        }
    }
    async keyboardOps(operation) {
        const keyboard = this.page.keyboard;
        if (operation === "down") {
            await keyboard.press("ArrowDown");
        } else if (operation === "up") {
            await keyboard.press("ArrowUp");
        } else if (operation === "enter") {
            await keyboard.press("Enter");
        } else if (operation === "escape") {
            await keyboard.press("Escape");
        }
    }
    async navigateBack() {
        await this.page.goBack();
    }
    async navigateForward() {
        await this.page.goForward();
    }
    async generateRandomNumber() {
        return Math.floor(Math.random() * 1000 + 100).toString();
    }
    async openNewTab(url: string) {
        const context = await this.page.context();
        const newPage = await context.newPage();
        await newPage.goto(url);
    }
    async OpenANewTab() {
        const context = await this.page.context();
        const pagePromise = context.waitForEvent("page");
        await this.page.getByText("open new tab").click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
    }
    async switchToIframe(iframeSelector: string, selector: string) {
        const elements: Locator = await this.page
            .frameLocator(iframeSelector)
            .locator(selector);
        return elements.last();
    }
    async getTextOfAnElementOnIFrame(selector) {
        const el: Locator = await this.page.locator(selector);
        return await el.textContent();
    }
    async enterText(selector: string, text: string) {
        await this.elementIsVisibleEnhanced(selector)
        const el: Locator = await this.page.locator(selector);
        await el.type(text);
    }

    async fillText(selector: string, text: string) {
        await this.elementIsVisibleEnhanced(selector)
        const el: Locator = await this.page.locator(selector);
        await el.fill(text);
    }

    async clearTextBox(selector: string, replaceValue: string = "") {
        const el: Locator = await this.page.locator(selector);
        await el.fill(replaceValue);
    }

    async clearTextBoxUsingBackspace(selector: string) {
        await this.page.click(selector, { clickCount: 3 });
        await this.page.keyboard.press('Backspace');
    }
    async typeTextBox(selector: string, text: string) {
        await this.page.type(selector, text, { delay: 100 });
    }
    async manuallyClearTextBox(selector: string, replaceValue: string = "") {
        const el: Locator = await this.page.locator(selector);
        await el.click();
        await el.dblclick();
        await this.page.keyboard.press("Backspace");

    }




    async appendText(selector: string, text: string, defaultTimeout = 10000) {
        const el: Locator = await this.page.locator(selector);
        await el.waitFor({ state: "visible", timeout: defaultTimeout });
        await this.page.keyboard.press("End");
        await el.type(text);
    }

    async getCurrentURL(currentPage: Page) {
        return currentPage.url();
    }

    async getCurrentTitle(currentPage: Page) {
        return currentPage.title();
    }

    async isPresent(selector: string, iframe?: any) {
        if (iframe == undefined) {
            const el = await this.page.$(selector);
            return await el?.isVisible();
        } else {
            const element: Locator = await this.page
                .frameLocator(iframe)
                .locator(selector);
            return await element.isVisible();
        }
    }

    async isDisplayed(selector: string, iframe?: any) {
        if (iframe == undefined) {
            const elementHandle: Locator = await this.page.locator(selector);
            const isDisplayed = await elementHandle.isVisible();
            return isDisplayed;
        } else {
            const elementHandle: Locator = await this.page
                .frameLocator(iframe)
                .locator(selector);
            return await elementHandle.isVisible();
        }
    }

    async switchBrowserTab(tabIndex: number) {
        // await this.page.context().waitForEvent('page');
        await this.page.waitForTimeout(2000);
        const browserTabs = await this.page.context().pages();
        if (browserTabs.length > tabIndex) {
            await browserTabs[tabIndex].bringToFront();
        } else {
            console.error(
                `There are only ${browserTabs.length} tabs, cannot switch to tab ${tabIndex}`
            );
        }
    }

    async getCSSPropertyValue(
        selector: string,
        propertyName: string,
        iframe?: any
    ) {
        const element: Locator = await this.page
            .frameLocator(iframe)
            .locator(selector);
        const cssPropertyValue = await element.evaluate(
            (el, prop) => window.getComputedStyle(el).getPropertyValue(prop),
            propertyName
        );
        return cssPropertyValue;
    }
    // async closeCurrentTab() {
    //     const context = await this.page.context();
    //     const [currentPage] = await context.pages();
    //     await currentPage.close();
    // }
}
