let User = Parse.Object.extend('User')

const register = async (req) => {
  let { username, password, email } = req.params

  const user = new Parse.User()
  user.set('username', username)
  user.set('password', password)
  user.set('email', email)
  try {
    const data = await user.signUp()
    return data
  } catch (error) {
    throw error
  }
}

const login = async (req) => {
  let { username, password } = req.params

  try {
    const user = await Parse.User.logIn(username, password, { usePost: true })
    return user
  } catch (error) {
    throw error
  }
}

const logout = async (req) => {
  try {
    await Parse.User.logOut()
    const currentUser = Parse.User.current()
    return currentUser
  } catch (error) {
    throw error
  }
}

const changePassword = async (req) => {
  // const user = Parse.User.current()
  let user = req.user

  return user

  // const user = req.user
  // const { newPassword, oldPassword } = req.params

  // try {
  //   const checkPass = await Parse.User.logIn(user.get('username'), oldPassword)

  //   if (checkPass) {
  //     user.setPassword(newPassword)
  //     const data = await user.save({}, { sessionToken: user.getSessionToken() })
  //     return user
  //   }
  // } catch (error) {
  //   throw error
  // }
}

module.exports = {
  register,
  login,
  logout,
  changePassword,
}
