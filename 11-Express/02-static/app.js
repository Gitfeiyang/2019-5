const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))

app.get('/',(req,res)=>res.$end('hello world!'))

app.listen(3000,() => console.log('Example app listening on part 3000!'))