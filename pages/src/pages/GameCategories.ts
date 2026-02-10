import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";
import path from "path";

export class GameCategories extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  

  private readonly gameCategoriesButton = "//a[contains(text(),'Game Categories')]";
  private readonly addGameCategoriesButton = "//button[normalize-space()='Add New Categories']";
  private readonly addGameCategoriesProviderName = "#provider-name";
  private readonly addGameCategoriesGameType = "button[class='agqa-popup-form-button']";
  private readonly addGameCategoriesSelectGameType = "li[data-value='slot']";
  private readonly addGameCategoriesBusinessModel = ".custom-select-dropdown-title";
  private readonly addGameCategoriesSelectBusinessModel = "li[data-value='Revenue']"
  private readonly addGameCategoriesUploadLogo = ".browse-link";
  private readonly addGameCategoriesSubmitButton = "input[value='Submit']";
  private readonly addFAQSubmitButton = "#confirm-submit-popup-button";
  private readonly addFAQSubmitButtonYes = "#confirm-submit";
  private readonly userSubmitButton = "#confirm-submit-popup-button";
  private readonly logoFileInput = "input[type='file']";
  

  public getGameCategoriesButton(): string {
    return this.gameCategoriesButton;
  }

  public getAddGameCategoriesButton(): string {
    return this.addGameCategoriesButton;
  }

  public getAddGameCategoriesProviderName(): string {
    return this.addGameCategoriesProviderName;
  }

  public getAddGameCategoriesGameType(): string {
    return this.addGameCategoriesGameType;
  }

  public getAddGameCategoriesSelectGameType(gameType: any): string {
    return this.addGameCategoriesSelectGameType;
  }

  public getAddGameCategoriesBusinessModel(): string {
    return this.addGameCategoriesBusinessModel;
  }

  public getAddGameCategoriesSelectBusinessModel(businessModel: any): string {
    return this.addGameCategoriesSelectBusinessModel;
  }

  async uploadLogoWithFileChooser() {
    const fp = path.resolve(__dirname, "assets", "logo.png");
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.page.click(this.addGameCategoriesUploadLogo)
    ]);
    await fileChooser.setFiles(fp);
  }

//   async uploadLogoWithFileChooser() {
//     // Correct the path resolution based on your directory structure
//     const filePath = path.resolve(__dirname, "assets", "logo.png");

//     console.log("Resolved file path: ", filePath);  // Log the resolved file path for debugging

//     const [fileChooser] = await Promise.all([
//       this.page.waitForEvent("filechooser"),
//       this.page.click(this.addGameCategoriesUploadLogo),  // Click the upload button
//     ]);

//     // Set the file in the file chooser
//     await fileChooser.setFiles(filePath);
//  }


  // async uploadLogo(relativeFilePath: string) {
  //   const filePath = path.resolve(relativeFilePath);

  //   console.log("Resolved file path: ", filePath);  // Log the resolved file path for debugging

  //   const [fileChooser] = await Promise.all([
  //     this.page.waitForEvent("filechooser"),
  //     this.page.click(this.addGameCategoriesUploadLogo),
  //   ]);

  //   await fileChooser.setFiles(filePath);
  // }

  // public getAddGameCategoriesUploadLogo(): string {
  //   return this.addGameCategoriesUploadLogo;
  // }

  public getaddGameCategoriesSubmitButton(): string {
    return this.addGameCategoriesSubmitButton;
  }

  public getAddFAQSubmitButton(): string {
    return this.addFAQSubmitButton;
  }

  public getAddFAQSubmitButtonYes(): string {
    return this.addFAQSubmitButtonYes;
  }
  
}

