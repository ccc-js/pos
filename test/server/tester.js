const T = module.exports = {}

T.ok = require('assert').ok
T.app = require('../../server/app')

T.server = T.app.listen(3001)
T.request = require('supertest').agent(T.server)

T.start = async function () {
  await T.app.start()
}

T.clear = async function () {
  await T.app.clear()
}

T.stop = async function () {
  await T.server.close()
  await T.app.stop()
}

T.post = function (path, status, obj) {
  return T.request.post(path).send(obj).expect(status)
}

T.get = function (path, status) {
  return T.request.get(path).expect(status)
}

T.asObj = function (r) {
  return JSON.parse(r.text)
}
