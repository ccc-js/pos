const User = module.exports = {}
const T = require('./tester')

User.signup = async function (status, user) {
  return T.post('/user/signup', status, user)
}

User.login = async function (status, user) {
  return T.post('/user/login', status, user)
}

User.logout = async function (status, user) {
  return T.post('/user/logout', status, user)
}
