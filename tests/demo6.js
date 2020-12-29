describe("table demo",function(){
    beforeAll(function()
    {
        browser.get('https://dassdevarajan.github.io/demo-app/');
        browser.sleep(5000);
    })

    it("view product detail",function(){
        var Product_Name="1001 Activities Book"
        var cat="Books"
        var qty="300"
        var unit="4"
        var supp="ABC Publications"
        var Desc="Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner."
        var returanable='false'
        element.all(by.tagName('tr')).last().element(by.id('view')).click();
        expect(element(by.tagName("h3")).getText()).toBe('Product View');
        expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe(Product_Name);
        expect(element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText()).toBe(Desc);
        expect(element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText()).toBe(cat);
        expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe(qty);
        expect(element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText()).toBe(unit);
        expect(element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText()).toBe(supp);
        expect(element.all(by.tagName('tr')).get(6).element(by.tagName('td')).getText()).toBe(returanable);

    })
    it("navigate to product list",function(){
        element(by.id("list-menu")).click();
        expect(element(by.tagName('h3')).getText()).toBe("Product List");
    })
})