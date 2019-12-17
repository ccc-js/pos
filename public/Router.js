const Router = {
  map: {
    '': () => Router.go('home'),
    home: () => Home.start(),
    signup: () => Signup.start(),
    login: () => Login.start(),
    logout: () => Logout.start(),
    myarea: () => MyArea.start(),
    shop: () => ShopMain.start(),
    pos: () => Pos.start(),
    todayReport: () => ShopMain.todayReport(),
    report: () => Report.start(),
    setting: () => Setting.start(),
  }
}

window.onhashchange = async function () {
  const hash = window.location.hash.substring(1)
  const handler = Router.map[hash]
  console.log('onhashchange:hash = ', hash)
  if (handler != null) handler(hash)
}

window.onload = function () {
  window.onhashchange()
}

Router.go = function (hash) {
  window.location.hash = hash
}
