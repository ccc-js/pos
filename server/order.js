// Shop 商店: 使用者創建商店後可以賣東西或服務。
const Order = module.exports = {}
const M = require('./model')

Order.create = async function(ctx) {
  const order = ctx.request.body
  let r = await M.insertOne('orders', order)
  ctx.status = 200
  ctx.body = {id: r.insertedId}
}