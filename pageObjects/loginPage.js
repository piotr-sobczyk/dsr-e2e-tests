module.exports = {

    url: function() {
        return this.api.launchUrl;
    },

    commands: [{
        login: function (username, password) {
            return this
                .setValue('@usernameField', username)
                .setValue('@passwordField', password)
                .click('@submitButton')
        }
    }],

    elements: [{
        usernameField: 'input#UserName',
        passwordField: 'input#Password',
        submitButton: 'button[type=submit]'
    }]

};