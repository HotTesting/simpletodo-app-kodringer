//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/'
let done = $("input[type='checkbox']")

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
    let list = $$("input[type='checkbox']").count()
        done.click()
    let newlist = $$("input[type='checkbox']").count()
        expect(list).toBeGreaterThan(newlist)
    })

    it('should delete all notes', function(){
        browser.get(URL)
    let list = $$("input[type='checkbox']")
//   maybe method   list.each(function () { done.click() })
//   work method   list.then(function (del){ for (let i = 0; i < del.length; i++) {del[i].click()} })
//   below the simpliest method
        list.click()
        browser.sleep(2000)
        expect(list.count()).toBe(0)
    })

})