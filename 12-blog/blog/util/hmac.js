const crypto = require('crypto')

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512','safhasfhaslfalskffashfjkasf')
	//加密数据
	hmac.update("12345")
	//生成加密后的数据
	return hmac.digest('hex')
}