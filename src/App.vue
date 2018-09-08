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

<style>
</style>