import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  private readonly userName = '[name="user-login-flow-account"]'
  private readonly password = '[name="user-login-flow-password"]'
  private readonly login = "(//input[@id='user-login-submit'])[1]" 
  private readonly dashboard = ".home-title"

  public getUserName(): string {
    return this.userName;
  }

  public getPassword(): string {
    return this.password;
  }

  public getLogin(): string {
    return this.login;
  }

  public getDashboard(): string {
    return this.dashboard;
  }

}