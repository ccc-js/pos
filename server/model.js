const M = module.exports = {}
const db = require('./db')

M.open = async function () {
  return db.open()
}

M.close = async function () {
  return db.close()
}

M.clear = async function () {
  await db.deleteMany('user', {})
  await db.deleteMany('shop', {})
  await db.deleteMany('order', {})
}

M.create = async function (table, record) {
  let r = await db.insertOne(table, record)
  return r.insertCount == 1
}

M.update = async function (table, query, record) {
  let r = await db.updateOne(table, query, record)
  return r.updateCount == 1
}

M.read = async function (table, query) {
  let r = await db.find(table, query)
  let rlist = await r.toArray()
  return rlist
}

M.delete = async function (table, query) {
  let r = await db.deleteMany(table, query)
  return r.deleteCount == 1
}

/*
M.list = async function (table, query) {
  let r = await db.collection(table).find(query)
  let rlist = await r.toArray()
  return rlist
}
*/