// MVC 的 C: Controller = Router -- 處理任務委派事宜。
const router = module.exports = require('koa-router')()
const User = require('./user')
const Shop = require('./shop')
const Order = require('./order')
const path = require('path')
const fs = require('fs')

const viewFile = function (ctx) {
  const fpath = path.join(__dirname, '../', ctx.path)
  const ext = path.extname(ctx.path) // 取得副檔名
  ctx.type = ext // 設定傳回型態為《副檔名》對應的型態。
  ctx.body = fs.createReadStream(fpath) // 直接傳回該檔案串流
}

const home = function (ctx) {
  ctx.redirect('/public/index.html')
}

router
  .get('/', home) // 首頁
  .post('/user/signup', User.signup) // 註冊
  .post('/user/login', User.login) // 登入
  .post('/user/logout', User.logout) // 登出
  .post('/shop/create', Shop.create) // 開店
  .post('/shop/read', Shop.read) // 商店列表
  .post('/order/create', Order.create) // 訂購商品
  .post('/order/read', Order.read) // 商店訂單報表
  .get('/public/(.*)', viewFile)
