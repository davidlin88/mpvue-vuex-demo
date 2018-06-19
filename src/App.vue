<script>
    import config from './config'
    import { mapState, mapMutations } from 'vuex'
    import { SET_OPEN_ID } from './store/mutation-types'
    const App = getApp();
    export default {
        data: {
            globalData: {
                loginUrl: 'https://xxx.com/mini/login'
            }
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
            login() {
                let _this = this;
                wx.login({
                    success: function (res) {
                        console.log('wx.login成功res', res);
                        if (res.code) {
                            let code = res.code;
                            // 登录后台，获取openId
                            wx.request({
                                url: _this.globalData.loginUrl,
                                method: 'GET',
                                data: {
                                    appid: config.appid,
                                    code: code,
                                    appKey: config.appKey
                                },
                                success: function (res) {
                                    // if (res.data.code === 200) {
                                    //     _this.setOpenId(res.data.data.openId);
                                    // } else {
                                    //     wx.showModal({
                                    //         title: '提示',
                                    //         content: res.data.message,
                                    //         showCancel: false
                                    //     })
                                    // }
                                    _this.setOpenId('openId')
                                    console.log('假装设置openId',_this.openId);
                                },
                                fail: err => {
                                    wx.showToast({
                                        title: err
                                    })
                                }
                            })
                        } else {
                            console.log('获取用户登录态失败！' + res.errMsg)
                        }
                    },
                    fail: err => {

                    }
                });
            }
        },
        created() {
            this.login()
        }
    }
</script>

<style>
</style>