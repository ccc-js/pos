const Db = {}

Db.load = async function (path) {
  let json = localStorage.getItem(path)
  if (json == null) return
  return JSON.parse(json)
}
Db.read = async function(path) {
  const id = path.split('.')[1]
  console.log(id)
  const query =  { id : id }
  const r = await fe6.postJson(`/${path.split('.')[0].toLowerCase()}/read`, query)
  const json = await r.json()
  return JSON.parse(json)
}

Db.save = async function (path, obj) {
  localStorage.setItem(path, JSON.stringify(obj))
}
Db.create = async function(path, obj) {
  const r = await fe6.postJson(`/${path.split('.')[0].toLowerCase()}/create`, obj)
}

Db.insert = function (path, obj) {
  let id = Lib.uuid()
  obj.id = id
  Db.save(path +'.' + id, obj)
}

Db.remove = function (path, obj) {
  localStorage.removeItem(path + '.' + obj.id)
}

Db.loadAll = function (path) {
  let list = []
  for (let key in localStorage) {
    if (key.startsWith(path)) {
      let obj = Db.load(key)
      list.push(obj)
    }
  }
  return list
}
Db.readAll = async function (path) {
  let list = []
  const r = await fe6.postJson(`/${path.split('.')[0].toLowerCase()}/read`)
  const json = await r.json()
  for (let obj of json) {
    if (obj != null) {
      list.push(obj)
    }
  }
  return list
}

Db.sortBy = async function (list, arg) {
  return list.sort((o1, o2) => o1[arg.sortBy] < o2[arg.sortBy])
}

Db.query = async function (path, arg) {
  let list = await Db.readAll(path)
  return await Db.sortBy(list, arg)
}
