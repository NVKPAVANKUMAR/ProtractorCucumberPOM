exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        "browserName": 'chrome'
    },
    specs: ['features/*.feature'],

    cucumberOpts: {
        tags: false,
        format: 'json:./reports/cucumber_report.json',
        require: ['./src/step_defination/*.js', './src/util/*.js']
    }
};