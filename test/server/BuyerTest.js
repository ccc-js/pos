/* eslint-disable no-undef */
const T = require('./tester')
const Buyer = require('./buyer')

describe('購買者 Buyer', function () {
  before(async () => {
    await T.start()
  })
  after(async () => {
    await T.stop()
  })
  describe('購買流程測試', function () {
    it('未登入就訂購產品，應該失敗！', async () => {
      await Buyer.order(400)
    })
    it('註冊成功', async () => {
      await Buyer.signup()
    })
    it('登入成功', async () => {
      await Buyer.login()
    })
    it('購買物品成功', async () => {
      await Buyer.order(200)
    })
    it('查看購買的物品成功', async () => {
      await Buyer.readOrder(200)
    })
  })
})
