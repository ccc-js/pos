/* eslint-disable no-undef */
const T = require('./tester')
const Owner = require('./owner')

describe('商店經營者 Owner', function () {
  before(async () => {
    await T.start()
  })
  after(async () => {
    await T.stop()
  })
  describe('開店流程測試', function () {
    it('註冊成功', async () => {
      await Owner.signup()
    })
    it('登入成功', async () => {
      await Owner.login()
    })
    it('創建店面成功！', async () => {
      await Owner.createShop()
    })
    it('查詢商店成功', async () => {
      const r = await T.post('/shop/read', 200, {
        name: Owner.shop.name
      })
      const shops = T.asObj(r)
      T.ok(shops.length === 1)
    })
    it('自己先購買物品成功', async () => {
      await Owner.order(200)
    })
    it('查詢訂單成功', async () => {
      const r = await T.post('/order/read', 200, {
        name: Owner.shop.name
      })
      const orders = T.asObj(r)
      T.ok(orders.length === 1)// snoopy自己訂snoopy之家的那一份訂單
    })
  })
})
