const Login = {}

var loginUser = null

Login.html = `
<div>
  <h1>Login</h1>
  <p>
    <label>帳號</label><br/>
    <input id="name" type="text" value="">
  </p>
  <p>
    <label>密碼</label><br/>
    <input id="password" type="password" value="">
  </p>
  <button onclick="Login.submit()">登入</button>
  <p class="msg" id="msg">&nbsp;</p>
</div>
`

Login.start = function () {
  fe6.show(Login.html)
}

Login.submit = async function () {
  const name = fe6.one('#name').value
  const password = fe6.one('#password').value
  const user = { name: name, password: password }
  const r = await fe6.postJson('/user/login', user)
  fe6.one('#msg').innerHTML = r.ok ? '登入成功！' : '登入失敗！'
  if (r.ok) loginUser = user
  return false
}
