const Signup = {}

Signup.html = `
<div>
  <h1>Signup</h1>
  <p>
    <label>帳號</label><br/>
    <input id="name" type="text" value="">
  </p>
  <p>
    <label>密碼</label><br/>
    <input id="password" type="password" value="">
  </p>
  <button onclick="Signup.submit()">註冊</button>
  <p class="msg" id="msg">&nbsp;</p>
</div>
`

Signup.start = function () {
  fe6.show(Signup.html)
}

Signup.submit = async function () {
  const name = fe6.one('#name').value
  const password = fe6.one('#password').value
  const user = { name: name, password: password }
  const r = await fe6.postJson('/user/signup', user)
  fe6.one('#msg').innerHTML = r.ok ? '註冊成功！' : '註冊失敗！'
  return false
}
