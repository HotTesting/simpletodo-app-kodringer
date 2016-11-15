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
    let input = $('input.enter-todo')
        input.sendKeys('R')
        input.submit()
    let notes = $$('todo-list .small-12')
        expect(notes.getText()).toContain('R')
    })

    it('should delete note', function (){
        browser.get(URL)
    let count = $$("input[type='checkbox']").count()
        done.click()
    let newcount = $$("input[type='checkbox']").count()
        expect(count).toBeGreaterThan(newcount)
    })

    it('should delete all notes', function(){
        browser.get(URL)
    let list = $$("input[type='checkbox']")
//   maybe method   list.each(function () { done.click() })
//   work method   list.then(function (del){ for (let i = 0; i < del.length; i++) {del[i].click()} })
//   below the simpliest method
        list.click()
        expect(list.count()).toBe(0)
    })

})