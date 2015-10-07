class SharedFlat {

	constructor (id, name, address, roomies) {
  this._id = id
  this._name = name
  this._address = address
  this._roomies = roomies
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

  get address () {
    return this._address
  }

  set address (address) {
    this._address = address
  }

  get roomies () {
    return this._roomies
  }

  set roomies (roomies) {
    this._roomies = roomies
  }
}

export default SharedFlat
