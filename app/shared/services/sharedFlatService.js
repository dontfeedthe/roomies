import SharedFlat from '../models/SharedFlat.model'

class SharedFlatService {

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
        if (id === 1) {
          resolve(new SharedFlat(1, 'Appartement de l\'amour', '89, boulevard Murat', {}))
        } else {
          reject(Error('This SharedFlat doesn\'t exists'))
        }
      }
    })
  }

  static sharedFlatFactory () {
    return new SharedFlatService()
  }
}

export default SharedFlatService
