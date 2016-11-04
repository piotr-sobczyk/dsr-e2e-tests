module.exports = {

    url: function() {
        return this.api.launchUrl + "Worker/Login";
    },

    commands: [{
        login: function (username) {
            return this
                .setValue('@loginField', username)
                .click('@submitButton')
        },
		logout: function () {
			return this
				.click('@logoutButton')
		}
    }],

    elements: [{
        loginField: 'input#inputPassword',
        submitButton: 'button[type=submit]',
		logoutButton: 'button#btnWorkerLogout'
    }]

};