import WelcomeScreen from '../screenobjects/WelcomeScreen.ts';

describe('Verify homepage screen', () => {

    it('Setting up current location', async () => {
        await WelcomeScreen.setWelcomeScreen();
        await expect(WelcomeScreen.currentWheatherCondition).toBeDisplayed();
    })
});