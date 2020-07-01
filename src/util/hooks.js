var { After } = require('cucumber');

/**
 * this function takes screenshot once scenario completed
 */
After(function () {
    let self = this;

    return browser.takeScreenshot()
        .then(function (screenshot) {
            const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');
            console.log("Screenshot attacaahed");
        });
});