var reporter = require('cucumber-html-reporter');
var options = {

        theme: 'bootstrap',
        jsonDir: 'cypress/cucumber-json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0",
        }

    };

    reporter.generate(options);