const T = require('./tester')

describe('POS 商場搜尋', function() {
  before(async ()=>{ await T.start() })
  after(async ()=>{ await T.stop() })

  describe('', function() {
    it('列出所有商店', async ()=>{
      T.request
      .get('/market/shopList')
      .expect('Content-Type', /json/)
      .expect(/snoopy/)
      .expect(200)
      .end(T.throwIfError)
    })
  })
})
