import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class ViewHotelDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly selectedHotels = '[data-element-name="property-card-info"] h3';
  private readonly relaxationActivitiesHeader = "//h5[contains(text(), 'Things to do')]";

  public getSelectedHotels(): string {
    return this.selectedHotels;
  }

  public getRelaxationActivitiesHeader(): string {
    return this.relaxationActivitiesHeader;
  }

  async getHotelNamesAndClickCard(newPage: Page): Promise<Page> {
    await newPage.waitForSelector(this.selectedHotels, { state: "attached", timeout: 10000 });
    const hotels = await newPage.locator(this.selectedHotels).elementHandles();
    if (hotels.length === 0) {
      throw new Error("No hotel cards found.");
    }

    for (let i = 0; i < hotels.length; i++) {
      const text = await hotels[i].innerText();
      console.log(`Hotel ${i + 1}: ${text}`);
    }
  
    const [newTab] = await Promise.all([
      newPage.context().waitForEvent("page"), 
      hotels[0].click()                         
    ]);
  
    await newTab.waitForLoadState("domcontentloaded");
  
    return newTab;
  }
  
  async verifyHotelDetailsPresent(): Promise<boolean> {
    try {
      await Promise.all([
        this.page.locator("img").first().waitFor({ state: "visible", timeout: 8000 })
      ]);
      console.log("Hotel photo and amenities are visible.");
      return true;
    } catch {
      console.log("One or more hotel details are missing.");
      return false;
    }
  }
  
  async checkRelaxationSectionAvailability(newPage: Page): Promise<void> {
    const isRelaxationSectionVisible = await newPage.locator(this.relaxationActivitiesHeader).isVisible();

    if (isRelaxationSectionVisible) {
      console.log("This hotel has a swimming pool.");
    } else {
      console.log("This hotel does not have a swimming pool.");
    }
  }
}
