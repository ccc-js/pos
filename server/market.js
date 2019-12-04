// Market 商場 -- 有很多商店，可以搜尋後下訂單。
const Market = module.exports = {}
const M = require('./model')

Market.shopSearch = async function(ctx) {

}

Market.shopList = async function(ctx) {
  ctx.body = [{name: '狗狗之家', owner:'snoopy'}, {name:'貓咪的窩', owner:'garfield'}]
}
