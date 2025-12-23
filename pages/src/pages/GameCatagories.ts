import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class GameCategories extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly FAQButton = "//a[contains(text(),'FAQ')]";
  private readonly addFAQButton = ".add-button";
  private readonly addFAQPageTitle = ".form-heading";
  private readonly addFAQTitle = "#faq-title";
  private readonly addFAQQuestionType = "(//div[@class='custom-select-dropdown-title'])[2]";
  private readonly addFAQQuestionSelect = "li[data-value='Account & Access Management']";
  private readonly addFAQDetails = "#editor-add-faq";
  private readonly addFAQSubmitButton = "#confirm-submit-popup-button";
  private readonly addFAQSubmitButtonYes = "#confirm-submit";
  private readonly userSubmitButton = "#confirm-submit-popup-button";

  public getFAQButton(): string {
    return this.FAQButton;
  }

  public getAddFAQButton(): string {
    return this.addFAQButton;
  }

  public getAddFAQPageTitle(): string {
    return this.addFAQPageTitle;
  }

  public getAddFAQTitle(): string {
    return this.addFAQTitle;
  }

  public getAddFAQQuestionType(): string {
    return this.addFAQQuestionType;
  }

  public getAddFAQQuestionSelect(questionType: any): string {
    return this.addFAQQuestionSelect;
  }

  public getAddFAQDetails(): string {
    return this.addFAQDetails;
  }

  public getAddFAQSubmitButton(): string {
    return this.addFAQSubmitButton;
  }

  public getAddFAQSubmitButtonYes(): string {
    return this.addFAQSubmitButtonYes;
  }
  
}

