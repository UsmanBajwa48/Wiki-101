import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";
import { formatDateForDisplay } from "../../../utils/dateUtils";

export class ManageUsers extends BasePage {
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
  private readonly searchField = "#manage-user-search";
  private readonly selectStateField = "//button[@class='filter-select-title select-states']";
  private readonly selectState = "li[data-value='Active']";
  private readonly selectRoleField = ".filter-select-title.select-roles";
  private readonly selecUsertRole = "//li[@data-value='Admin']";
  private readonly searchButton = "#agqa-user-filters";
  private readonly usertLoginHistoryButton = "div[class='custom-table-row active'] button[class='login-history-icon']";
  private readonly loginHistoryPopupTitle = "div[class='login-history-popup active'] h2";
  private readonly goToLoginHistoryButton = "div[class='login-history-popup active'] a[class='button']";
  private readonly loginRecordsTitle = "div[class='template-title'] h1";
  

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

  public getSearchField(): string {
  return this.searchField;
  }

  public getSelectStateField(): string {
    return this.selectStateField;
  }

  public getSelectState(): string {
    return this.selectState;
  }

  public getSelectRoleField(): string {
    return this.selectRoleField;
  }

  public getSelecUsertRole(): string {
    return this.selecUsertRole;
  }

  public getSearchButton(): string {
    return this.searchButton;
  }

  public getUsertLoginHistoryButton(): string {
    return this.usertLoginHistoryButton;
  }

  public getLoginHistoryPopupTitle(): string {
    return this.loginHistoryPopupTitle;
  }

  public getGoToLoginHistoryButton(): string {
    return this.goToLoginHistoryButton;
  }

  public getLoginRecordsTitle(): string {
    return this.loginRecordsTitle;
  }

}
