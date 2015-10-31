class UserService {
  getByFacebookID (id) {
    return new Promise((resolve, reject) => {
      reject('There is no account associated to this Facebook ID')
    })
  }

  createAccount (model) {
    return new Promise((resolve, reject) => {
      if (model.email != null) {
        resolve(model)
      } else {
        reject(new Error('email_not_defined'))
      }
    })
  }

	static userServiceFactory () {
  return new UserService()
	}
}

export default UserService
