import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/src/pages/LoginPage";
import { GameCategories } from "../pages/src/pages/GameCategories";
import { faker } from '@faker-js/faker';


test("TC04 - addFAQTest", async ({ page }) => { 
    // Generate random data using faker
    const title = faker.lorem.words(1); // Random title
    const gameType = faker.helpers.arrayElement([ // Random game type selection from the list
        'slot', 
        'table-games', 
        'live-casino', 
        'sportsbook', 
        'esports', 
        'virtual-sports', 
        'cockfight', 
        'fishing', 
        'lottery', 
        'number-games', 
        'poker', 
        'p2p', 
        'crash-games', 
        'arcade-mini-games', 
        'keno-bingo'
    ]); 
    
    const businessModel = faker.helpers.arrayElement([
        'revenue', 
        'sale'
    ]);

    const login = new LoginPage(page);
    const addGameCatagory = new GameCategories(page);

    await login.visit('/');
    await login.login(process.env.MY_USERNAME as string, process.env.MY_PASSWORD as string);

    await addGameCatagory.clickElement(addGameCatagory.getGameCategoriesButton());
    await addGameCatagory.clickElement(addGameCatagory.getAddGameCategoriesButton());

    await addGameCatagory.fillField(addGameCatagory.getAddGameCategoriesProviderName(), title);
    
    await addGameCatagory.clickElement(addGameCatagory.getAddGameCategoriesGameType());
    await addGameCatagory.clickElement(addGameCatagory.getAddGameCategoriesSelectGameType(gameType)); 
    
    await addGameCatagory.clickElement(addGameCatagory.getAddGameCategoriesBusinessModel()); 
    await addGameCatagory.clickElement(addGameCatagory.getAddGameCategoriesSelectBusinessModel(businessModel)); 

    // await addGameCatagory.uploadLogo("pages/src/pages/assets/logo.png");
    await addGameCatagory.uploadLogoWithFileChooser();
    await expect(page.getByText("logo.png")).toBeVisible();
    
    await addGameCatagory.clickElement(addGameCatagory.getaddGameCategoriesSubmitButton());
});