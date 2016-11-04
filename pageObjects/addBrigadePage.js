module.exports = {

    url: function() {
        return this.api.launchUrl + '/Admin/AddBrigade';
    },

    commands: [{
        createBrigade: function (brigadeData) {
            this
                .setValue('@brigadeLoginField', brigadeData.brigadeId)
                .setValue('@brigadeNameField', brigadeData.brigadeId)
                .setValue('@brigadeDescriptionField', 'Brygada testowa ' + brigadeData.brigadeId)
                .click('@brigadeTypeDrowDown')
                .click('xpath', '//li[text()="Brygada twarda"]');

            for(var i = 0; i < brigadeData.members.length; i++) {
                var memberIndex = brigadeData.members[i];

                this.click('form div:nth-of-type(7) .select2-selection__arrow')
                    .click('ul.select2-results__options li:nth-of-type('+ memberIndex + ')')
                    .click('button#btnAddSquadTemplate')
            }

            this.click('@submitButton');
            return this;
        }
    }],

    elements: [{
        brigadeLoginField: 'input#Login',
        brigadeNameField: 'input#Name',
        brigadeDescriptionField: 'input#Description',
        brigadeTypeDrowDown: 'form div:nth-of-type(4) .select2-selection__arrow',
        submitButton: 'form div:nth-of-type(5) input[type=submit]'
    }]

};