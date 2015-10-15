'use strict'
/* global describe, it */
import expect from 'expect.js'
import Shoplist from './shoplist.model'
import Item from './item.model'

describe('Shoplist', () => {
  describe('#Items', () => {
    it('as a default size of list to 0', () => {
      let list = new Shoplist(1, 'First list')
      expect(list.items).to.have.length(0)
    })

    it('addItem() increase the item list', () => {
      let list = new Shoplist(1, 'First list')
      let item = new Item(1, 'Platine Vinyle AT LP60 Rouge', 161.49, 'Adrien', 1)

      let oldSize = list.items.length
      list.addItem(item)
      expect(list.items).to.have.length(oldSize + 1)
    })
  })
})
