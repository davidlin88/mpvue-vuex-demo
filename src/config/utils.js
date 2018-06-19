// 工具函数库

// 时间戳转日期
export const toDate = function(timeStamp) {
    // console.log('转为日期')
    var date = new Date(timeStamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    // console.log(date);
    var Y = date.getFullYear() + '.';
    var M = (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    return Y + M + D
}