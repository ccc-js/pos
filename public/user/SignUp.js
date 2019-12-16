const SignUp = {}

SignUp.html = `
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
<form>
  <label for="username">使用者名稱:</label>
  <input type="text" id="username"
    required="required" /></title><br />
  <label for="password">使用者密碼:</label>
  <input type="password" id="password"
    required="required" />
  <button onclick="SignUp.submit()">註冊</button>
</form>
`

SignUp.show = function () {
  Ui.show(SignUp.html)
}

SignUp.submit = function () {
  const uri = 'http://localhost:3000/user/signup'
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
