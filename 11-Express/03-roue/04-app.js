const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('always do something...')
	next()
})
app.get('/', (req,res) => {
	// res.end('hello world')
	// res.end('<h1>hello world</h1>')
	// res.end('{name:"tom"}')
	// res.json({
		// name:"tom"
	// })
	// res.send('hello world')
	// res.send('<h1>hello world</h1>')
	 res.send({name:"tom"})
})
app.listen(3000,() => console.log('Example app listening on part 3000!'))