class Roomie {
  constructor (id, firstname, lastname, alias, email, phone, facebookID) {
    this._id = id
    this._firstname = firstname
    this._lastname = lastname
    this._alias = alias
    this._email = email
    this._phone = phone
    this._facebookID = facebookID
  }

  get id () {
    return this._id
  }

  set id (id) {
    this._id = id
  }

  get firstname () {
    return this._firstname
  }

  set firstname (firstname) {
    this._firstname = firstname
  }

  get lastname () {
    return this._lastname
  }

  set lastname (lastname) {
    this._lastname = lastname
  }

  get fullName () {
    return this.firstname + ' ' + this.lastname
  }

  get alias () {
    return this._alias
  }

  set alias (alias) {
    this._alias = alias
  }

  get email () {
    return this._email
  }

  set email (email) {
    this._email = email
  }

  get phone () {
    return this._phone
  }

  set phone (phone) {
    this._phone = phone
  }

  get facebookID () {
    return this._facebookID
  }

  set facebookID (facebookID) {
    this._facebookID = facebookID
  }
}

export default Roomie
