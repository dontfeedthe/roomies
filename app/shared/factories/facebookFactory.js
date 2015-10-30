class FacebookFactory {
  login () {
    return new Promise((resolve, reject) => {
      FB.login((response) => {
        if(response.authResponse) {
          resolve()
        } else {
          reject()
        }
      })
    })
  }

  getUserInformations () {
    return new Promise((resolve, reject) => {
      FB.api('/me', (response) => {
        if(response) {
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
        if(response) {
          resolve(response)
        } else {
          reject('Unable to collect user informations')
        }
      })
    })
  }

  static sharedFacebookFactory(){
  	return new FacebookFactory();
	}
}

export default FacebookFactory
