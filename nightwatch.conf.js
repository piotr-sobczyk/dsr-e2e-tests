module.exports = {
    "src_folders" : ["tests"],
    "output_folder" : "output/reports",

    "custom_assertions_path": "extensions/asserts",
    "page_objects_path" : "pageObjects",

    "selenium" : {
      "start_process" : true,
      "server_path" : "selenium/selenium-server-standalone-2.48.2.jar",
      "log_path" : "output/",
      "port" : 4444,
      "cli_args" : {
        //"webdriver.chrome.driver" : "selenium/chromedriver-mac"
        "webdriver.chrome.driver" : "selenium/chromedriver.exe"
      }
    },

    "test_settings" : {
      "default": {
        "launch_url": "http://sfc.dsr.com.pl/",
        "selenium_port": 4444,
        "selenium_host": "localhost",
        "silent": true,
        "globals": {
          "adminUsername": "dj",
          "adminPassword": "dj"
        },
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      },

      "local": {
          "launch_url": "http://localhost/",
          "selenium_port": 4444,
          "selenium_host": "localhost",
          "silent": true,
          "globals": {
              "adminUsername": "dj1",
              "adminPassword": "dj1"
          },
          "desiredCapabilities": {
              "browserName": "chrome"
          }
      }

    }
}