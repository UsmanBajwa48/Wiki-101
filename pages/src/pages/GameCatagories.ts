import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class ReservationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly roomsTab = "(//button[@id='property-room-grid-root-tab-2'])[2]";

  public getRoomTab(): string {
    return this.roomsTab;
  }

  async clickRoomsCard(newPage: Page): Promise<void> {
    const roomCard = await newPage.locator(this.roomsTab);

    if (await roomCard.isVisible()) {
      console.log("Clicking on the Rooms tab...");
      await roomCard.click();
    } else {
      console.log("Rooms tab is not visible or available.");
    }
  }

}

