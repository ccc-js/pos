const M = module.exports = require('./db')

M.clear = async function () {
  await M.db.collection('user').deleteMany({})
  await M.db.collection('shop').deleteMany({})
  await M.db.collection('order').deleteMany({})
}

M.create = async function (table, record) {
  let r = await M.db.collection(table).insertOne(record)
  return r.insertCount == 1
}

M.update = async function (table, record) {
  let r = await M.db.collection(table).updateOne(record)
  return r.updateCount == 1
}

M.read = async function (table, id) {
  let r = await M.db.collection(table).findOne({_id: id})
  return r
}

M.delete = async function (table, id) {
  let r = await M.db.collection(table).deleteOne({_id: id})
  return r.deleteCount == 1
}

M.list = async function (table, query) {
  let r = await M.db.collection(table).find(query)
  let rlist = await r.toArray()
  return rlist
}
