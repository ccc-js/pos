const Setting = {}

Setting.html = `
<table>
  <thead><tr><th>欄位</th><th>內容</th></tr></thead>
  <tbody>
    <tr><td>商店名稱</td><td><input id="shopName" type="text" value=""/></td></tr>
    <tr><td>地址</td><td><input id="shopAddress" type="text" value=""/></td></tr>
    <tr><td>電話</td><td><input id="shopTel" type="text" value=""/></td></tr>
    <tr><td>產品清單</td><td><textarea id="items"></textarea></td></tr>
    <tr><td>附加選項</td><td><textarea id="addons"></textarea></td></tr>
    <tr><td>交貨選項</td>
      <td>
        <input id="comeToShop" type="checkbox">來店自取 / 
        <input id="mailToYou"  type="checkbox">宅配寄送 / 
        <input id="goForYou"   type="checkbox">派人到府
      </td>
    </tr>
  </tbody>
</table>
<br/>
<button onclick="Setting.save()">儲存設定</button>
<button onclick="ShopMain.start()">回主選單</button>
`

Setting.start = function () {
  fe6.show(Setting.html)
  fe6.one('#shopName').value = Shop.name
  fe6.one('#shopAddress').value = Shop.address
  fe6.one('#shopTel').value = Shop.tel
  fe6.one('#items').value = JSON.stringify(Shop.items, null, 2)
  fe6.one('#addons').value = JSON.stringify(Shop.addons, null, 2)
  fe6.one('#comeToShop').checked = Shop.isComeToShop
  fe6.one('#mailToYou').checked = Shop.isMailToYou
  fe6.one('#goForYou').checked = Shop.isGoForYou
}

Setting.save = function () {
  try {
    Shop.name = fe6.one('#shopName').value
    Shop.address = fe6.one('#shopAddress').value
    Shop.tel = fe6.one('#shopTel').value
    Shop.items = JSON.parse(fe6.one('#items').value)
    Shop.addons = JSON.parse(fe6.one('#addons').value)
    Shop.isComeToShop = fe6.one('#comeToShop').checked
    Shop.isMailToYou = fe6.one('#mailToYou').checked
    Shop.isGoForYou = fe6.one('#goForYou').checked
  } catch (error) {
    alert('儲存失敗，請檢查格式是否有錯！\n', error)
    return
  }
  Db.save('Shop', Shop)
  fe6.one('#title').innerHTML = Shop.name
  alert('儲存成功！')
}
