import { join } from "node:path";
import { config as baseConfig } from './wdio.shared.local.appium.conf.ts';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    specs: ["../test/specs/**/app*.spec.ts"],
    capabilities: [
        {
            platformName: 'Android',
            'wdio:maxInstances': 1,
            'appium:deviceName': 'Pixel 7a',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(
                process.cwd(),
                'apps',
                '../apk/weatherChannel_app.apk'
            ),
            'appium:appPackage': 'com.weather.Weather',
            'appium:newCommandTimeout': 240,
            "appium:locationServicesEnabled": true
        }
    ]
}
