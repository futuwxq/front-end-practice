function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}
// 使用common js 导出模块
module.exports = {
    add,
    sub
}