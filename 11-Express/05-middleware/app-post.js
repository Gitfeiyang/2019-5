const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:false }))

app.use(bodyParser.json())


app.get('/',(req,res)=>{
	// var body='';
	// req.on('data',(chunk)=>{
	// 	body+=chunk;
	// })
	// req.on('end',()=>{
	// 	console.log(body)
	// })
	console.log(body)
	res.send('Post the data of user...')
})
