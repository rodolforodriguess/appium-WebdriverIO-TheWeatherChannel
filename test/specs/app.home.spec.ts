import * as main from '../main/index.ts';

describe('Verify homepage screen', () => {

    it('Setting up current location', async () => {
        await main.welcomeScreen.tapOnGetStarted();
        await main.welcomeScreen.pickCurrentLocation();
        await main.welcomeScreen.tapOnLooksGood();
    })
});