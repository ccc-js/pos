//引入
var Koa = require('koa');
var Router = require('koa-router')
//實例化
var app = new Koa();
var router = new Router();

const views = require('koa-views');
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')

app.use(static('.'));

app.use(bodyParser());

//ctx  => context 包含 request 與 reponse 等訊息
//中間件
app
	.use(router.routes())//啟動路由
	.use(router.allowedMethods())
	.use(static('.'));

//連接實例化後的數據庫
var DB = require('./module/db.js')
//配置路由
router.get('/', async(ctx)=>{

	
	//var result = await DB.insert('user', {user:"CCC", password:"123"});
	//var result = await DB.insert('user', {user:"austin", password:"362667"});
	//var result = await DB.remove('user', {user:"admin", password:"admin"});

	//print all user_list
	var result = await DB.find('user', {});
	console.log(result);
	//ctx.redirect('/')
	//ctx.body = '首頁';/*返回數據*/
	ctx.render('./index')
})



//獲取get傳直
router.get('/news', async(ctx)=>{

	//從ctx獲取get傳直，兩種 query, querystring

	//console.log(ctx.query)
	console.log(ctx.query.aid)

	ctx.body = '最新消息' + ctx.query.aid;/*返回數據*/

})



// 回傳登入表單的路由頁面
router.get('/login', async(ctx)=>{
    ctx.response.body = 
    `
      <form action="/user" method="post">
        <input name="name" type="text" placeholder="請輸入用戶名：admin"/> 
        <br/>
        <input name="pwd" type="text" placeholder="請輸入密碼：admin"/>
        <br/> 
        <button>登入</button>
      </form>
    `
})

// 回傳註冊表單的路由頁面
router.get('/signup', async(ctx)=>{
    ctx.response.body = 
    `
      <form action="/user_s" method="post">
        <input name="name" type="text" placeholder="請輸入用戶名"/> 
        <br/>
        <input name="pwd" type="text" placeholder="請輸入密碼"/>
        <br/> 
        <button>註冊</button>
      </form>
    `
})


// 響應登入表單請求的路由
router.post('/user', async(ctx)=>{

	let {name, pwd} = ctx.request.body;
	console.log("input = ", name, pwd);

	var result = await DB.find('user', {user:name});
	console.log(result);
	try{	

		if(pwd == result[0].password){

		ctx.body = 'Welcom ' + name + '!';
		console.log('Login success, welcome back ', name);


		}
	}catch{

		ctx.body = '帳號或密碼錯誤! 請註冊。';
		console.log('Login failed..');

	}

})

// 響應註冊表單請求的路由
router.post('/user_s', async(ctx)=>{

	let {name, pwd} = ctx.request.body;
	console.log("input = ", name, pwd);

	var result = await DB.insert('user', {user:name, password:pwd});
	console.log(result);

	ctx.body = '註冊完成! 請登入。';
	console.log('Signup success..');


})

app.listen(3000);