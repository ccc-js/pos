const Buyer = module.exports = {}
const User = require('./user')
const T = require('./tester')

const user = Buyer.user = {
  name: 'ccc',
  password: '321'
}

const order = Buyer.order = {
  shop: {
    name: 'Snoopy之家'
  },
  items: [
    {
      product: '養狗一日',
      addon: '含過夜',
      price: 300
    },
    {
      product: '養貓一日',
      addon: '不含過夜',
      price: 100
    }
  ],
  total: 400
}

Buyer.signup = async function () {
  await User.signup(200, user)
}

Buyer.login = async function () {
  return T.post('/user/login', 200, user)
}

Buyer.order = async function (status = 200) {
  return T.post('/order/create', status, order)
}

Buyer.logout = async function () {
  return T.post('/user/logout', 200, user)
}

Buyer.readOrder = async function (status, user) {
  return T.post('/order/read', status, user)
}
