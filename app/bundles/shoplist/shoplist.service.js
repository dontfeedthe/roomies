'use strict'
import Shoplist from './model/shoplist.model'

class ShoplistService {

  findById (id) {
    return new Promise((resolve, reject) => {
      if (id === 1) {
        resolve(new Shoplist(1, 'First list'))
      } else {
        reject(new Error('This list (' + id + ') doesn\'t exist'))
      }
    })
  }

  findAllBySharedflat (sharedFlat) {}

  save (shoplist) {}

  delete (shoplist) {}

  static shoplistFactory () {
    return new ShoplistService()
  }
}

export default ShoplistService
