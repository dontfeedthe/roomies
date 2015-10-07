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

    it('return a SharedFlat if it exists', () => {
      return service.findById(1).then((result) => {
        expect(result.id).to.not.be(undefined)
        expect(result.id).to.be(1)
        expect(result.name).to.not.be(undefined)
        expect(result.name).to.be.a('string')
        expect(result.address).to.not.be(undefined)
        expect(result.address).to.be.a('string')
        expect(result.roomies).to.not.be(undefined)
        expect(result.roomies).to.be.a('object')
      }, () => {
        expect().fail('findById might have return a result')
      })
    })
  })
})
