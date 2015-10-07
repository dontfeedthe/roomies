class SharedFlatService {

  constructor () {
    this._name = ''
  }

  get roommates () {
    return {
      'Simon': {
        id: 12,
        phone: '06.00.00.00.00'
      },
      'Adrien': {
        id: 54,
        phone: '06.00.00.00.00'
      },
      'Julien': {
        id: 3,
        phone: '06.00.00.00.00'
      }
    }
  }

  findById (id) {
    return new Promise((resolve, reject) => {
      if (id == null) {
        reject(Error('You must provide an ID as parameter'))
      } else {
        reject(Error('This SharedFlat doesn\'t exists'))
      }
    })
  }

  static sharedFlatFactory () {
    return new SharedFlatService()
  }
}

export default SharedFlatService
