import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { FAQPage } from "../pages/src/pages/FAQ";
import { faker } from '@faker-js/faker';


test("TC04 - addFAQTest", async ({ page }) => { 
    
    const title = faker.lorem.words(5); 
    const description = faker.lorem.paragraphs(2); 
    const questionType = faker.helpers.arrayElement([
        'Account & Access Management', 
        'System Features & Workflow', 
        'Reports & Data Queries', 
        'Errors & Troubleshooting', 
        'Notifications & Alerts', 
        'Performance & Compatibility', 
        'System Settings & Customization', 
        'Customer Support & Contact',
        'Other'
    ]);

    const login = new LoginPage(page);
    const addfFAQ = new FAQPage(page);
    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);
    await addfFAQ.clickElement(addfFAQ.getFAQButton());
    await addfFAQ.clickElement(addfFAQ.getAddFAQButton());
    await expect(page.locator(addfFAQ.getAddFAQPageTitle())).toBeVisible();
    await addfFAQ.fillField(addfFAQ.getAddFAQTitle(), title);
    await addfFAQ.clickElement(addfFAQ.getAddFAQQuestionType());
    await addfFAQ.clickElement(addfFAQ.getAddFAQQuestionSelect(questionType));
    await addfFAQ.fillField(addfFAQ.getAddFAQDetails(), description);
    await addfFAQ.clickElement(addfFAQ.getAddFAQSubmitButton());
    await addfFAQ.clickElement(addfFAQ.getAddFAQSubmitButtonYes());

});