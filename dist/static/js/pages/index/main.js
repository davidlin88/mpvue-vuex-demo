global.webpackJsonp([2],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(46);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d53d50b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d53d50b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d53d50b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d53d50b", Component.options)
  } else {
    hotAPI.reload("data-v-0d53d50b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_api__ = __webpack_require__(49);
//
//
//
//


var App = getApp();
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            bannerList: [],
            classifyList: [],
            guessList: [],
            recommendList: []
        };
    },


    components: {},

    methods: {},

    created: function created() {
        var _this = this;

        console.log('index的vue实例', this.$stroe);
        var openId = this.$store.openId;
        // 获取banner
        Object(__WEBPACK_IMPORTED_MODULE_0__http_api__["a" /* getBanner */])().then(function (res) {
            if (res.data.code === 200) {
                _this.bannerList = res.data.data;
            }
        }).catch(function (err) {
            console.error(err);
        });

        // 获取分类
        Object(__WEBPACK_IMPORTED_MODULE_0__http_api__["b" /* getClassify */])().then(function (res) {
            if (res.data.code === 200) {
                _this.classifyList = res.data.data;
            }
        }).catch(function (err) {
            console.error(err);
        });

        // 获取分类
        Object(__WEBPACK_IMPORTED_MODULE_0__http_api__["c" /* getGuess */])().then(function (res) {
            if (res.data.code === 200) {
                _this.guessList = res.data.data;
            }
        }).catch(function (err) {
            console.error(err);
        });

        // 获取推荐
        Object(__WEBPACK_IMPORTED_MODULE_0__http_api__["d" /* getRecommend */])({
            wxUser: openId
        }).then(function (res) {
            if (res.data.code === 200) {
                _this.recommendList = res.data.data;
            }
        }).catch(function (err) {
            console.error(err);
        });
    }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export get */
/* unused harmony export post */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getClassify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getGuess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRecommend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(4);
/*
    接口配调用文件
    by:David 2018.6.14
*/




var host = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].host;
var appKey = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].appKey;
var appid = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].appid;

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

// export const test = params => {
//     return fly.post(`${host}/xx/xx`, qs.stringify(params))
// };

// 通用的get请求
var get = function get(params) {
    return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].get('' + host + params.url, __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(params.data));
};

// 通用的post请求
var post = function post(params) {
    return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].post('' + host + params.url, __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(params.data));
};

// 获取banner列表
var getBanner = function getBanner() {
    return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].get(host + '/mini/banner/list?appKey=' + appKey);
};

// 获取店铺优惠券
var getClassify = function getClassify() {
    return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].get(host + '/mini/banner/list?appKey=' + appKey);
};

// 获取猜你喜欢
var getGuess = function getGuess() {
    return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].get(host + '/mini/banner/list?appKey=' + appKey);
};

// 获取推荐列表
var getRecommend = function getRecommend() {
    return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].get(host + '/mini/banner/list?appKey=' + appKey);
};

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
    fly配置文件
    by:David 2018.6.14
*/
//引入 fly
var Fly = __webpack_require__(51);
var fly = new Fly();

//配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
// fly.config.timeout=10000;
// //设置请求基地址
// fly.config.baseURL="https://wendux.github.io/"

//添加请求拦截器
fly.interceptors.request.use(function (request) {
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
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
    //只将请求结果的data字段返回
    return response.data;
}, function (err) {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
});
// Vue.prototype.$http=fly //将fly实例挂在vue原型上

/* harmony default export */ __webpack_exports__["a"] = (fly);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("首页")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d53d50b", esExports)
  }
}

/***/ })

},[45]);
//# sourceMappingURL=main.js.map