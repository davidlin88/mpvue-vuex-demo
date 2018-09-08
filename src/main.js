import Vue from 'vue'
import App from './App'
import store from './store/index'
import Tips from './common/js/tips'
import MpvueRouterPatch from 'mpvue-router-patch' // 兼容vue-router写法

Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store;
Vue.prototype.$tips = Tips; // 全局注册Tips

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['^pages/index/main', 'pages/me/main','pages/hello/main' ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#ea5149',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            selectedColor: '#000',
            list: [
            {
                pagePath: 'pages/index/main',
                text: '主页',
                iconPath: 'static/img/pkq.png',
                selectedIconPath: 'static/img/pkq-active.png'
            },
            {
                pagePath: 'pages/me/main',
                text: '个人',
                iconPath: 'static/img/jlq.png',
                selectedIconPath: 'static/img/jlq-active.png'
            }]
        }
    }
}