'use strict'

class Task {

  constructor (id, name, dueDate, status, recurringTask, interval) {
    this._id = id;
    this._name = name;
    this._dueDate = dueDate;
    this._status = status;
    this._recurringTask = recurringTask;
    this._interval = interval;
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id
    return this;
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name
    return this;
  }

  get dueDate () {
    return this._dueDate
  }

  set dueDate (dueDate) {
    this._dueDate
    return this;
  }

  get status () {
    return this._status
  }

  set status (status) {
    this._status
    return this;
  }

  get recurringTask () {
    return this._recurringTask
  }

  set recurringTask (recurringTask) {
    this._recurringTask
    return this;
  }

  get interval () {
    return this._interval
  }

  set interval (interval) {
    this._interval
    return this;
  }

}

export default Task
