//JasmineJS 2

let URL = 'http://maxcabrera.com/code/todo-list/'
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
        webelement.sendKeys('Ruby')
        webelement.submit()

        let notes = $$('todo-list .small-12')

//      expect(notes.getText()).toContain('test note')
        expect(notes.getText()).toContain('Ruby')
    })
})