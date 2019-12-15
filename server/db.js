// Db -- 所有資料庫存取都透過此模組。
const Db = module.exports = {}
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
const url = 'mongodb://localhost:27017'
const dbName = 'pos'

Db.open = async function () {
  Db.client = await MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
  Db.db = await Db.client.db(dbName)
}

Db.close = async function () {
  await Db.client.close()
}

Db.insertOne = async function (table, obj) {
  return await Db.db.collection(table).insertOne(obj)
}

Db.deleteMany = async function (table, query) {
  return await Db.db.collection(table).deleteMany(query)
}

Db.findOne = async function (table, query) {
  return await Db.db.collection(table).findOne(query)
}

Db.find = async function (table, query) {
  return await Db.db.collection(table).find(query)
}
