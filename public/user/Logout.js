const Logout = {}

Logout.html = `
  <p class="msg" id="msg"></p>
`

Logout.start = function () {
  fe6.show(Logout.html)
}

Logout.submit = async function () {
  const msg = fe6.one('#msg')
  if (loginUser == null) {
    msg.innerHTML = '您尚未登入！'
    return
  }
  msg.innerHTML = '登出中！'
  const r = await fe6.postJson('/user/logout', { name: loginUser.name })
  if (r.ok) {
    msg.innerHTML = '登出成功！'
    loginUser = null
  }
  return false
}