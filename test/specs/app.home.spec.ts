import WelcomeScreen from '../screenobjects/WelcomeScreen.ts';

describe('Verify homepage screen', () => {

    it('Setting up current location', async () => {
        await WelcomeScreen.waitForIsShown();
        await WelcomeScreen.tapOnGetStarted();
        await WelcomeScreen.tapOnCurrentLocation();
        await WelcomeScreen.tapOnLooksGood();
        await WelcomeScreen.tapOnUnderstand();
        await WelcomeScreen.locationWhileInUse();
        await WelcomeScreen.savePreferences();
        await WelcomeScreen.allowButtonClick();
        await WelcomeScreen.continueWithAdds();
        await expect(WelcomeScreen.currentWheatherCondition).toBeDisplayed();
    })
});