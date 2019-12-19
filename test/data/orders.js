const order1 = {
  user: 'ccc',
  shop: 'Snoopy之家',
  items: [
    { item: { name: '養狗一日', price: 200 }, addon: { name: '含過夜', price: 100 }, price: 300 }
  ],
  total: 400
}

const order2 = {
  user: 'ccc',
  shop: '茶舖子',
  items: [
    { item: { name: '紅茶', price: 20 }, addon: { name: '加鮮奶', price: 10 }, price: 30 },
    { item: { name: '珍珠奶茶', price: 35 }, addon: { name: '', price: 0 }, price: 35 }
  ],
  total: 65
}

module.exports = [order1, order2]
