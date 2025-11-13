import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { ManageUsersPage } from "../pages/src/pages/ManageUsers";
// import { ViewHotelDetailsPage } from "../pages/src/pages/ReportSystem";
// import { ReservationPage } from "../pages/src/pages/GameCatagories";
// import { searchData } from "../data/searchData";
// import { formatDateForDisplay, getCheckInDate, getCheckOutDate, getFutureDate } from "../utils/dateUtils";


test("TC01 - Add new user", async ({ page }) => { 
    
    const login = new LoginPage(page);
    const manageuser = new ManageUsersPage(page);
    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);
    await manageuser.clickElement(manageuser.getManageUserButton());
    await manageuser.clickElement(manageuser.getAddUserButton());
    await manageuser.fillField(manageuser.getAccountField(), 'testing3');
    await manageuser.fillField(manageuser.getNewPasswordField(), 'asdf1234');
    await manageuser.fillField(manageuser.getConfirmPasswordField(), 'asdf1234');
    await manageuser.clickElement(manageuser.getUserRoleField());
    await manageuser.clickElement(manageuser.getSelectRole());
    await manageuser.fillField(manageuser.getCompanyNameField(), 'Mckinsy');
    await manageuser.fillField(manageuser.getEmailField(), 'testing3@gmail.com');
    await manageuser.clickElement(manageuser.getUserSubmitButton());
    await manageuser.clickElement(manageuser.getUserSubmitButtonYes());

});