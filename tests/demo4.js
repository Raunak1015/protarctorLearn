const { browser, element } = require("protractor");

describe('MySuite',function(){
    it('validate login',function(){
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails');
        element(by.model('user.name')).sendKeys('Luke');
        browser.sleep(2000)
        element(by.model('user.password')).sendKeys('Skywalker');
        browser.sleep(2000)
        element(by.buttonText('Login')).click();
        browser.sleep(3000);
        var message=element(by.id('greetings'));
        expect(message.getText()).toBe('Hello Luke')
        var logout=element(by.css('[ng-click="logout()"]'))
        expect(logout.isPresent()).toBe(true);
        logout.click();
    });
});