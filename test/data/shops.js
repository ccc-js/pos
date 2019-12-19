const snoopyHome = {
  owner: 'snoopy',
  name: 'Snoopy之家',
  tel: '082-333777',
  address: '金門縣金寧鄉安美村湖南 33 號',
  products: [
    { name: '養狗一日', price: 200 },
    { name: '養貓一日', price: 100 }
  ],
  addons: [
    { name: '不含過夜', price: 0 },
    { name: '含過夜', price: 100 }
  ]
}

const teaHouse = {
  owner: 'teaMan',
  name: '茶舖子',
  address: '金門縣金寧鄉安美村湖南 39 號',
  tel: '082-333333',
  items: { 紅茶: 20, 綠茶: 20, 珍珠奶茶: 35 },
  addons: { '': 0, 去冰: 0, 半糖: 0, 熱: 0, 加鮮奶: 10 },
  isComeToShop: true,
  isMailToYou: false,
  isGoForYou: false
}

module.exports = [snoopyHome, teaHouse]
