import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { ManageUsers } from "../pages/src/pages/ManageUsers";


test("TC02 - searchUserTest", async ({ page }) => { 
    
    const login = new LoginPage(page);
    const searchuser = new ManageUsers(page);
    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);
    await searchuser.clickElement(searchuser.getManageUserButton());
    await searchuser.fillField(searchuser.getSearchField(), 'bogesa5341');
    await searchuser.clickElement(searchuser.getSelectStateField());
    await searchuser.clickElement(searchuser.getSelectState());
    await searchuser.clickElement(searchuser.getSelectRoleField());
    await searchuser.clickElement(searchuser.getSelecUsertRole());
    await searchuser.clickElement(searchuser.getSearchButton());
    await searchuser.clickElement(searchuser.getUsertLoginHistoryButton());
    await expect(page.locator(searchuser.getLoginHistoryPopupTitle())).toBeVisible();
    await searchuser.clickElement(searchuser.getGoToLoginHistoryButton());
    await expect(page.locator(searchuser.getLoginRecordsTitle())).toBeVisible();


});