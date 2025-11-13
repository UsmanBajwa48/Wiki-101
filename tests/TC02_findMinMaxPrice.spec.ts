import { test, expect } from "@playwright/test";
import { GameCatagoriesPage } from "../pages/src/pages/GameCatagories";
import { HotelsResultPage } from "../pages/src/pages/FAQ";
import { searchData } from "../data/searchData";
import { formatDateForDisplay, getCheckInDate, getCheckOutDate, getFutureDate } from "../utils/dateUtils";


test("TC02 - Verify broken image", async ({ page }) => { 
    
    // const gameCatagories = new Homepage(page);
    // const home = new Homepage(page);
    // await home.visit('/');
    // await expect(home.getPageTitle()).resolves.toContain(Constants.demoQATitle);
    // await home.clickElement(home.getElementsCardLink());
    // await home.clickElement(home.getBrokenImageLink());
    // await expect(await home.isElementVisible(home.getBrokenImageLink())).toBe(true);
    // expect(await page.locator(home.getBrokenImageData()).isVisible());
    // await page.waitForSelector(home.getBrokenImageData());
    // const isImageBroken = await page.evaluate((selector) => {
    //     const img = document.querySelector(selector) as HTMLImageElement;
    //     return !img || img.naturalWidth === 0 || img.naturalHeight === 0;
    // }, home.getBrokenImageData());

    // expect(isImageBroken).toBe(true);
    // expect(await home.getText(home.getBrokenPageText())).toBe("Broken Links - Images");
     
});