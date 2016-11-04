module.exports = {
	
	'test 1' : function(browser){
		var globals = browser.globals;
		
		browser.page.workerLoginPage()
            .navigate()
            .login(globals.worker000337Username);
			
		browser.page.workerLoginPage().logout()
		console.log(browser.launchUrl)
		browser
			.url("http://sfc.dsr.com.pl")
			
        browser.page.loginPage()            
            .login(globals.masterUsername, globals.masterPassword)
	},
	
/* 
    'Login as worker' : function (browser) {
        var globals = browser.globals;

        browser.page.workerLoginPage()
            .navigate()
            .login(globals.worker000337Username);
    },
	
	'Select machine' : function (browser) {
		browser
			.assert.urlEquals(browser.launch_url + "Worker/Main")
			.click('button[data-id=ddMachinesGroup]')
			.click('.dropdown-menu li:nth-of-type(2)')
			.pause(1000)
			.click('.machines:nth-of-type(7) .slot-0 .col-1')
 			.click('#btnSelectMachine')		
			.pause(1000)
			.click('#DataTables_Table_0 tbody tr:first-of-type')
			.click('#btnSelectOperation')
			.click('#divSelectStatus .buttons button:first-of-type')
			.pause(4000)
			.isVisible('#divSelectShift', result => {
				if (result.value) { 
					browser.click('#divSelectShift .btnCurrent') 
				}
			})
			.pause(2000)
	},
	
	'Logout worker' : function (browser) {
 		browser.page.workerLoginPage().logout()
	},
	
	'Login as master' : function (browser) {
        var globals = browser.globals;

		browser
			.url(globals.launchUrl)
		
        browser.page.loginPage()            
            .login(globals.masterUsername, globals.masterPassword)			
	},
	
	'Close machine activity as master' : function (browser) {
		browser
			.click('a[href="/Master/EndMA"]')
			.click('#tblMAList tbody tr:last-of-type')
			.moveTo('#tblMAList tbody tr:last-of-type', 10, 10)
			.doubleClick()
			.pause(2000)
			.click('#yesClose')
	},
	
	'Logout master' : function (browser) {
        var globals = browser.globals;

        browser
			.click('a[href="/Account/Logout"]')		
	},
	
	'Login as worker again' : function (browser) {
        var globals = browser.globals;

        browser.page.workerLoginPage()
            .navigate()
            .login(globals.worker000337Username);
    },
	
	'Login check if no machine activity exists' : function (browser) {
		browser
			.assert.attributeEquals('#endAllMA', 'disabled', 'disabled')
	} */
}