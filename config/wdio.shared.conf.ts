import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {

    specs: [],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 40000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
  reporters: [
      ['spec', { onlyFailures: true }],
  ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 3 * 40 * 100,
    },
    


}