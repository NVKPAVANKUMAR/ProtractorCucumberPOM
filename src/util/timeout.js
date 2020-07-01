var { setDefaultTimeout } = require('cucumber');
var global = require('../../global.json');
setDefaultTimeout(Number(global.globalTimeOut));