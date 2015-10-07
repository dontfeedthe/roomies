/* global describe, beforeEach, it */
import SharedFlatService from './sharedFlatService.js'
// import chai from 'chai'
import expect from 'expect.js'

let service

describe('SharedFlatService', () => {
  describe('#findById', () => {
    beforeEach(function () {
      service = SharedFlatService.sharedFlatFactory()
    })

    it('cannot accept an empty value as parameter', () => {
      var search = service.findById()
      return search.then(function (result) {
        expect().fail('findById must have a parameter')
      }, function (error) {
        expect(error).to.be.an(Error)
        expect(error.message).to.be('You must provide an ID as parameter')
      })
    })

    it("return an Error if the SharedFlat doesn't exist", () => {
      var search = service.findById(-1)
      return search.then(function (result) {
        expect().fail('findById must have a parameter')
      }, function (error) {
        expect(error).to.be.an(Error)
        expect(error.message).to.be("This SharedFlat doesn't exists")
      })
    })
  })
})
