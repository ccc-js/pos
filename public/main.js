fe6.router({
  '': () => fe6.go('home'),
  home: () => Home.start(),
  signup: () => Signup.start(),
  login: () => Login.start(),
  logout: () => { Logout.start(); Logout.submit() },
  myarea: () => MyArea.start(),
  shop: () => ShopMain.start(),
  pos: () => Pos.start(),
  todayReport: () => ShopMain.todayReport(),
  report: () => Report.start(),
  setting: () => Setting.start(),
})
