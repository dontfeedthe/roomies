class AccountController {
  constructor ($state, Facebook, UserService) {
    this.$state = $state
    this.Facebook = Facebook
    this.UserService = UserService

    this._user = {}

    this.Facebook.getLoginStatus().then((status) => {
      this.Facebook.getUserInformations().then((userInfo) => {
        this._user = userInfo
        this.UserService.getByFacebookID(this._user.id).then((userAccount) => {
          this._user = userAccount
          $state.go('home')
        }, () => {
          $state.go('account.welcome')
        })
      }, () => {
        $state.go('default')
      })
    }, () => {
      this.Facebook.login().then(() => {
        this.Facebook.getUserInformations().then((userInfo) => {
          this._user = userInfo
          this.UserService.getByFacebookID(this._user.id).then((userAccount) => {
            this._user = userAccount
            $state.go('home')
          }, () => {
            $state.go('account.welcome')
          })
        }, () => {
          $state.go('default')
        })
      }, () => {
        $state.go('default')
      })
    })
  }

  validate (model) {
    this.UserService.createAccount(model).then((data) => {
      this.$state.go('home')
    }, () => {
      this.$state.go('default')
    })
  }

  get user () {
    return this._user
  }
}

AccountController.$inject = ['$state', 'Roomies.facebook', 'Roomies.UserService']

export default AccountController
