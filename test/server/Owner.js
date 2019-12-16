const Owner = module.exports = {}
const User = require('./user')
const T = require('./tester')

const user = Owner.user = {
  name: 'snoopy',
  password: '123'
}

const shop = Owner.shop = {
  owner: 'snoopy',
  name: 'Snoopy之家',
  address: '金門縣金寧鄉安美村湖南 33 號',
  products: [
    {
      name: '養狗一日',
      price: 200
    },
    {
      name: '養貓一日',
      price: 100
    }
  ],
  addons: [
    {
      name: '不含過夜',
      price: 0
    },
    {
      name: '含過夜',
      price: 100
    }
  ]
}

Owner.signup = async function () {
  await User.signup(200, user)
}

Owner.login = async function () {
  await User.login(200, user)
}

Owner.createShop = async function () {
  return T.post('/shop/create', 200, shop)
}

Owner.readShop = async function () {
  const r = await T.post('/shop/read', 200, { name: 'Snoopy之家' })
  const shops = T.asObj(r)
  T.ok(shops.length === 1)
}
