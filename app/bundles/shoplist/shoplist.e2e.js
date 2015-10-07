/* global describe, it, browser, element, by */
import expect from 'expect.js'

describe('Shoplist:', function () {
  it('should display', function () {
    browser.get('#/shoplist')
    expect(element.all(by.repeater('item in ctrl.list')).count()).toEqual(0)
    element(by.buttonText('New ITEM')).click()
    expect(element.all(by.repeater('item in ctrl.list')).count()).toEqual(1)
  })
})
