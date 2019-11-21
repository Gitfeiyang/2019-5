const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))
app.use('/',(req,res,next)=>{
	console.log('do something for TaskA')
	next()
})
app.use('/',(req,res,next)=>{
	console.log('do something for TaskB')
	next()
})
app.get('/',(req,res)=>res.send('get response'))
app.post('/',(req,res)=>res.send('post response'))
app.put('/',(req,res)=>res.send('put response'))
app.delete('/',(req,res)=>res.send('delete response'))

app.listen(3000,() => console.log('Example app listening on part 3000!'))