/* eslint-disable no-undef */
const T = require('./tester')
const User = require('./user')

const snoopy = {
  name: 'snoopy',
  password: '123'
}

describe('使用者', function () {
  before(async () => {
    await T.start()
    await T.clear()
  })
  after(async () => {
    await T.clear()
    await T.stop()
  })
  describe('申請帳號流程測試', function () {
    it('第一次註冊成功', async () => {
      await User.signup(200, snoopy)
    })
    it('重複註冊會失敗', async () => {
      await User.signup(400, snoopy)
    })
    it('正確帳號密碼 => 登入成功', async () => {
      await User.login(200, snoopy)
    })
    it('錯誤帳號密碼 => 登入失敗', async () => {
      snoopy.password = 'xxx'
      await User.login(400, snoopy)
    })
  })
})
