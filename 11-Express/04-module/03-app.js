const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('always do something...')
	next()
})
// /users/123/books/456
// /users/userId/book/bookId
app.get('/users/:userId/books/:bookId',(req,res)=>{
	console.log(req.params)
	res.send('get data response')
})
app.get('/',(req,res)=>{
	console.log(req.query)
	res.send('get data response')
})
app.listen(3000,() => console.log('Example app listening on part 3000!'))