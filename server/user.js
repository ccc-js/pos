const User = module.exports = {}
const M = require('./model')

User.signup = async function (ctx) {
  const user = ctx.request.body
  const dbUsers = await M.read('user', {
    name: user.name
  })
  if (dbUsers.length === 0) { // 該使用者不存在，可以註冊
    await M.create('user', user)
    ctx.status = 200
    ctx.body = 'OK!'
  } else { // 該使用者已經存在，註冊失敗！
    ctx.status = 400
    ctx.body = 'Error: User already exist'
  }
}

User.login = async function (ctx) {
  const user = ctx.request.body
  const dbUsers = await M.read('user', {
    name: user.name
  })
  if (dbUsers.length === 1 && dbUsers[0].password === user.password) { // 帳號密碼正確，登入成功！
    ctx.status = 200
    ctx.body = 'OK!'
    ctx.session.user = {
      name: user.name
    }
  } else { // 帳號密碼錯誤，登入失敗！
    ctx.status = 400
    ctx.body = 'Error: login fail!'
  }
}

User.logout = async function (ctx) {
  delete ctx.session.user
  ctx.status = 200
  ctx.body = 'OK!'
}
