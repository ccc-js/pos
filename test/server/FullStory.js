const T = require('./tester')
var shop = {}

describe('POS 使用者', function() {
  before(async () => { await T.start() })
  after(async () => { await T.stop() })

  describe('snoopy 註冊', function() {
    it('signup: 註冊新帳戶，應該成功！', async () => {
      await T.post('/user/signup', 200, {
        'uid': 'snoopy',
        'password': '123',
      })
    })
    it('signup: 註冊第二次，應該失敗！', async () => {
      await T.post('/user/signup', 400, {
        'uid': 'snoopy',
        'password': '123',
      })
    })
    it('signup: ccc 註冊新帳戶，應該成功！', async () => {
      await T.post('/user/signup', 200, {
        'uid': 'ccc',
        'password': '321',
      })
    })
  })
  describe('snoopy 登入', function() {
    it('login: 已註冊使用者登入錯誤帳號密碼，應該失敗！', async () => {
      await T.post('/user/login', 400, {
        'uid': 'snoopy',
        'password': '333',
      })
    })
    it('login: 已註冊使用者登入正確帳號密碼，應該成功！', async () => {
      await T.post('/user/login', 200, {
        'uid': 'snoopy',
        'password': '123',
      })
    })
  })
  describe('snoopy 開店', function() {
    it('shop/create: 已註冊使用者創建店面，應該成功！', async () => {
      let r = await T.post('/shop/create', 200, {
        owner: 'snoopy',
        name: '狗狗之家',
        address: '金門縣金寧鄉安美村湖南 33 號', 
        products: [
          {name:'養狗一日', price:200},
          {name:'養貓一日', price:100}
        ],
        addons: [
          {name:'不含過夜', price:0},
          {name:'含過夜', price:100},
        ]
      })
      let o = T.asObj(r)
      // console.log('shop/create: r.text=', r.text)
      // console.log('shop/create: o =', o)
      shop._id = o._id
    })
  })
  describe('snoopy 登出', function() {
    it('logout : 已登入後登出應該會成功！', async () => {
      await T.post('/user/logout', 200, {
        'uid': 'snoopy'
      })
    })
  })
  describe('ccc 訂購', function() {
    console.log('shop=', shop)
    let order = {
      shop: {_id:shop._id, name:'狗狗之家'},
      items: [
        { product:'養狗一日', addon: '含過夜', price: 300 },
        { product:'養貓一日', addon: '不含過夜', price: 100 },
      ],
      total: 400
    }
    it('order/create 未登入就訂購產品，應該失敗！', async () => {
      await T.post('/order/create', 400, order)
    })
    it('login: 訂購前先登入', async () => {
      await T.post('/user/login', 200, {
        'uid': 'ccc',
        'password': '321',
      })
    })
    it('order/create 已登入使用者訂購產品，應該成功！', async () => {
      await T.post('/order/create', 200, order)
    })
  })
  describe('ccc 登出', function() {
    it('logout : 已登入後登出應該會成功！', async () => {
      await T.post('/user/logout', 200, {
        'uid': 'ccc'
      })
    })
  })
})
