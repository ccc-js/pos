/* eslint-disable no-undef */
const Pos = {}

var Order = {}

Pos.html = `
<div>
  <table id="orderTable">
  <thead>
    <tr>
      <td><select id="items" onchange="Pos.calcPrice()"></select></td>
      <td><select id="addons" onchange="Pos.calcPrice()"></select></td>
      <td><input id="price" type="number" value="0"></td>
      <td>
        <input id="quantity" type="number" value="1">
        <button onclick="Pos.addItem()">新增</button>
      </td>
    </tr>
    <tr><th>商品</th><th>屬性</th><th>單價</th><th>數量</th></tr>
  </thead>
  <tbody id="orderTableBody">
    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
  </tbody>
  </table>
</div>
<br/>
<div style="width:500px">
  <label>總價:</label>
  <input id="totalPrice" type="number" value="0">
  <button id="goShop" onclick="Pos.goShop()">回主選單</button>
  <button id="newOrder" onclick="Pos.start()" disabled="disabled">新增下一筆</button>
  <button id="abort" onclick="Pos.abort()">放棄訂單</button>
  <button id="submit" onclick="Pos.submit()">送出訂單</button>
</div>
</div>
`

Pos.goShop = function () {
  if (!Order.submitted) {
    if (confirm('您的訂單尚未送出，請問是否要放棄該訂單？')) {
      ShopMain.start()
      return
    } else {
      return
    }
  }
  ShopMain.start()
}

Pos.abort = function () {
  if (confirm('確定要放棄本訂單？')) {
    Pos.start()
  }
}

Pos.start = function () {
  fe6.show(Pos.html)
  fe6.one('#items').innerHTML = Pos.optionList(Shop.items)
  fe6.one('#addons').innerHTML = Pos.optionList(Shop.addons)
  Order = Pos.newOrder()
  Pos.calcPrice()
}

Pos.newOrder = function () {
  return {totalPrice: 0, records: [], submitted: false}
}

Pos.submit = function () {
  if (Order.records.length === 0) {
    alert('您的訂單是空的，無法送出！')
    return
  }
  Order.time = Date.now()
  Order.submitted = true
  // Db.insert('Order', Order)
  Db.create('Order', Order)
  fe6.one('#submit').disabled = 'disabled'
  fe6.one('#submit').innerHTML = '已送出'
  fe6.one('#abort').disabled = 'disabled'
  fe6.one('#newOrder').disabled = ''
}

Pos.optionList = function (list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

Pos.list = function (records) {
  let list = []
  for (let i=0; i<records.length; i++) {
    let r = records[i]
    list.push(`<tr><td>${r.item}</td><td>${r.addon}</td><td class="number">${r.price}</td><td class="number">${r.quantity}</td></tr>`)
  }
  return list.join('\n')
}

Pos.calcPrice = function () {
  let [item, itemPrice] = fe6.one('#items').value.split(':')
  let [addon, addonPrice] = fe6.one('#addons').value.split(':')
  let price = parseInt(itemPrice) + parseInt(addonPrice)
  fe6.one('#price').value = price
  return {item, addon, price}
}

Pos.addItem = function () {
  let {item, addon, price} = Pos.calcPrice()
  let quantity = parseInt(fe6.one('#quantity').value)
  let record = {item: item, addon:addon, price: price, quantity: quantity}
  Order.records.push(record)
  fe6.one('#orderTableBody').innerHTML = Pos.list(Order.records)
  Order.totalPrice += price * quantity
  fe6.one('#totalPrice').value = Order.totalPrice
}
