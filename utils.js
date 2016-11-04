var execFileSync = require("child_process").execFileSync;

module.exports = {

    cleanDatabase: function() {
        try {
            execFileSync("scripts/reload_db.bat");
        } catch (e) {
            throw e;
        }
    }

};