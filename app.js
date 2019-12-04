//引入
var Koa = require('koa');
var Router = require('koa-router')
//實例化
var app = new Koa();
var router = new Router();

const static = require('koa-static')
const bodyParser = require('koa-bodyparser')


//ctx  => context 包含 request 與 reponse 等訊息

//配置路由
router.get('/', async(ctx)=>{

	//ctx.redirect('/')
	ctx.body = '首頁';/*返回數據*/
})



//獲取get傳直
router.get('/news', async(ctx)=>{

	//從ctx獲取get傳直，兩種 query, querystring

	//console.log(ctx.query)
	console.log(ctx.query.aid)

	ctx.body = '最新消息' + ctx.query.aid;/*返回數據*/

})

app.use(bodyParser());

// 回傳表單頁面的路由
router.get('/login', async(ctx)=>{
    ctx.response.body = 
    `
      <form action="/user" method="post">
        <input name="name" type="text" placeholder="請輸入用戶名：admin"/> 
        <br/>
        <input name="password" type="text" placeholder="請輸入密碼：admin"/>
        <br/> 
        <button>Go</button>
      </form>
    `
})


// 響應表單請求的路由
router.post('/user',async(ctx)=>{

    console.log(ctx.request.body)
    let {name, password} = ctx.request.body
    if( name === 'admin' && password === 'admin' ){
      ctx.body = `Hello， ${name}！`
    }else{
      ctx.body = '帳號或密碼錯誤'
    }
  })


//中間件
app
	.use(router.routes())//啟動路由
	.use(router.allowedMethods())
	.use(static('.'));



app.listen(3000);