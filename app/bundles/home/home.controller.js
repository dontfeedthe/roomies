class HomeController {
  constructor (SharedFlatService, $state) {
    this.$state = $state

    this._user = {
      firstname: '',
      lastname: '',
      email: ''
    }

    this.center = {
      lat: 51.505,
      lon: -0.09,
      zoom: 8
    }

    this._model = [{ name: "Adrien", message: "Hello, this is super nice to be able to write messages"}]
  }

  createNews (news) {
    this._model.unshift({ name: 'Adrien', message: news })
  }

  get user () {
    return this._user
  }

  get news () {
    return this._model
  }

  // Redirection to login state
  login (provider) {
    switch (provider) {
      case 'FB':
        this.$state.go('login.facebook')
        break
      case 'G':
        this.$state.go('login.google')
        break
      default:
        this.$state.go('login')
    }

    this.$state.go('welcome')
  }

  validate (model) {
    this.$state.go('sharedflat.find')
  }

  create () {
    this.$state.go('sharedflat.new')
  }
}

HomeController.$inject = ['Roomies.SharedFlatService', '$state']

export default HomeController
