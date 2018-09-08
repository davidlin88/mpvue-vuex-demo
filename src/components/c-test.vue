<template>
    <div class="c-test">
        组件传入的props为：<br>
        {{date}}
    </div>
</template>

<script>
import cTest from '@/components/c-test'
    export default {
        props:{
            date:{
                type:String,
                default:''
            }
        },
        data() {
            return {
            }
        },

        components: {
        },

        methods: {
        },

        created() {

        }
    }
</script>

<style>
</style>