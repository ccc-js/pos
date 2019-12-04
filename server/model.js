// MVC 的 M: Model -- 所有資料庫存取都透過此模組。
const M = module.exports = {}
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
const url = 'mongodb://localhost:27017'
const dbName = 'pos'

M.open = async function () {
  M.client = await MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
  M.db = await M.client.db(dbName)
  M.users = await M.db.collection('users')
  M.shops = await M.db.collection('shops')
}

M.clear = async function () {
  await M.users.drop()
  await M.shops.drop()
}

M.close = async function () {
  await M.client.close()
}

M.insertOne = async function (table, obj) {
  return await M.db.collection(table).insertOne(obj)
}

M.findOne = async function (table, query) {
  return await M.db.collection(table).findOne(query)
}

M.find = async function (table, query) {
  return await M.db.collection(table).find(query)
}

/*

M.add = async function (post) {
  post.created_at = new Date()
  let r = await posts.insertOne(post)
  post._id = r.insertedId
 return post
}

M.get = async function (id) {
  let post = await posts.findOne({_id:new ObjectID(id)})
  // console.log('get: post=', post)
  return post
}

M.list = async function () {
  var postList = await posts.find({}).sort({ created_at: -1 }).toArray()
  // console.log('postList = ', postList)
  return postList
}
*/