import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {}

  async visit(url: string): Promise<void> {
    try {
      console.log(`Navigating to URL: ${url}`);
      await this.page.goto(url, {waitUntil: 'domcontentloaded'});
      console.log(`Successfully navigated to URL: ${url}`);
    } catch (error) {
      console.error(`Failed to navigate to URL: ${url}`, error);
      throw error;
    }
  }

  async switchToNewTab(trigger: () => Promise<void>): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      trigger(),
    ]);
    await newPage.waitForLoadState("domcontentloaded", { timeout: 60000 });
    return newPage;
  }

  async clickElement(element: Locator | string): Promise<void> {
    const locator = typeof element === "string" ? this.page.locator(element) : element;
    try {
      await locator.click({ timeout: 90000 });
    } catch (error) {
      console.error("Failed to click element", error);
      throw error;
    }
  }  

  async fillField(selector: string | Locator, value: string, timeout: number = 30000): Promise<void> {
    const locator = typeof selector === "string" ? this.page.locator(selector) : selector;
    try {
      console.log(`Filling field: ${selector} with value: ${value}`);
      await locator.fill(value);
      await expect(locator).toHaveValue(value, { timeout });
      console.log(`Successfully filled field with value: ${value}`);
    } catch (error) {
      console.error(`Failed to fill field: ${selector} with value: ${value}`, error);
      throw error;
    }
  }
  

  async getElement(selector: string): Promise<Locator> {
    try {
      console.log(`Getting element: ${selector}`);
      const element = this.page.locator(selector);
      if (!element) throw new Error(`Element ${selector} not found`);
      return element;
    } catch (error) {
      console.error(`Error getting element: ${selector}`, error);
      throw error;
    }
  }

  async waitForElement(selector: string, timeout: number = 60000): Promise<void> {
    await this.page.waitForSelector(selector, { state: "visible", timeout });
  }
}
