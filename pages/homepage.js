const { browser } = require("protractor");

let homepage=function(){
    let firstBox= element(by.model('first'));
    let secondBox= element(by.model('second'));
    let clickButton= element(by.id('gobutton'));

    this.get=function(url){
        browser.get(url);
    };

    this.enterValueinfirstBox=function(Fnumber){
        firstBox.sendKeys(Fnumber);
    };
    this.enterValueinSecondBox=function(Snumber){
        secondBox.sendKeys(Snumber);
    };
    this.clickon=function(){
        clickButton.click();
    };
this.verifyResult=function(result){
    let output=element(by.cssContainingText('.ng-binding',result))
    expect(output.getText()).toEqual(result);
};


};

module.exports=new homepage();