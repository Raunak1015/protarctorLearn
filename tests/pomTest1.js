let homepage=require('../pages/homepage');
describe('Demo cal test',function(){
    it('test1',function(){
       homepage.get('https://juliemr.github.io/protractor-demo/');
       homepage.enterValueinfirstBox('4');
       homepage.enterValueinSecondBox('4');
       homepage.clickon();
       homepage.verifyResult('8');
    });
    
});