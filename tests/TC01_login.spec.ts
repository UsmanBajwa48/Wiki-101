import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/Login";
import { ManageUsersPage } from "../pages/src/pages/ManageUsers";
// import { ViewHotelDetailsPage } from "../pages/src/pages/ReportSystem";
// import { ReservationPage } from "../pages/src/pages/GameCatagories";
// import { searchData } from "../data/searchData";
// import { formatDateForDisplay, getCheckInDate, getCheckOutDate, getFutureDate } from "../utils/dateUtils";


test("TC01 - Login User", async ({ page }) => { 
    
    const login = new LoginPage(page);
    const manageuser = new ManageUsersPage(page);
    await login.visit('/');
    await login.fillField(login.getUserName(), process.env.MY_USERNAME as string);
    await login.fillField(login.getPassword(), process.env.MY_PASSWORD as string);
    await login.clickElement(login.getLogin());
    await expect(page).toHaveURL('https://wordpress.compilex.it.com/');
    await manageuser.clickElement(manageuser.getManageUserButton());
    await manageuser.clickElement(manageuser.getAddUserButton());
    await login.fillField(manageuser.getAccountField(), 'testing2');
    await login.fillField(manageuser.getNewPasswordField(), 'asdf1234');
    await login.fillField(manageuser.getConfirmPasswordField(), 'asdf1234');
    await manageuser.clickElement(manageuser.getUserRoleField());
    await manageuser.clickElement(manageuser.getSelectRole());
    await login.fillField(manageuser.getCompanyNameField(), 'Mckinsy');
    await login.fillField(manageuser.getEmailField(), 'testing2@gmail.com');
    await manageuser.clickElement(manageuser.getUserSubmitButton());
    await manageuser.clickElement(manageuser.getUserSubmitButtonYes());

});