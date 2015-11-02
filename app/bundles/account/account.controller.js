class AccountController {
  constructor ($state, Facebook, UserService, $window) {
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
      $window.location.href = this.Facebook.loginWithoutDialog('637744676328877', 'http://localhost/roomies/#/login/facebook')
    //   this.Facebook.login().then(() => {
    //     this.Facebook.getUserInformations().then((userInfo) => {
    //       this._user = userInfo
    //       this.UserService.getByFacebookID(this._user.id).then((userAccount) => {
    //         this._user = userAccount
    //         $state.go('home')
    //       }, () => {
    //         $state.go('account.welcome')
    //       })
    //     }, () => {
    //       $state.go('default')
    //     })
    //   }, () => {
    //     $state.go('default')
    //   })
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

AccountController.$inject = ['$state', 'Roomies.facebook', 'Roomies.UserService', '$window']

export default AccountController
