export default {
    data() {
        return {

        }
    },
    methods: {
        toGoods(id) {
            wx.navigateTo({
                url: '/pages/goods/goods',
            })
        }
    }
}