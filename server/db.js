// Db -- 所有資料庫存取都透過此模組。
const Db = (module.exports = {})
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017'

var db, client

Db.open = async function (dbName) {
  client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  db = client.db(dbName)
}

Db.close = async function () {
  await client.close()
}

Db.insertOne = async function (table, obj) {
  return db.collection(table).insertOne(obj)
}

Db.deleteMany = async function (table, query) {
  return db.collection(table).deleteMany(query)
}

Db.findOne = async function (table, query) {
  return db.collection(table).findOne(query)
}

Db.find = async function (table, query) {
  return db.collection(table).find(query)
}
