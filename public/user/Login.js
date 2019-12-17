const Login = {}

var loginUser = null

Login.html = `
<div>
  <p class="msg" id="msg">&nbsp;</p>
  <p>
    <label>帳號</label><br/>
    <input id="loginName" type="text" value="">
  </p>
  <p>
    <label>密碼</label><br/>
    <input id="loginPassword" type="password" value="">
  </p>
  <button onclick="Login.submit()">登入</button>
</div>
`

Login.start = function () {
  Ui.show(Login.html)
}

Login.submit = async function () {
  const name = Ui.one('#loginName').value
  const password = Ui.one('#loginPassword').value
  const user = { name: name, password: password }
  const r = await window.fetch('/user/login', {
    body: JSON.stringify(user),
    method: 'POST'
  })
  Ui.one('#msg').innerHTML = r.ok ? '登入成功！' : '登入失敗！'
  if (r.ok) loginUser = user
  return false
}
