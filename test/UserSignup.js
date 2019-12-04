const T = require('./tester')

describe('POS 使用者登入', function() {
  before(async () => { await T.start() })
  after(async () => { await T.stop() })

  describe('', function() {
    it('註冊新帳戶', async () => {
      await T.request
      .post('/user/signup')
      .send({
        'uid': 'snoopy',
        'password': '123',
      })
      //.set('Accept', 'application/json')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(/Marcus/)
      // .expect(/Stockholm, Sweden/)
      .expect(200)
      // .end(T.throwIfError)
    })
    /*
    it('註冊新帳戶', async function() {
      request
      .post('/user/signup')
      .send({
        'uid': '1',
        'name': 'snoopy',
        'password': '123',
      })
      // .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      // .expect(/Marcus/)
      // .expect(/Stockholm, Sweden/)
      .expect(200)
      .end(throwIfError)
    })
    */
  })
})
