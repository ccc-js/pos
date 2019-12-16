const LogIn = {}

LogIn.html = `
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
<form>
  <label for="username">使用者名稱:</label>
  <input type="text" id="username"
    required="required" /></title><br />
  <label for="password">使用者密碼:</label>
  <input type="password" id="password"
    required="required" />
  <button onclick="LogIn.submit()">登入</button>
</form>
`

LogIn.show = function () {
  Ui.show(LogIn.html)
}

LogIn.submit = function () {
  const uri = '/user/login'
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify({
      name: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
