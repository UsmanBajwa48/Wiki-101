import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";
import { formatDateForDisplay } from "../../../utils/dateUtils";

export class ManageUsersPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly manageUserButton = "//a[contains(text(),'Manage Users')]";
  private readonly addUserButton = "//a[normalize-space()='Add User']";
  private readonly accountField = "#account-field";
  private readonly newPasswordField = "#new-password-field";
  private readonly confirmPasswordField = '#confirm-password-field';
  private readonly userRoleField = ".custom-select-dropdown-title";
  private readonly selectRole = "li[data-value='manager']";
  private readonly companyNameField = "#comapany-name-field";
  private readonly emailField = "#email-field";
  private readonly userSubmitButton = "#confirm-submit-popup-button";
  private readonly userSubmitButtonYes = "#confirm-submit";

  public getManageUserButton(): string {
  return this.manageUserButton;
  }

  public getAddUserButton(): string {
    return this.addUserButton;
  }

  public getAccountField(): string {
    return this.accountField;
  }

  public getNewPasswordField(): string {
    return this.newPasswordField;
  }

  public getConfirmPasswordField(): string {
    return this.confirmPasswordField;
  }

  public getUserRoleField(): string {
    return this.userRoleField;
  }

  public getSelectRole(): string {
    return this.selectRole;
  }

  public getCompanyNameField(): string {
    return this.companyNameField;
  }

  public getEmailField(): string {
    return this.emailField;
  }

  public getUserSubmitButton(): string {
    return this.userSubmitButton;
  }

  public getUserSubmitButtonYes(): string {
    return this.userSubmitButtonYes;
  }

}
