/* eslint-disable no-undef */
const M = require('../../server/model')
const D = require('../data')

describe('創建 pos 測試資料', function () {
  before(async function () {
    await M.open()
    await M.clear()
  })
  after(async function () {
    await M.close()
  })

  describe('使用者 CURD', function () {
    it('新增 users', async () => {
      await M.db.insertMany('user', D.users)
    })
    it('新增 shops', async () => {
      await M.db.insertMany('shop', D.shops)
    })
    it('新增 orders', async () => {
      await M.db.insertMany('order', D.orders)
    })
  })
})
