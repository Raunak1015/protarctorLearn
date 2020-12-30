const { browser, element } = require("protractor")

describe("mySuite",function(){
    it("add new user",function(){
        //add new user
        browser.get("http://www.trycatchclasses.com/code/demo/angular_crud/#");
        //add information
        let alert1=browser.switchTo().alert();
        alert1.accept();
        browser.manage().window().maximize();
        element(by.css('span[ng-click="addUser()"]')).click();
        browser.sleep(5000);
        element(by.model("UserFirstname")).sendKeys("johnn");
        browser.sleep(5000);
        element(by.model("UserLastname")).sendKeys("lt");
        browser.sleep(5000);
        element(by.model("UserType")).sendKeys("5");
        browser.sleep(5000);
        element(by.model("UserActive")).click();
        browser.sleep(3000);
        element(by.css("[ng-click='AddUpdateUser()']")).click();
        browser.sleep(5000);
        //handling alert
        let alert=browser.switchTo().alert();
        //browser.sleep(5000);
       // expect(alert.getText()).toEqual("Error in adding User record");
        alert.accept();

        //dropdown
        browser.sleep(5000);
        element(by.model("search.type")).element(by.css("option[value='number:5']")).click();
        browser.sleep(5000);





    })
})