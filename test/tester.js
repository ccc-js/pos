const T = module.exports = {}

T.ok = require('assert').ok
T.app = require('../server/app')
T.server = T.app.listen(3000)
T.request = require('supertest').agent(T.server)
T.throwIfError = (err, res) => { if (err) throw err }

T.start = async function() {
  return await T.app.start()
}

T.stop = async function () {
  await T.server.close();
  await T.app.stop()
}
