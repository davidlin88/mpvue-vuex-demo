### 源码
[mpvue-vuex-demo](https://github.com/davidlin88/mpvue-vuex-demo)
### 构成
1、采用mpvue 官方脚手架搭建项目底层结构

2、采用Fly.js 作为http请求库

3、引入[mpvue-router-patach](https://github.com/F-loat/mpvue-router-patch)，以便在mpvue小程序中能使用vue-router的写法

### 目录结构
```
├── src // 我们的项目的源码编写文件
│ ├── components // 组件目录
│ ├── common //静态资源
│ │ └── font // iconfont图标
│ │ └── img // 图片
│ │ └── js // js
│ │ │└──  mixins.js // js
│ │ │└──  tips.js // js
│ │ │└──  utils.js // js
│ │ └── scss // scss样式
│ │ │└──  base.scss // 自定义样式
│ │ │└──  icon.scss // iconfont图标
│ │ │└──  index.scss // 基础汇总
│ │ │└──  mixin.scss // 混合等工具样式
│ │ │└──  reset.scss // 初始化样式
│ │ │└──  variable.scss // 全局主题色样式
│ ├── http //http请求配置文件
│ │ └── api // 接口调用文件
│ │ └── config //fly 配置文件
│ ├── pages //项目页面目录
│ ├── components //项目复用组件目录
│ ├── store //状态管理 vuex配置目录
│ │ └── actions.js //actions异步修改状态
│ │ └── getters.js //getters计算过滤操作
│ │ └── mutation-types.js //mutations 类型
│ │ └── mutations.js //修改状态
│ │ └── index.js //我们组装模块并导出 store 的地方
│ │ └── state.js //数据源定义
│ ├── untils //工具函数目录
│ │ └── index.js
│ ├── App.vue // APP入口文件
│ ├── main.js // 主配置文件
│ ├── config.js // host等配置
```
### 快速创建一个mpvue项目
```
# 全局安装 vue-cli
$ npm install -g vue-cli
 
# 创建一个基于 mpvue-quickstart 模板的新项目，记得选择安装vuex
$ vue init mpvue/mpvue-quickstart mpvue-demo
 
# 安装fly
$ npm i flyio --save
 
# 安装依赖
$ cd mpvue-demo
$ npm i
# 启动构建
$ npm run dev
```
### 配置fly
1、配置公共设置
`src/http/config.js`
```
/*
    fly配置文件
    by:David 2018.6.14
*/
//引入 fly
var Fly = require("flyio/dist/npm/wx")
var fly = new Fly;
import config from '@/config'
//配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
fly.config.timeout = 20000;
// //设置请求基地址
fly.config.baseURL = config.host

//添加请求拦截器
fly.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    request.headers["X-Tag"] = "flyio";
    //打印出请求体
    // console.log(request.body)
    //终止请求
    //var err=new Error("xxx")
    //err.request=request
    //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)
// Vue.prototype.$http=fly //将fly实例挂在vue原型上

export default fly
```
2、配置个性设置
`src/http/api.js`
```
import fly from './config'
import qs from 'qs'

import config from '../config'
const host = config.host;
const appKey = config.appKey;
const appid = config.appid;

/**
 * 接口模版====post
 *
 * export const test = params => {return fly.post(`${root}/xx/xx`, qs.stringify(params))};
 *
 * 接口模版====get
 *
 * export const test1 = function(){return fly.get(`${root}/api/getNewsList`)}
 *
 *
 * 用法：
 * 在 页面用引入 test
 * import {test} from '../../http/api.js'
 *
 * test(params).then(res=>{ console.log(res) })
 */

// 通用的get请求
export const get = (params) => {
    return fly.get(`${host}${params.url}`, qs.stringify(params.data))
};

// 通用的post请求
export const post = (params) => {
    return fly.post(`${host}${params.url}`, qs.stringify(params.data))
};
// 封装的登录请求，根据后台接收方式选择是否加qs.stringify
export const login = params => {
    return fly.post('/login', params)
};


```
host配置
`config.js`
```
const host = 'http://xxx.xxx';
const appid = '';
const appKey = '';
const config = {
	host,
	appid,
    appKey,
}
export default config
```
### 配置vuex
1、目录结构
```
│ ├── store      //状态管理 vuex配置目录
│ │  └── actions.js    //actions异步修改状态
│ │  └── getters.js    //getters计算过滤操作
│ │  └── mutation-types.js    //mutations 类型
│ │  └── mutations.js    //修改状态
│ │  └── index.js    //我们组装模块并导出 store 的地方
│ │  └── state.js    //数据源定义
```
2、`main.js`中引入store, 并绑定到Vue构造函数的原型上，这样在每个vue的组件都可以通过`this.$store`访问store对象。
```
import store from './store/index'
Vue.prototype.$store=store;
```
3、定义初始变量`store/state.js`
```
const state={
 openId: '',
}
export default state
```
4、mutation类型
方便检测错误和书写，一般写方法
```
export const SET_OPEN_ID = 'SET_OPEN_ID'
```
5、`store/mutations.js`
写处理方法
```
import * as types from './mutation-types'
const matations={
	 /**
	  * state:当前状态树
	  * v: 提交matations时传的参数
	  */
	 [types.SET_OPEN_ID] (state, v) {
		 state.openId = v;
	 },
 
}
 
export default matations
```
6、`store/index.js`
汇总配置
```
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
 
Vue.use(Vuex);
 
export default new Vuex.Store({
	state,
	mutations,
})
```
### 使用vuex
ps:没有用到复杂计算，因此没有引入`getters.js`和`actions.js`
栗子：`App.vue`
```
 <script>
    import { login } from '@/http/api'
    import { mapState, mapMutations } from 'vuex'
    import { SET_OPEN_ID } from './store/mutation-types'
    const App = getApp();
    export default {
        data: {
            globalData: {}
        },
        computed: {
            ...mapState([
                'openId'
            ])
        },
        methods: {
            ...mapMutations({
                setOpenId: 'SET_OPEN_ID'
            }),
            // 使用了async+await的语法，用同步的方式写异步脚本
            async login(code) {
                let _this = this;
                try {
                    const resData = await login({ code: code });
                    if (resData.returnCode == 200) {
                        _this.setOpenId(resData.data.accountId)
                    }
                } catch (err) {
                    console.error(err);
                }

            },
            // 拆分wx.login，结构更清晰
            _login() {
                let _this = this;
                wx.login({
                    success(res) {
                        if (res.code) {
                            console.log('wx.login成功,code:', res.code);
                            let code = res.code;
                            _this.login(code)
                        } else {
                            _this.$tips.toast('微信登录失败')
                        }
                    }
                });
            }
        },
        onLaunch() {
            this._login()
        }
    }
</script>
```
### 使用`vuex-persistedstate`，使vuex状态持久化（缓存到本地）
`store/index.hs`的`export default`中添加配置：
```
// 引入vuex-persistedstate，将vuex的数据持久化到本地
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => wx.getStorageSync(key),
                setItem: (key, value) => wx.setStorageSync(key, value),
                removeItem: key => {}
            }
        })
    ]
})
```
### Tips
1、遇到安装依赖后，运行项目，但dist下没有app.js等入口文件的，将package.json里的mpvue-loader的版本前的^去掉，删除依赖，重新安装即可

2、几个tabbar的图标没有上传，自行选择喜欢的图标哦~

**源码在我的github上，链接在文章开头**
*如有帮助，欢迎star，不胜感激~*

**欢迎加入vue学习交流填坑q群：585472963，群很活跃，氛围很好~**
