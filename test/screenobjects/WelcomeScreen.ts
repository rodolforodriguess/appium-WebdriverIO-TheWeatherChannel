import AppScreen from "./AppScreen.ts";

const SELECTORS = {
    SCREEN: 'android=new UiSelector().resourceId("onboarding-welcome-page")',
    CURRENT_LOCATION: 'android=new UiSelector().resourceId("ic_plus")',
    GET_STARTED_BUTTON: 'android=new UiSelector().resourceId("welcome-lets-go")',
};

class WelcomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () { return $(SELECTORS.SCREEN) };
    private get currentLocation () { return $(SELECTORS.CURRENT_LOCATION) };
    private get letsgoButton () { return $(SELECTORS.GET_STARTED_BUTTON) };

    async tapOnGetStarted(){
        await this.letsgoButton.click();
    }

    async tapOnCurrentLocation(){
        await this.currentLocation.click();
    }
};

export default new WelcomeScreen();