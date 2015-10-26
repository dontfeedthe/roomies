'use strict'

import Task from './task.model'
import Moment from 'moment'

class TaskService {
  constructor () {}

  get upcomingTasks () {

  }

  get taskStatus () {

  }

  findById (id) {
    return new Promise((resolve, reject) => {
      if(id === 1) {
        resolve(new Task(1))
      } else {
        reject(new Error('The task ' + id + 'doesn\'t exist'))
      }
    })
  }

  getStatusById (id) {
    return this.findById(id).then((result) => {
      if(Moment().isBefore(new Moment(result.dueDate))) {
        return 'pending'
      } else if(Moment().isAfter(new Moment(result.dueDate))) {
        return 'late'
      } else {
        return 'done, ' + Moment().fromNow()
      }
    }, (error) => {
      return null
    })
  }

  static taskServiceFactory(){
    return new TaskService()
  }
}

export default TaskService
