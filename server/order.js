// Shop 商店: 使用者創建商店後可以賣東西或服務。
const Order = module.exports = {}
const M = require('./model')

Order.create = async function (ctx) {
  const user = ctx.session.user
  if (ctx.session.user != null) {
    const order = ctx.request.body
    order.user = { name: user.name }
    const r = await M.create('order', order)
    ctx.status = 200
    ctx.body = { _id: r.insertedId }
  } else {
    ctx.status = 400
    ctx.body = 'Error: 訂購失敗，沒有登入不能訂購!'
  }
}

Order.read = async function (ctx) {
  const name = ctx.session.user
  if (name != null) {
    const user = { user: name }
    // console.log(user)
    const r = await M.read('order', user)
    // console.log(r)
    if (r.length >= 1) {
      ctx.status = 200
      ctx.body = r
    } else {
      ctx.status = 400
      ctx.body = 'Error: 查詢失敗，沒有購買商品無法查詢!'
    }
  } else {
    ctx.status = 400
    ctx.body = 'Error: 查詢失敗，沒有登入無法查詢!'
  }
}
