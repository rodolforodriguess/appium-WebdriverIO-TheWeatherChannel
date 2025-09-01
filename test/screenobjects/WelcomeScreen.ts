class WelcomeScreen {

    get screen () { return $('android=new UiSelector().resourceId("onboarding-welcome-page")') };

    get letsGoButton () { return $('android=new UiSelector().resourceId("getStartedButton")') };

    get currentLocation () { return $('android=new UiSelector().resourceId("ic_plus")') };

    get looksGoodButton () { return $('android=new UiSelector().resourceId("primaryActionButton")') };

    async tapOnGetStarted(){
        await this.letsGoButton.click();
    }

    async pickCurrentLocation(){
        await this.currentLocation.click();
    }

    async tapOnLooksGood(){
        await this.looksGoodButton.click();
    }
};

export default WelcomeScreen;