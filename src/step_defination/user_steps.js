var { Given, When, Then } = require('cucumber');
var chai = require('chai');
var expect = chai.expect;

// test data and global setting references
var userTestData = require('../../data/testdata.json');
var global = require('../../global.json');

// page refereence
var userManagementPage = require('../pages/user_management_page.js');
var adduserPage = require('../pages/add_user_page.js');

var ec = protractor.ExpectedConditions;

Given('user navigated to application url', async function () {
    // load the application home page
    await browser.get(global.testsiteurl).then(async function () {
        await browser.wait(ec.visibilityOf(userManagementPage.adduserButton), 60);
    })
});

When('Add new user with mandatory details', async function () {
    //add new user
    await userManagementPage.adduserButton.click();
    await adduserPage.firstname.sendKeys(userTestData.userdetails.firstname);
    await adduserPage.lastname.sendKeys(userTestData.userdetails.lastname);
    await adduserPage.username.sendKeys(userTestData.userdetails.username);
    await adduserPage.password.sendKeys(userTestData.userdetails.password);
    await adduserPage.customer.filter(async (elem, index) => {
        return await elem.getText().then(async (text) => {
            return text === userTestData.userdetails.customer
        });
    }).click();
    await adduserPage.role.element(by.cssContainingText("option", userTestData.userdetails.role)).click();
    await adduserPage.email.sendKeys("dddd@gmail.com");
    await adduserPage.mobile.sendKeys(userTestData.userdetails.phone);
    await adduserPage.saveButton.click();
});

Then('validate the user has been added to the table', async     function () {

    var result = "not-matched";
    await userManagementPage.userList.each(async (row, index) => {
        var cells = row.all(by.css("td"));

        // verify user exists with given value
        await cells.get(2).getText().then(async (displayUserName) => {
            if (displayUserName === userTestData.userdetails.username) {
                //verify first-name and last-name saved as given in data-file
                await cells.get(0).getText().then(async (firstName) => {
                    expect(firstName).to.equals(userTestData.userdetails.firstname, 
                        "First name not matched");
                });
                await cells.get(1).getText().then(async (lastName) => {
                    expect(lastName).to.equals(userTestData.userdetails.lastname, 
                        "Last name not matched");
                });
                result = "matched";
                return;
            }
        })
    });
    if (result !== "matched") {
        expect.fail("User not added.");
    }
});

When('Delete user as {string} after clicks on delete icon', async function (username) {
    // locate and delete the given user if exists
    await userManagementPage.userList.each(async (row, index) => {
        var cells = row.all(by.css("td"));
        await cells.get(2).getText().then(async (displayUserName) => {
            if (displayUserName === username) {
                await cells.get(10).click();
                await userManagementPage.deleteConfirmationOk.click();
            }
        })
    });
});

Then('User as {string} deleted and it removed from the table', async function (username) {
    var result = 'Deleted';
    //verify given user no-more exists on web-table
    await userManagementPage.userList.each(async (row, index) => {
        var cells = row.all(by.css("td"));
        await cells.get(2).getText().then(async (displayUserName) => {
            if (displayUserName === username) {
                result = "Not-Deleted";
                return;
            }
        })
    });
    if (result !== "Deleted") {
        expect.fail("User Not Deleted: "+ username);
    }
});