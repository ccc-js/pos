// MVC 的 C: Controller = Router -- 處理任務委派事宜。
const router = module.exports = require('koa-router')()
const User = require('./user')
const Shop = require('./shop')
const Market = require('./market')

router
  .post('/user/signup', User.signup) // 註冊
  .post('/user/login', User.login) // 登入
  .post('/user/logout', User.logout) // 登出
  .post('/shop/create', Shop.create) // 開店
  .post('/shop/setting', Shop.setting) // 設定: 可自訂商店產品
  .post('/shop/order', Shop.order) // 訂購商品
  .post('/shop/report', Shop.report) // 商店訂單報表
  .get('/market/shopList', Market.shopList) // 開店
  .get('/market/search', Market.shopSearch) // 搜尋店面
