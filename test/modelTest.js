const M = require('../server/model')

describe('POS Model 測試', function() {
  before(async function() {
    await M.open()
  })
  after(async function () {
    await M.close()
  })

  describe('', function() {
    it('新增使用者', async function() {
      await M.insertOne('users', {uid:'snoopy', password:'123'})
    })
  })
})
