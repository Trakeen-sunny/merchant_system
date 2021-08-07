function add0(m) {
    return m < 10 ? '0' + m : m
}
export const getLocalTime = function format(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}
// 今天
export const getTodayDate = function getTodayDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return year+"-"+add0(month)+"-"+add0(day)+" 00:00:00"
}

// 最近时间
export const getSevenDate = function getTodayDate(n){
    let date = new Date();
    date.setTime(date.getTime() - 24*60*60*1000*n)
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return year+"-"+add0(month)+"-"+add0(day)+" 23:59:59"
}