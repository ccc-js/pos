## POS 系統目前測試結果

```
PS D:\ccc\code\js\pos> mocha test/server/FullStory.js


  POS 使用者
(node:7448) DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
    註冊
  <-- POST /user/signup
  --> POST /user/signup 200 127ms 3b
      √ signup: 註冊新帳戶，應該成功！ (201ms)
  <-- POST /user/signup
  --> POST /user/signup 400 12ms 25b
      √ signup: 註冊第二次，應該失敗！
  <-- POST /user/signup
  --> POST /user/signup 200 9ms 3b
      √ signup: ccc 註冊新帳戶，應該成功！
    登入
  <-- POST /user/login
  --> POST /user/login 400 7ms 18b
      √ login: 已註冊使用者登入錯誤帳號密碼，應該失敗！
  <-- POST /user/login
  --> POST /user/login 200 17ms 3b
      √ login: 已註冊使用者登入正確帳號密碼，應該成功！
    開店
  <-- POST /shop/create
  --> POST /shop/create 200 16ms 38b
      √ shop/create: 已註冊使用者創建店面，應該成功！
    訂購
  <-- POST /order/create
  --> POST /order/create 200 9ms 38b
      √ order/create 已登入使用者訂購產品，應該成功！
    登出
  <-- POST /user/login
  --> POST /user/login 400 6ms 18b
      √ logout : 已登入後登出應該會成功！


  8 passing (2s)
```