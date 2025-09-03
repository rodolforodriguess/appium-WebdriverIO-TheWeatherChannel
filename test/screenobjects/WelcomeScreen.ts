import AppScreen from "./AppScreen.ts";

const SELECTORS = {
    SCREEN: driver.isAndroid ? 'android=new UiSelector().resourceId("onboarding-welcome-page")' : '~onboarding-welcome-page',
    CURRENT_LOCATION: 'android=new UiSelector().resourceId("ic_plus")',
    GET_STARTED_BUTTON: 'android=new UiSelector().resourceId("ctaButtonText")',
    LOOKS_GOOD_BUTTON: 'android=new UiSelector().resourceId("primaryActionButton")',
    UNDERSTAND_BUTTON: 'android=new UiSelector().resourceId("iUnderstandButton")',
    LOC_WHILE_IN_USE_BUTTON: 'id=com.android.permissioncontroller:id/permission_allow_only_button',
    SAVE_PREF_BUTTON: 'android=new UiSelector().resourceId("primaryActionButton")',
    ALLOW_BUTTON: 'android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")',
    ADDS_CONTINUE_BUTTON: 'android=new UiSelector().resourceId("onboardingAdsConsentPrimaryButton")',
    CURRENT_WHEATHER_CONDITION: 'android=new UiSelector().resourceId("currentConditionWeatherPhrase")'
};

class WelcomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () { return $(SELECTORS.SCREEN) };
    private get currentLocation () { return $(SELECTORS.CURRENT_LOCATION) };
    private get letsgoButton () { return $(SELECTORS.GET_STARTED_BUTTON) };
    private get looksGoodButton () { return $(SELECTORS.LOOKS_GOOD_BUTTON) };
    private get understandButton () { return $(SELECTORS.UNDERSTAND_BUTTON) };
    private get locWhileInUseButton () { return $(SELECTORS.LOC_WHILE_IN_USE_BUTTON) };
    private get savePrefButton () { return $(SELECTORS.SAVE_PREF_BUTTON) };
    private get allowButton () { return $(SELECTORS.ALLOW_BUTTON) };
    private get addsContinueButton () { return $(SELECTORS.ADDS_CONTINUE_BUTTON) };
    public get currentWheatherCondition () { return $(SELECTORS.CURRENT_WHEATHER_CONDITION) };

    async setWelcomeScreen(){
        await this.letsgoButton.click();
        await this.currentLocation.click();
        await this.looksGoodButton.click();
        await this.understandButton.click();
        await this.locWhileInUseButton.click();
        await this.savePrefButton.click();
        await this.allowButton.click();
        await this.addsContinueButton.click();
    }
};

export default new WelcomeScreen();