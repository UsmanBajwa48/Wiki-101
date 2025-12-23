import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { ManageUsers } from "../pages/src/pages/ManageUsers";
import { faker } from '@faker-js/faker';


test("TC01 - addNewUserTest", async ({ page }) => { 
    
    const userAccount = faker.internet.username().replace(/[^a-zA-Z0-9]/g, '');
    const userEmail = faker.internet.email();
    const companyName = faker.company.name();

    const login = new LoginPage(page);
    const adduser = new ManageUsers(page);
    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);
    await adduser.clickElement(adduser.getManageUserButton());
    await adduser.clickElement(adduser.getAddUserButton());
    await adduser.fillField(adduser.getAccountField(), userAccount);
    await adduser.fillField(adduser.getNewPasswordField(), process.env.NEW_PASSWORD as string);
    await adduser.fillField(adduser.getConfirmPasswordField(), process.env.CONFIRM_PASSWORD as string);
    await adduser.clickElement(adduser.getUserRoleField());
    await adduser.clickElement(adduser.getSelectRole());
    await adduser.fillField(adduser.getCompanyNameField(), companyName);
    await adduser.fillField(adduser.getEmailField(), userEmail);
    await adduser.clickElement(adduser.getUserSubmitButton());
    await adduser.clickElement(adduser.getUserSubmitButtonYes());

});