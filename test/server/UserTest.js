const T = require('./tester')

describe('POS 使用者《註冊/登入/登出》', function() {
  before(async () => { await T.start() })
  after(async () => { await T.stop() })

  describe('', function() {
    it('註冊新帳戶，應該成功！', async () => {
      await T.post('/user/signup', 200, {
        'uid': 'snoopy',
        'password': '123',
      })
    })
    it('註冊第二次，應該失敗！', async () => {
      await T.post('/user/signup', 400, {
        'uid': 'snoopy',
        'password': '123',
      })
    })
    it('已註冊使用者登入正確帳號密碼，應該成功！', async () => {
      await T.post('/user/login', 200, {
        'uid': 'snoopy',
        'password': '123',
      })
    })
    it('已註冊使用者登入錯誤帳號密碼，應該失敗！', async () => {
      await T.post('/user/login', 400, {
        'uid': 'snoopy',
        'password': '333',
      })
    })
  })
})
