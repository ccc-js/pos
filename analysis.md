# 家庭商店 Pos 系統

## 物件

* User -- 使用者: 創建帳號後可以購物或開店。
* Shop -- 商店: 使用者創建商店後可以賣東西或服務。
* Order -- 訂單: 使用者向商店訂購物品。
* Model -- MVC 的 M: 資料庫存取者
* Router -- MVC 的 C: 控制路由轉發
* View -- MVC 的 V: 目前使用 koa-json 丟給前端，沒有獨立物件。

## 功能點 Function Point

* 註冊 User.signup
* 登入 User.login
* 登出 User.logout
* 開店 Shop.create
* 店面清單 Shop.list
* 訂購 Order.create
* 報表 Order.list

## 使用個案 User Story

* [FullStory.js](test/server/FullStory.js)
