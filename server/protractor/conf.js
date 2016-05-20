exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        auth: 'specs/auth.ejs'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};