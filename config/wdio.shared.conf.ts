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
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timemout: 3 * 60 * 1000,
    },
    


}