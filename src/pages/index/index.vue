<template>
    <div>首页</div>
</template>

<script>
    import {
        getBanner,
        getClassify,
        getGuess,
        getRecommend
    } from '@/http/api'
    var App = getApp();
    export default {
        data() {
            return {
                bannerList: [],
                classifyList: [],
                guessList:[],
                recommendList: []
            }
        },

        components: {},

        methods: {

        },

        created() {
            console.log('index的vue实例',this.$stroe)
            let openId = this.$store.openId;
            // 获取banner
            getBanner().then(res => {
                if (res.data.code === 200) {
                    this.bannerList = res.data.data;
                }
            }).catch(err => {
                console.error(err);
            })

            // 获取分类
            getClassify().then(res => {
                if (res.data.code === 200) {
                    this.classifyList = res.data.data;
                }
            }).catch(err => {
                console.error(err);
            })

            // 获取分类
            getGuess().then(res => {
                if (res.data.code === 200) {
                    this.guessList = res.data.data;
                }
            }).catch(err => {
                console.error(err);
            })

            // 获取推荐
            getRecommend({
                wxUser: openId
            }).then(res => {
                if (res.data.code === 200) {
                    this.recommendList = res.data.data;
                }
            }).catch(err => {
                console.error(err);
            })
        }
    }
</script>

<style scoped>
</style>