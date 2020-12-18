let homepage=require('../pages/homepage');
describe('Demo cal test',function(){
    it('test1',function(){
       homepage.get('https://juliemr.github.io/protractor-demo/');
       homepage.enterValueinfirstBox('1');
       homepage.enterValueinSecondBox('4');
       homepage.clickon();
       homepage.verifyResult('5');
    });
    it('test2',function(){
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterValueinfirstBox('6');
        homepage.enterValueinSecondBox('3');
        homepage.clickon();
        homepage.verifyResult('9');
     });
    
});