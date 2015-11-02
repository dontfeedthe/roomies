/* global FB */
class FacebookFactory {
  login () {
    return new Promise((resolve, reject) => {
      FB.login((response) => {
        if (response.authResponse) {
          resolve('fb_connexion_successfull')
        } else {
          reject('fb_connexion_failed')
        }
      })
    })
  }

  loginWithoutDialog (clientID, redirectURL) {
    return 'https://www.facebook.com/dialog/oauth?client_id=' + clientID + '&redirect_uri=' + redirectURL
  }

  getUserInformations () {
    return new Promise((resolve, reject) => {
      FB.api('/me', {fields: 'gender,first_name,last_name,locale,email'}, (response) => {
        if (response) {
          resolve(response)
        } else {
          reject('Unable to collect user informations')
        }
      })
    })
  }

  getProfilePicture () {
    return new Promise((resolve, reject) => {
      FB.api('/me/picture', (response) => {
        if (response) {
          resolve(response)
        } else {
          reject('Unable to collect user informations')
        }
      })
    })
  }

  getLoginStatus () {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          resolve('The user is connected to FB')
        } else if (response.status === 'not_authorized') {
          reject(new Error('The user is logged in to Facebook but the application is not authorized'))
        } else {
          reject(new Error('The user is not logged in'))
        }
      })
    })
  }

  static sharedFacebookFactory () {
    return new FacebookFactory()
  }
}

export default FacebookFactory
