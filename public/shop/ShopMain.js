const ShopMain = {}

ShopMain.html = `
<div>
  <button class="big" onclick="fe6.go('pos')">新增訂單</button><br/><br/>
  <button class="big" onclick="fe6.go('todayReport')">本日報表</button><br/><br/>
  <button class="big" onclick="fe6.go('report')">全部報表</button><br/><br/>
  <button class="big" onclick="fe6.go('setting')">商店設定</button><br/><br/>
</div>
`

ShopMain.leftMenuHtml = `
<a href="#about">關於 LaPos</a>
<a href="#announce">商店公告</a>
<a href="#map">商店地圖</a>
<a href="#message">發訊息給商店</a>
<a href="#help">使用說明</a>
<a href="#license">軟體授權</a>
`

ShopMain.start = function () {
  Shop = Db.load('Shop') || Shop
  Ui.show(ShopMain.html)
  Ui.title(Shop.name)
  fe6.html('#leftMenu', ShopMain.leftMenuHtml)
}

ShopMain.todayReport = function () {
  Report.start({range: Lib.dayRange(new Date())})
}
