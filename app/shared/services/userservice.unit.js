/* global describe, beforeEach, it */
import UserService from './userService'
// import chai from 'chai'
import expect from 'expect.js'

let service

describe('UserService', () => {
  describe('#createAccount', () => {
    beforeEach(function () {
      service = UserService.userServiceFactory()
    })

    it('should return an error if data are wrong', () => {
      var model = {

      }
      return service.createAccount(model).then((result) => {
        expect().fail()
      }, (error) => {
        expect(error).to.have.property('message')
        expect(error.message).to.be('email_not_defined')
      })
    })

    it('should return an success message if data are OK', () => {
      var model = {
        email: 'contact.adriensaunier@gmail.com',
        first_name: 'Adrien',
        gender: 'male',
        social: { facebookID: '10207559738089393' },
        last_name: 'Saunier',
        locale: 'en_GB'
      }
      return service.createAccount(model).then((result) => {
        expect(result).to.eql(model)
      }, () => {
        expect().fail()
      })
    })
  })
})
