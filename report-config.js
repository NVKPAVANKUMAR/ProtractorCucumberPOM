var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json',
  output: './reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'Prod Env',
    Browser: window.navigator.platform,
    Platform: window.navigator.os,
    Parallel: 'Scenarios',
    Executed: 'Remote',
  },
};

reporter.generate(options);
