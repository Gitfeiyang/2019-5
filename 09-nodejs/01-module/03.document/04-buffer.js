//一个二进制的0 或者 1 代表了 1bit(位)
//8bit(位) = 1B(字节) = 2个16进制数
//1个英文字符 =1B
//1个汉字 =3B
const buf1 = Buffer.from('z')
console.log(buf1)
//1kb = 1024B
//1MB = 1024kb
//1GB = 1024MB
//1TB = 1024GB
const buf2 =Buffer.from('林俊杰')
console.log(buf2)

const buf3 =Buffer.from('10')
console.log(buf3) 	

buf3[0] = 0x5a;
buf3[2] = 0x9a;
buf3[1] = 0x9b;

console.log(buf3)