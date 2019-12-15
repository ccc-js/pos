const User = module.exports = {}
const M = require('./model')

User.signup = async function(ctx) {
  const user = ctx.request.body
  let dbUser = await M.read('user', user._id)
  if (dbUser == null) { // 該使用者不存在，可以註冊
    let r = await M.create('user', user)
    ctx.status = 200
    ctx.body = 'OK!'
  } else { // 該使用者已經存在，註冊失敗！
    ctx.status = 400
    ctx.body = 'Error: User already exist'
  }
}

User.login = async function(ctx) {
  const user = ctx.request.body
  let dbUser = await M.read('user', user._id)
  if (dbUser != null && dbUser.password === user.password) { // 帳號密碼正確，登入成功！
    ctx.status = 200
    ctx.body = 'OK!'
    ctx.session.user = {_id:user._id}
  } else { // 帳號密碼錯誤，登入失敗！
    ctx.status = 400
    ctx.body = 'Error: login fail!'
  }
}

User.logout = async function(ctx) {
  delete ctx.session.user
  ctx.status = 200
  ctx.body = 'OK!'
}
