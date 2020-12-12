const { element } = require("protractor");

describe('Demo cal test',function(){
    it('test1',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('2');
        browser.sleep(2000)
        element(by.model('second')).sendKeys('3');
        browser.sleep(2000)
        element(by.id('gobutton')).click();
        browser.sleep(2000)
        let result=element(by.cssContainingText('.ng-binding','5'));
        browser.sleep(2000)
        expect(result.getText()).toEqual('5');
    });
    it('test2',function(){
        console.log('Test completed')
    });
});