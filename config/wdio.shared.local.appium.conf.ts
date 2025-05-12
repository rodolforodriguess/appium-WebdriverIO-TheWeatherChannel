import { config as baseConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    services: [
        ...baseConfig.services || [],
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true,
                    log: './logs/appium.log'
                }
            }
        ]
    ],
    before: async () => {
        if (driver.isAndroid) {
            await driver.updateSettings({
                waitForSelectorTimemout: 3 * 100
            });
        }
    },
    capabilities: []
}