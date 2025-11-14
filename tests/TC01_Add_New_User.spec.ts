import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { ManageUsers } from "../pages/src/pages/ManageUsers";
// import { ViewHotelDetailsPage } from "../pages/src/pages/ReportSystem";
// import { ReservationPage } from "../pages/src/pages/GameCatagories";
// import { searchData } from "../data/searchData";
// import { formatDateForDisplay, getCheckInDate, getCheckOutDate, getFutureDate } from "../utils/dateUtils";


test("TC01 - Add new user", async ({ page }) => { 
    
    const login = new LoginPage(page);
    const adduser = new ManageUsers(page);
    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);
    await adduser.clickElement(adduser.getManageUserButton());
    await adduser.clickElement(adduser.getAddUserButton());
    await adduser.fillField(adduser.getAccountField(), 'testing3');
    await adduser.fillField(adduser.getNewPasswordField(), 'asdf1234');
    await adduser.fillField(adduser.getConfirmPasswordField(), 'asdf1234');
    await adduser.clickElement(adduser.getUserRoleField());
    await adduser.clickElement(adduser.getSelectRole());
    await adduser.fillField(adduser.getCompanyNameField(), 'Mckinsy');
    await adduser.fillField(adduser.getEmailField(), 'testing3@gmail.com');
    await adduser.clickElement(adduser.getUserSubmitButton());
    await adduser.clickElement(adduser.getUserSubmitButtonYes());

});