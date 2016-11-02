module.exports = {
    'Hello world' : function (browser) {
        browser
            .url("http://www.google.com/")
            .waitForElementVisible('input#lst-ib', 3000)
            .setValue('input#lst-ib', 'hello world!')
            .click('button[name=btnG]')
            .pause(5000)
            .end();
    }

};