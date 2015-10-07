class ShopListController {
  constructor (SharedFlatService) {
    this._sharedFlatService = SharedFlatService

    this._list = [{
      title: 'Tancarville',
      bought: false,
      price: null,
      buyer: null
    }, {
      title: 'Bibliotheque',
      bought: false,
      price: null,
      buyer: null
    }, {
      title: 'Enceintes',
      bought: false,
      price: null,
      buyer: null
    }, {
      title: 'Ciseaux',
      bought: true,
      price: 3.99,
      buyer: 'Adrien'
    }, {
      title: 'Table',
      bought: true,
      price: 169.0,
      buyer: 'Simon'
    }, {
      title: 'Lecteur vinyl',
      bought: false,
      price: null,
      buyer: null
    }, {
      title: 'Télévision',
      bought: false,
      price: null,
      buyer: null
    }, {
      title: 'Balance',
      bought: false,
      price: null,
      buyer: null
    }, {
      title: 'Plat à tarte',
      bought: true,
      price: 14.99,
      buyer: 'Adrien'
    }]
  }

  get list () {
    return this._list
  }

  getTotal () {
    var total = 0
    for (var i = 0; i < this._list.length; i++) {
      if (this._list[i].price != null) {
        total += this._list[i].price
      }
    }

    return total
  }

  getTotalByRoommate () {
    var roommates = this._sharedFlatService.roommates
    var sum = {}

    for (var user in roommates) {
      sum[user] = 0
    }

    for (var i = 0; i < this._list.length; i++) {
      if (this._list[i].price != null) {
        if (sum[this._list[i].buyer] == null) {
          sum[this._list[i].buyer] = 0
        }

        sum[this._list[i].buyer] += this._list[i].price
      }
    }

    return sum
  }

  addNewItem (item) {
    this._list.push({
      title: item.title,
      bought: item.bought,
      price: item.price,
      buyer: item.buyer
    })
  }

  removeItem (index) {}
}

ShopListController.$inject = ['Roomies.SharedFlatService']

export default ShopListController
