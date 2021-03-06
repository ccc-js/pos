# POS 開發者須知

本專案將採用下列技術組合：

1. 採用 Web 2.0 模式，以 fetch API 作為前後端 AJAX 通訊方法
2. 採用 Koa 作為 Server 端框架，搭配 koa-session, koa-body, koa-router 等周邊模組。
3. 採用 MongoDB 作為資料庫
4. 使用 ES6 的 template string (模板字符串) 作為樣板引擎，不需另外安裝樣板引擎。
5. 使用 ES6 的語法，但不使用 import , export 等新語法，不使用 babel 去轉換語法，也不使用 vue.js, angular.js, react.js 等前端框架。
6. 使用 mocha + supertest + puppeteer 進行測試。 (TDD 視情況採用，不強求！)
7. 使用 standardjs 語法，採用《駝峰式變數命名 + 行末無分號》的寫法。
    * 可以安裝 https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs 檢查
    * 還必須用 npm i standard -g 安裝對應語法套件。
    * 可以安裝 https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode 自動排版。


## 檔案結構

```
/public      // 前端網頁
/server      // server 端程式碼
/test        // 測試程式
```

## 目前狀態

1. 目前《前端/後端》兩邊尚未連接起來
2. test 資料夾中的測試程式分三類
    * unit -- 單元測試
    * server -- 使用 supertest 進行 server 端程式碼測試
    * e2e -- 使用 puppeteer 模仿使用者在瀏覽器中的操作進行 e2e 測試

## Server API

1. 使用 CURD 操作命名 (但不使用 RESTful) ， 而且全部都用 POST 方法
    * C: Create, U: Update, R: Read, D: Delete
    * Read, Update, Delete 可加查詢參數, ex: read(query), 
2. 除了 CURD 之外，可以使用《動作》命名方式
    * 例如: User.login, User.signup, ...


## 資料庫

1. 表格名稱不加複數，例如:
    * 用 shop 而不是 shops