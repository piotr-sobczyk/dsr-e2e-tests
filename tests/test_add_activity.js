var utils = require("../utils");

module.exports = {

    before: function() {
        utils.cleanDatabase();
    },

    'Login as admin' : function (browser) {
        var globals = browser.globals;

        browser.page.loginPage()
            .navigate()
            .login(globals.adminUsername,globals.adminPassword)

        browser.assert.urlEquals(browser.launch_url + "Admin/Events");

    },

    "Add new activity" : function (browser) {
        browser
            .click("a[href=AddEvent]")
            .assert.urlEquals(browser.launch_url + "Admin/AddEvent")
            .click('input.button')
            .assert.visible('div.required.error')
            .setValue('input#EventTime',"12:00:00")
            .click('.select2-selection__arrow')
            .click('xpath', '//li[text()="WorkTime"]')
            .click('input.button')
            .assert.urlEquals(browser.launch_url + "Admin/Events")

    },

    "Verify table data" : function (browser) {
        browser
            .assert.elementsCount('table#tblEvents tbody tr', 1)
            .assert.elementsCount('table#tblEvents tbody td', 7)
            .assert.containsText('table#tblEvents tbody tr:first-of-type td:nth-of-type(2)', '2016-11-04 12:00:00')
            .assert.containsText('table#tblEvents tbody tr:first-of-type td:nth-of-type(4)', 'WorkTime')

    },

    "Delete the recently added activity" : function (browser) {
        browser
            .click('a.btnDelete')
            .click('button#yesDelete')
            .waitForElementNotVisible('div#confirmDelete',2000)
            .assert.elementsCount('table#tblEvents tbody tr', 1)
            .assert.elementsCount('table#tblEvents tbody td', 1)
            .pause()
    }

};