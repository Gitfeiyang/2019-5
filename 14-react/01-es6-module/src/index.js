//多次导入同一个文件只执行一次
// import './Module.js'
// import './Module.js'
//写法一
// import {a,b} from './Module.js'
// console.log('a = ',a)
// console.log('b = ',b)

//写法二
// import { a,b } from './Module.js'
// console.log('a = ',a)
// console.log('b = ',b)

//写法三
// import { a as aa,b as bb } from './Module.js'
// console.log('a = ',aa)
// console.log('b = ',bb)
// 写法四
// import { a1,b2 } from './Module.js'
// console.log('a = ',a1)
// console.log('b = ',b2)
// 写法五
// import a from './Module.js'
// console.log('a = ',a)

console.log('here is a file')
