/* global describe, beforeEach, it */
import ShoplistService from './shoplist.service'
import expect from 'expect.js'

let service

describe('ShoplistService', () => {
  describe('#findById', () => {
    beforeEach(function () {
      service = ShoplistService.shoplistFactory()
    })
  })
})
