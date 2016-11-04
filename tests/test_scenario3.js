var brigadeId = 'B010';

module.exports = {

    'Login to admin module': function (browser) {
        var globals = browser.globals;

        browser.page.loginPage()
           .navigate()
           .login(globals.adminUsername, globals.adminPassword)
    },

    'Navigate to Brigade view': function(browser) {
        browser
            .url(browser.launch_url + '/Admin/Brigade');
    },

    'Add new brigade': function (browser) {
        browser.page.addBrigadePage()
            .navigate()
            .createBrigade({ brigadeId: brigadeId, members: [4, 6] })
            .assert.urlEquals(browser.launch_url + '/Admin/Brigade')

    },

    'Logout from admin panel': function (browser) {
        browser
            .url(browser.launch_url + '/Account/Logout');
    },

    'Login to terminal': function (browser) {
        browser
            .url(browser.launch_url + '/worker/login')
            .setValue('input#inputPassword', '#' + brigadeId)
            .click('button[type=submit]')
            .assert.urlEquals(browser.launch_url + '/Worker/SetBrigadeSquad')

    },

    'Verify brigade squad view': function (browser) {
        browser
            .assert.containsText('#content div.title-value-pair:nth-of-type(1) div:nth-of-type(2)', '#' + brigadeId)
            .assert.containsText('#content div.title-value-pair:nth-of-type(2) div:nth-of-type(2)', brigadeId)
            .assert.elementsCount('tbody.usersPanel tr', 2)
            .assert.containsText('tbody.usersPanel tr:nth-of-type(1) td:nth-of-type(1)', 'Alicja')
            .assert.containsText('tbody.usersPanel tr:nth-of-type(2) td:nth-of-type(1)', 'Emil Siedlanowski')
    },

    'Confirm brigade squad': function (browser) {
        browser
            .click('button#btnConfirm')
            .waitForElementVisible('#inputPassword', 2000)
            .assert.urlEquals(browser.launch_url + '/Worker/Login');
    },

    'pause' : function(browser) {
        browser.pause();
    }
}