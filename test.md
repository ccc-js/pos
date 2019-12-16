## POS 系統目前測試結果

```
PS C:\Users\Austin\Desktop\__Pos__> npm run test

> pos@0.0.1 test C:\Users\Austin\Desktop\__Pos__
> mocha test/**/*.js --timeout 15000



  購買者 Buyer
    購買流程測試
  <-- POST /order/create
  --> POST /order/create 400 45ms 47b
      √ 未登入就訂購產品，應該失敗！ (73ms)
  <-- POST /user/signup
  --> POST /user/signup 200 21ms 3b
      √ 註冊成功
  <-- POST /user/login
  --> POST /user/login 200 8ms 3b
      √ 登入成功
  <-- POST /order/create
  --> POST /order/create 200 17ms 2b
      √ 購買物品成功

  商店經營者 Owner
    開店流程測試
  <-- POST /user/signup
  --> POST /user/signup 200 21ms 3b
      √ 註冊成功
  <-- POST /user/login
  --> POST /user/login 200 16ms 3b
      √ 登入成功
  <-- POST /shop/create
  --> POST /shop/create 200 4ms 424b
      √ 創建店面成功！
  <-- POST /shop/read
  --> POST /shop/read 200 5ms 480b
      √ 查詢商店成功
  <-- POST /order/create
  --> POST /order/create 200 4ms 2b
      √ 自己先購買物品成功
  <-- POST /order/read
  --> POST /order/read 200 5ms 391b
      √ 查詢訂單成功

  使用者
    申請帳號流程測試
  <-- POST /user/signup
  --> POST /user/signup 200 28ms 3b
      √ 第一次註冊成功 (38ms)
  <-- POST /user/signup
  --> POST /user/signup 400 3ms 25b
      √ 重複註冊會失敗
  <-- POST /user/login
  --> POST /user/login 200 6ms 3b
      √ 正確帳號密碼 => 登入成功
  <-- POST /user/login
  --> POST /user/login 400 11ms 18b
      √ 錯誤帳號密碼 => 登入失敗


  14 passing (7s)
```