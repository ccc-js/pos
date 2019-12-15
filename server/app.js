// 伺服器主程式: 使用 MVC 架構。

const M = require('./model')
const router = require('./router')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const koaJson = require('koa-json')
const session = require('koa-session')
// const koaStatic = require('koa-json')

const Koa = require('koa')
const app = module.exports = new Koa()

app.keys = ['adfjjhvlkjafdjaf'];

const CONFIG = {
  key: 'ejkladsjflakfj', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000,
}

app.use(session(CONFIG, app))
app.use(logger())
app.use(koaBody())
app.use(koaJson())
app.use(router.routes())
// Koa-static 和 koa-router 不能搭配使用 -- https://github.com/ZijianHe/koa-router/issues/446
// app.use(koaStatic(__dirname + '/public'))

app.start = async function () { return await M.open() }
app.stop = async function () { return await M.close() }
app.clear = async function () { return await M.clear() } 

async function main() {
  await app.start()
  app.listen(3000)
  console.log('Server run at http://localhost:3000')
}

if (!module.parent) {
  main().catch(error=>console.log('error'))
}
