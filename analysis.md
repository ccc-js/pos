# 家庭商店 Pos 系統

## 物件

* User -- 使用者: 創建帳號後可以購物或開店。
* Shop -- 商店: 使用者創建商店後可以賣東西或服務。
* Market -- 商場: 有很多商店，可以搜尋後下訂單。
* Model -- MVC 的 M: 資料庫存取者
* Router -- MVC 的 C: 控制路由轉發
* View -- MVC 的 V: 目前使用 koa-json 丟給前端，沒有獨立物件。

## 功能點 Function Point

* 註冊 User.signup
* 登入 User.login
* 登出 User.logout
* 開店 Shop.create
* 設定 Shop.setting (可自訂商店產品)
* 訂購 Shop.order
* 報表 Shop.report
* 店面清單 Market.shopList
* 搜尋店面 Market.shopSearch

## 使用個案 User Story

* [UserTest.js](test/server/UserTest.js) -- 使用者註冊帳號，然後登入。
* [ShopCreater.js](test/server/ShopCreater.js) -- 經營者創立商店 (ccc, 20191204)
* [ShopEmployee.js](test/server/ShopEmployee.js) -- 商店自己輸入訂單
* [MarketSearch.js](test/server/MarketSearch.js) -- 選擇區域後查詢該區域的商店列表。
* [Buyer.js](test/server/Buyer.js) -- 購物者搜尋商店，然後訂購物品
* [MobileBuyer.js](test/server/MobileBuyer.js) -- 使用手機尋找附近商店
