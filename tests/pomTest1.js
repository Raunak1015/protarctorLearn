let homepage=require('../pages/homepage');
describe('Demo cal test',function(){
    it('test1',function(){
       homepage.get('https://juliemr.github.io/protractor-demo/');
       homepage.enterValueinfirstBox('3');
       homepage.enterValueinSecondBox('9');
       homepage.clickon();
       homepage.verifyResult('12');
    });
    
});