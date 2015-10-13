/* global describe, beforeEach, it */
import Shoplist from './model/shoplist.model'
import ShoplistService from './shoplist.service'
import expect from 'expect.js'

let service

describe('ShoplistService', () => {
  describe('#findById', () => {
    beforeEach(function () {
      service = ShoplistService.shoplistFactory()
    })

    it('should return an Error if the Shoplist doesnt exist', () => {
      return service.findById(2).then((result) => {
        expect().fail()
      }, (error) => {
        expect(error).to.be.a(Error)
        expect(error.message).to.be.equal('This list (' + 2 + ") doesn't exist")
      })
    })

    it('should return a Shoplist', () => {
      return service.findById(1).then((result) => {
        expect(result).to.be.a(Shoplist)
        expect(result.id).to.be.equal(1)
      }, () => {
        expect().fail()
      })
    })
  })
})
