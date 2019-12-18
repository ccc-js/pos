const M = module.exports = {}
const db = require('./db6')

// 連接並打開資料庫
M.open = async function () {
  const r = await db.open('pos')
  await db.index('user', { name: 1 })
  await db.index('shop', { name: 1 })
  await db.index('order', { 'shop.name': 1, 'user.name': 1 })
  return r
}

// 關閉資料庫
M.close = async function () {
  return db.close()
}

// 清除所有資料
M.clear = async function () {
  await db.clear('user')
  await db.clear('shop')
  await db.clear('order')
}

// 新增
M.create = async function (table, record) {
  const r = await db.insertOne(table, record)
  return r.insertedCount === 1
}

// 修改
M.update = async function (table, query, record) {
  const r = await db.updateOne(table, query, record)
  return r.updatedCount === 1
}

// 查詢
M.read = async function (table, query, opt = {}) {
  const r = await db.find(table, query)
  if (opt.skip != null) r.skip(opt.skip)
  if (opt.limit != null) r.limit(opt.limit)
  const rlist = await r.toArray()
  return rlist
}

// 刪除
M.delete = async function (table, query) {
  const r = await db.deleteMany(table, query)
  return r.deletedCount === 1
}
