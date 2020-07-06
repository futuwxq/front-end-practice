// 使用 common JS导入模块
const math = require('./mathUtil')
    // 使用 es6 的模板
import { name, age } from "./infor"

console.log('conmmon js');
console.log(math.add(5, 2));
console.log(math.sub(5, 2));
console.log('ES6')
console.log(name);
console.log(age);