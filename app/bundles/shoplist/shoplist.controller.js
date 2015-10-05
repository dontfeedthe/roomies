class ShopListController {
  constructor () {
  	this._list = []
  }

  get list () {
  	return this._list;
  }

  addNewItem () {
  	this._list.push({
  		title: 'New ITEM',
  		bought: false,
  		price: 2673.56
  	})
  }

  removeItem (index) {}
}

ShopListController.$inject = []

export default ShopListController
