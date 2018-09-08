<template>
  <div>子页面，传入的消息为：{{msg}}
  </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:''
            }
        },

        components: {},

        methods: {

        },
        onLoad(){ // query需要在onLoad周期内获取
            let query = this.$route.query;
            console.log(query);

            this.msg = query.msg;
        },

        created() {}
    }
</script>

<style scoped>
</style>