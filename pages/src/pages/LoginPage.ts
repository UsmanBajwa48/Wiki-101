import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  private readonly userNameField = '[name="user-login-flow-account"]'
  private readonly passwordField = '[name="user-login-flow-password"]'
  private readonly loginButton = "(//input[@id='user-login-submit'])[1]" 
  private readonly dashboard = ".home-title"

  public getUserName(): string {
    return this.userNameField;
  }

  public getPassword(): string {
    return this.passwordField;
  }

  public getLogin(): string {
    return this.loginButton;
  }

  public getDashboard(): string {
    return this.dashboard;
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.waitForSelector(this.getUserName(), { state: 'visible' });
    await this.page.fill(this.getUserName(), username); 
    await this.page.fill(this.getPassword(), password); 
    await this.page.click(this.getLogin()); 
    await this.page.waitForURL('https://wordpress.compilex.it.com/');
}


}