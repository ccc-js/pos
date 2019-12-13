// Shop 商店: 使用者創建商店後可以賣東西或服務。
const Shop = module.exports = {}
const M = require('./model')

Shop.create = async function(ctx) {
  const shop = ctx.request.body
  let r = await M.insertOne('shops', shop)
  ctx.status = 200
  ctx.body = {id: r.insertedId}
}

Shop.report = async function(ctx) {

}

Shop.setting = async function(ctx) {

}
