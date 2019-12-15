// Shop 商店: 使用者創建商店後可以賣東西或服務。
const Shop = module.exports = {}
const M = require('./model')

Shop.create = async function(ctx) {
  let user = ctx.session.user
  if (user != null) {
    const shop = ctx.request.body
    if (M.create('shop', shop)) {
      ctx.status = 200
      ctx.body = shop
      return
    }
  }
  ctx.status = 400
  ctx.body = "Error: 創建商店失敗，沒有登入不能創建商店!"
}

Shop.list = async function(ctx) {
  const query = ctx.request.body
  let r = await M.read('shop', query)
  ctx.status = 200
  ctx.body = r
}
