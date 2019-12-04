const User = module.exports = {}
const M = require('./model')

User.signup = async function(ctx) {
  console.log('ctx.request=', ctx.request)
  console.log('ctx.request.body=', ctx.request.body)
  const user = ctx.request.body
  // 加了下列兩行，會導致測試錯誤！"after all" hook:     Uncaught Error: expected 200 "OK", got 500 "Internal Server Error"
  let dbUser = await M.findOne('users', {uid:user.uid})
  console.log('dbUser=', dbUser)
  
  console.log('user=', user)
  let r = await M.insertOne('users', user)
  /*
  let dbUser = await db.findOne({uid:user.uid})
  console.log('dbUser=', dbUser)
  if (dbUser.)
  user.signup_at = new Date()
  let r = await users.insertOne(user)
  user._id = r.insertedId
  ctx.status = 200
  */
  // ctx.type = 'application/json'
  ctx.status = 200
  // ctx.body = r // { user: user, op: 'signup', result:'success!' }
  ctx.body = 'OK!'
}

User.login = async function(ctx) {
  /*
  let user = ctx.request.user
  let dbUser = await users.findOne({uid:user.uid})
  console.log('dbUser=dbUser')
  return dbUser
  */
}

User.logout = async function(ctx) {

}
