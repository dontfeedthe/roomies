'use strict'

class Shoplist {

  constructor (id, name, description, items, sharedFlatID) {
    this._id = id
    this._name = name
    this._description = description
    this._items = items
    this._sharedFlatID = sharedFlatID
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get description () {
    return this._description
  }

  set description (description) {
    this._description = description
  }

  get items () {
    return this._items
  }

  set items (items) {
    this._items = items
  }

  get sharedFlatID () {
    return this._sharedFlatID
  }

  set sharedFlatID (sharedFlatID) {
    this._sharedFlatID = sharedFlatID
  }

}

export default Shoplist
