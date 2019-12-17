const Logout = {}

Logout.html = `
  <p class="msg" id="msg"></p>
`

Logout.start = function () {
  Ui.show(Logout.html)
}

Logout.submit = async function () {
  const msg = Ui.one('#msg')
  if (loginUser == null) {
    msg.innerHTML = '您尚未登入！'
    return
  }
  msg.innerHTML = '登出中！'
  const r = await window.fetch('/user/logout', {
    body: JSON.stringify({ name: loginUser.name }),
    method: 'POST'
  })
  if (r.ok) {
    msg.innerHTML = '登出成功！'
    loginUser = null
  }
  return false
}