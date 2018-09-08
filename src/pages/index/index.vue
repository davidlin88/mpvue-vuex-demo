<template>
    <div class="main">
        <input type="text" placeholder="填入你想传至hello页的信息" v-model.lazy="msg">
        <button @click="toChild">去hello页面</button>
        <c-test :date="date">子组件</c-test>
    </div>
</template>

<script>
import cTest from '@/components/c-test'
    export default {
        data() {
            return {
                msg:'',
                date:''
            }
        },

        components: {
            cTest
        },

        methods: {
            toChild(){
                let msg = this.msg;
                // 引入了mpvue-router-patch依赖，兼容vue-router的写法，让写法更“vue”，以及为转换h5做铺垫
                this.$router.push({path:'/pages/hello/main',query:{msg}})
            }
        },
        onLoad(){
            this.date = new Date;
        },

        created() {

        }
    }
</script>

<style scoped lang="scss">
    .main {
    }
</style>