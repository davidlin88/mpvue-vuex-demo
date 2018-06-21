import Vue from 'vue'
import App from './App'
import store from './store/index'
import Tips from './common/js/tips'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store;
Vue.prototype.$tips = Tips;

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['^pages/index/main','pages/all/main','pages/shopCar/main','pages/me/main'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#ea5149',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            selectedColor: '#EA5149',
            list: [
                {
                    pagePath: 'pages/index/main',
                    text: '精选',
                    iconPath: 'static/img/me.png',
                    selectedIconPath: 'static/img/me-active.png'
                },
                {
                    pagePath: 'pages/all/main',
                    text: '全部商品',
                    iconPath: 'static/img/me.png',
                    selectedIconPath: 'static/img/me-active.png'
                }, {
                    pagePath: 'pages/shopCar/main',
                    text: '购物车',
                    iconPath: 'static/img/me.png',
                    selectedIconPath: 'static/img/me-active.png'
                }, {
                    pagePath: 'pages/me/main',
                    text: '个人中心',
                    iconPath: 'static/img/me.png',
                    selectedIconPath: 'static/img/me-active.png'
                }
            ]
        }
    }
}