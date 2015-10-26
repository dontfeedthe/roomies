/* global describe, beforeEach, it */
import Task from './task.model'
import TaskService from './task.service'
import expect from 'expect.js'
import sinon from 'sinon-es6'
import Moment from 'moment'

let service

describe('TaskService', () => {
  describe('with a task that doesnt exists', () => {
    beforeEach(function () {
      service = TaskService.taskServiceFactory()
    })

    it('should return an Error when the task doesn\'t exist', () => {
      return service.findById(2).then((result) => {
        expect().fail()
      }, (error) => {
        expect(error).to.be.an(Error)
      })
    })
  })

  describe('with a task that exists', () => {
    it('should return the task', () => {
      return service.findById(1).then((result) => {
        expect(result).to.be.a(Task)
        expect(result.id).to.be(1)
      }, (error) => {
        expect().fail()
      })
    })

    describe('and that is non-recurrent', () => {
      it('should return task status `done, a few seconds ago` if it has been done', () => {
        return service.getStatusById(1).then((result) => {
          expect(result).to.be.equal('done, a few seconds ago')
        }, (error) => {
          expect().fail();
        })
      })

      it('should return task status `pending` if it not done but the due date is not passed', () => {
        sinon.stub(service, "findById", () => {
          return new Promise(function(resolve, reject) {
            resolve(new Task(1, 'Buy new loudspeakers', new Moment().add(1, 'y').format(), false, null))
          });
        })

        return service.getStatusById(1).then((result) => {
          expect(result).to.be.equal('pending')
          service.findById.restore()
        }, (error) => {
          expect().fail();
        })
      })

      it('should return task status `late` if it not done but the due date is passed', () => {
        sinon.stub(service, "findById", () => {
          return new Promise(function(resolve, reject) {
            resolve(new Task(1, 'Buy new loudspeakers', new Moment().subtract(1, 'M').format(), false, null))
          });
        })

        return service.getStatusById(1).then((result) => {
          expect(result).to.be.equal('late')
          service.findById.restore()
        }, (error) => {
          expect().fail();
        })
      })
    })
  })
})
