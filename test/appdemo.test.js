import { expect } from 'chai';

describe('API Demo testing', () => {
    afterEach(async () => {
        //Terminate 
        await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });

        //Delay
        await browser.pause(1000);

        //Start App
        await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
    })

    it( 'Input Field', async () => {
        //Locator
        const appMenu = await $(`//android.widget.TextView[@content-desc="App"]`)
        const alertDialog = await $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`)
        const textEntryDialog = await $(`//android.widget.Button[@content-desc="Text Entry dialog"]`)
        const nameField = await $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]`)
        const passField = await $(`//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]`)

        //Action
        await appMenu.click();

        await alertDialog.waitForDisplayed({ timeout: 1000 });
        const isAlertMenuVisible = await alertDialog.isDisplayed();
        expect(isAlertMenuVisible).to.be.true;
        await alertDialog.click();

        await textEntryDialog.click();
        await nameField.setValue('admin');
        await passField.setValue('admin1234');
    });

    it('Scroll down', async () => {
        
        const viewsMenu = await $(`//android.widget.TextView[@content-desc="Views"]`)
        await viewsMenu.click();

        //scroll
        const target = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Layouts"))`);
        await target.click();
    });
   
});

