const M = module.exports = {}
const db = require('./db')

// 連接並打開資料庫
M.open = async function () {
  return db.open('pos')
}

// 關閉資料庫
M.close = async function () {
  return db.close()
}

// 清除所有資料
M.clear = async function () {
  await db.deleteMany('user', {})
  await db.deleteMany('shop', {})
  await db.deleteMany('order', {})
}

// 新增
M.create = async function (table, record) {
  let r = await db.insertOne(table, record)
  return r.insertCount === 1
}

// 修改
M.update = async function (table, query, record) {
  let r = await db.updateOne(table, query, record)
  return r.updateCount === 1
}

// 查詢
M.read = async function (table, query, opt) {
  let r = await db.find(table, query)
  if (opt.skip != null) r.skip(opt.skip)
  if (opt.limit != null) r.limit(opt.limit)
  let rlist = await r.toArray()
  return rlist
}

// 刪除
M.delete = async function (table, query) {
  let r = await db.deleteMany(table, query)
  return r.deleteCount === 1
}
