const { browser } = require("protractor");

describe('mySuite',function(){
    it('test1 validte URL',function(){
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    });
    it('test1 validte title',function(){
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    });
});