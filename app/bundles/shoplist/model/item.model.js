'use strict'

class Item {

  constructor (id, name, price, bought, buyer, shoplistID) {
    this._id = id
    this._name = name
    this._price = price
    this._bought = bought
    this._buyer = buyer
    this._shoplistID = shoplistID
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

  get price () {
    return this._price
  }

  set price (price) {
    this._price = price
  }

  get bought () {
    return this._bought
  }

  set bought (bought) {
    this._bought = bought
  }

  get buyer () {
    return this._buyer
  }

  set buyer (buyer) {
    this._buyer = buyer
  }

  get shoplistID () {
    return this._shoplistID
  }

  set shoplistID (shoplistID) {
    this._shoplistID = shoplistID
  }
}

export default Item
