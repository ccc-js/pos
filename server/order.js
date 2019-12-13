// Shop 商店: 使用者創建商店後可以賣東西或服務。
const Order = module.exports = {}
const M = require('./model')

Order.create = async function(ctx) {
  let user = ctx.session.user
  console.log('session.user=', user)
  if (ctx.session.user != null) {
    const order = ctx.request.body
    order.user = {uid: user.uid}
    let r = await M.insertOne('orders', order)
    ctx.status = 200
    ctx.body = {id: r.insertedId }
  } else {
    ctx.status = 400
    ctx.body = "Error: 訂購失敗，沒有登入不能訂購!"
  }
}