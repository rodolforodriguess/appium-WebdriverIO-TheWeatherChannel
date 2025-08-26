import AppScreen from "./AppScreen.ts";

const SELECTORS = {
    SCREEN: 'android=new UiSelector().resourceId("onboarding-welcome-page")'
};

class WelcomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () { return $(SELECTORS.SCREEN)}
    private get currentLocation () { return $('android=new UiSelector().resourceId("ic_plus")') };
    private get letsgoButton () { return $('android=new UiSelector().resourceId("getStartedButton")') };

    async tapOnGetStarted(){
        await this.letsgoButton.click();
    }

    async tapOnCurrentLocation(){
        await this.currentLocation.click();
    }
};

export default new WelcomeScreen();