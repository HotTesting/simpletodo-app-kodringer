//JasmineJS 2
describe('suite', function () {

    it('test', function () {
        browser.get('http://maxcabrera.com/code/todo-list/')
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })
})