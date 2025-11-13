import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class HotelsResultPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly minPrice = "(//input[@id='price_box_0'])[1]";
  private readonly maxPrice = "(//input[@id='price_box_1'])[1]";
  private readonly selectedHotels = "#contentContainer>div>ol>li>div header";
  private readonly starRating = "(//i[contains(@class,'ficon ficon-star-5 star-orange')])[1]";
  private readonly lowestPriceTab = "//button[contains(@data-element-name,'search-sort-price')]";
  private readonly alllHotelsPrice = ".sc-jrAGrp.aZA-D";

  public getMinPrice(): string {
    return this.minPrice;
  }

  public getMaxPrice(): string {
    return this.maxPrice;
  }

  public getSelectedHotels(): string {
    return this.selectedHotels;
  }

  public getStarRating(): string {
    return this.starRating;
  }

  public getLowestPriceTab(): string {
    return this.lowestPriceTab;
  }

  public getMinMaxPrice(): string {
    return this.alllHotelsPrice;
  }
    
  async waitForHotelsList(newPage: Page) {
    await newPage.waitForSelector(this.selectedHotels);
  }
    
  async applyFilters(newPage: Page, minPrice: string, maxPrice: string): Promise<void> {
    await newPage.waitForSelector(this.minPrice, { state: 'attached', timeout: 15000 });
    await newPage.locator(this.minPrice).fill(minPrice);
    await newPage.locator(this.maxPrice).fill(maxPrice);
    await newPage.locator(this.maxPrice).press("Enter");
  }

  async clickLowestPriceTab(newPage: Page): Promise<void> {
    await this.clickElement(newPage.locator(this.lowestPriceTab));
  }

  async scrollUsingKeyboard(newPage: Page): Promise<void> {
    for (let i = 0; i < 40; i++) {
      await newPage.keyboard.press('PageDown');
      await newPage.waitForTimeout(1000);
    }
  }
  
  async findMinAndMaxPrices(newPage: Page): Promise<number[]> {
    await newPage.waitForSelector(this.alllHotelsPrice);

    const prices = await newPage.$$eval(this.alllHotelsPrice, (elements) =>
      elements
        .map(el => el.textContent?.replace(/[^\d]/g, '') || '')
        .map(text => parseInt(text, 10))
        .filter(price => price > 0)
    );

   return prices;

  }

}
