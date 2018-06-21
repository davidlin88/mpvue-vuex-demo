global.webpackJsonp([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_OPEN_ID; });
// 方便书写和检测
var SET_OPEN_ID = 'SET_OPEN_ID';

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 配置
var host = 'https://www.xxx.com'; // 生产
var appid = '';
var appKey = '';

var config = {
    host: host,
    appid: appid,
    appKey: appKey
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_js_tips__ = __webpack_require__(74);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$tips = __WEBPACK_IMPORTED_MODULE_3__common_js_tips__["a" /* default */];

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['^pages/index/main', 'pages/all/main', 'pages/shopCar/main', 'pages/me/main'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#ea5149',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            selectedColor: '#EA5149',
            list: [{
                pagePath: 'pages/index/main',
                text: '精选',
                iconPath: 'static/img/me.png',
                selectedIconPath: 'static/img/me-active.png'
            }, {
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
            }]
        }
    }
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b87327d", Component.options)
  } else {
    hotAPI.reload("data-v-4b87327d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__ = __webpack_require__(23);





var App = getApp();
/* harmony default export */ __webpack_exports__["a"] = ({
    data: {
        globalData: {
            loginUrl: 'https://xxx.com/mini/login'
        }
    },
    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapState */])(['openId'])),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapMutations */])({
        setOpenId: 'SET_OPEN_ID'
    }), {
        login: function login() {
            var _this = this;
            wx.login({
                success: function success(res) {
                    console.log('wx.login成功res', res);
                    if (res.code) {
                        var code = res.code;
                        // 登录后台，获取openId
                        wx.request({
                            url: _this.globalData.loginUrl,
                            method: 'GET',
                            data: {
                                appid: __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].appid,
                                code: code,
                                appKey: __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].appKey
                            },
                            success: function success(res) {
                                // if (res.data.code === 200) {
                                //     _this.setOpenId(res.data.data.openId);
                                // } else {
                                //     wx.showModal({
                                //         title: '提示',
                                //         content: res.data.message,
                                //         showCancel: false
                                //     })
                                // }
                                _this.setOpenId('openId');
                                console.log('假装设置openId', _this.openId);
                            },
                            fail: function fail(err) {
                                wx.showToast({
                                    title: err
                                });
                            }
                        });
                    } else {
                        console.log('获取用户登录态失败！' + res.errMsg);
                    }
                },
                fail: function fail(err) {}
            });
        }
    }),
    created: function created() {
        this.login();
    }
});

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getters__ = __webpack_require__(73);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 引入vuex-persistedstate，将vuex的数据持久化到本地
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: __WEBPACK_IMPORTED_MODULE_3__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_4__mutations__["a" /* default */],
    getters: __WEBPACK_IMPORTED_MODULE_6__getters__["a" /* default */],
    actions: __WEBPACK_IMPORTED_MODULE_5__actions__["a" /* default */],
    plugins: [Object(__WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__["a" /* default */])({
        storage: {
            getItem: function getItem(key) {
                return wx.getStorageSync(key);
            },
            setItem: function setItem(key, value) {
                return wx.setStorageSync(key, value);
            },
            removeItem: function removeItem(key) {}
        }
    })]
}));

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//store为实例化生成的
var state = {
    openId: '初始openId'
};

/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(23);



var mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* SET_OPEN_ID */], function (state, v) {
    state.openId = v;
});

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(23);

// 进行涉及到多个全局变量的复杂计算

// export const setOpenId = ({ commit }, { id }) => {
//     commit(types.OPEN_ID, id)
// }
/* harmony default export */ __webpack_exports__["a"] = ({
    setOpenId: function setOpenId(_ref, _ref2) {
        var commit = _ref.commit;
        var id = _ref2.id;
        return commit(openId, id);
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 用gettter取数据到组件里,是数据的映射

// // getter可充当计算属性
// export const currentSong = (state) => {
//     return state.playlist[state.currentIndex] || {}
// }
/* harmony default export */ __webpack_exports__["a"] = ({
    openId: function openId(state) {
        return state.openId;
    }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);




/**
 * 提示与加载工具类
 */
var Tips = function () {
    function Tips() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Tips);

        this.isLoading = false;
    }
    /**
     * 弹出提示框
     */

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Tips, null, [{
        key: "success",
        value: function success(title) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

            setTimeout(function () {
                wx.showToast({
                    title: title,
                    icon: "success",
                    mask: true,
                    duration: duration
                });
            }, 300);
            if (duration > 0) {
                return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, duration);
                });
            }
        }

        /**
         * 弹出确认窗口
         */

    }, {
        key: "confirm",
        value: function confirm(text) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "提示";
            var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: true,
                    success: function success(res) {
                        if (res.confirm) {
                            resolve(payload);
                        } else if (res.cancel) {
                            reject(payload);
                        }
                    },
                    fail: function fail(res) {
                        reject(payload);
                    }
                });
            });
        }

        /**
        * 普通提示窗口
        * icon有效值：success / loading / none
        */

    }, {
        key: "toast",
        value: function toast(title) {
            var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";

            setTimeout(function () {
                wx.showToast({
                    title: title,
                    icon: icon,
                    mask: true,
                    duration: 500
                });
            }, 300);
        }

        /**
         * 弹出加载提示
         */

    }, {
        key: "loading",
        value: function loading() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

            if (Tips.isLoading) {
                return;
            }
            Tips.isLoading = true;
            wx.showLoading({
                title: title,
                mask: true
            });
        }

        /**
         * 加载完毕
         */

    }, {
        key: "loaded",
        value: function loaded() {
            if (Tips.isLoading) {
                Tips.isLoading = false;
                wx.hideLoading();
            }
        }
    }, {
        key: "share",
        value: function share(title, url, desc) {
            return {
                title: title,
                path: url,
                desc: desc,
                success: function success(res) {
                    Tips.toast("分享成功");
                }
            };
        }
    }, {
        key: "alert",
        value: function alert(text) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "提示";
            var payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                wx.showModal({
                    title: title,
                    content: text,
                    showCancel: false,
                    success: function success(res) {
                        if (res.confirm) {
                            resolve(payload);
                        }
                    },
                    fail: function fail(res) {
                        reject(payload);
                    }
                });
            });
        }
    }]);

    return Tips;
}();

/**
 * 静态变量，是否加载中
 */


/* harmony default export */ __webpack_exports__["a"] = (Tips);
Tips.isLoading = false;

/***/ })

},[46]);
//# sourceMappingURL=app.js.map