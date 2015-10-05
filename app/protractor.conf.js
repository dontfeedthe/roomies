exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    './bundles/**/*.e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://local.octodev.com/roomies/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};