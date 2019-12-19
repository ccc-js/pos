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

Db.clear = async function (table) {
  await db.collection(table).deleteMany({})
}

Db.index = async function (table, fields) {
  await db.collection(table).createIndex(fields)
}

// MongoDB 內建操作簡化版
Db.insertOne = async function (table, obj) {
  return db.collection(table).insertOne(obj)
}

Db.insertMany = async function (table, list) {
  return db.collection(table).insertMany(list)
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
