import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { ManageUsers } from "../pages/src/pages/ManageUsers";


test("TC03 - editUserTest", async ({ page }) => { 
    
    const login = new LoginPage(page);
    const edituser = new ManageUsers(page);
    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);
    await edituser.clickElement(edituser.getManageUserButton());
    await edituser.clickElement(edituser.getEditUserButton());
    await edituser.clickElement(edituser.getGenerateNewPasswordButton());
    await edituser.clickElement(edituser.getGenerateNewPasswordPopupNo());
    await edituser.clickElement(edituser.getUpdateUserRoleField());
    await edituser.clickElement(edituser.getUpdatedUserRole());
    await edituser.fillField(edituser.getUpdatedUserCompanyName(), 'bogesa5341');
    await edituser.clickElement(edituser.getUpdatedUserSubmitButton());
    await edituser.clickElement(edituser.getUpdatedUserSubmitYes());


});