//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/'
let done = $("input[type='checkbox']")
let list = element.all(by.css("input[type='checkbox']"))

describe('TODO site', function () {

    it('should have correct title', function () {
        browser.get(URL)
//      let title = browser.getTitle()
//      expect(title).toBe('Angular2 Seed')
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })

    it('should create new note', function () {
        browser.get(URL)
    let webelement = $('input.enter-todo')
        webelement.sendKeys('R')
        webelement.submit()
    let notes = $$('todo-list .small-12')
        expect(notes.getText()).toContain('R')
    })

    it('should delete note', function (){
        browser.get(URL)
        element((done).click())
    let newlist = element.all(by.css("input[type='checkbox']"))
        expect(list.count() != newlist.count()).toBe(true)
    })
    it('should delete all notes', function(){
        browser.get(URL)
//      list.each(function () { element(done).click() })
        list.then(function (del){
        for (let i = 0; i < del.length; i++) {del[i].click()}})
        expect(list.count()).toBe(0)
    })

})