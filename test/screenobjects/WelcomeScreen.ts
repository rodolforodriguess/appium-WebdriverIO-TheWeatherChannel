class WelcomeScreen {

    get screen () { return $('android=new UiSelector().resourceId("onboarding-welcome-page")') };

    get letsGoButton () { return $('android=new UiSelector().resourceId("getStartedButton")') };

    get currentLocation () { return $('android=new UiSelector().resourceId("ic_plus")') };

    async tapOnGetStarted(){
        await this.letsGoButton.click();
    }

    async pickCurrentLocation(){
        await this.currentLocation.click();
    }
};

export default WelcomeScreen;