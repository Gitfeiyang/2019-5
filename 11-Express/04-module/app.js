const express = require('express');
const app = express()
//get =>127.0.0.1:3000/
app.use(express.static('public'))

app.get('/user',(req,res)=>res.send('get user response'))
app.post('/user',(req,res)=>res.send('post user response'))
app.put('/user',(req,res)=>res.send('put user response'))
app.delete('/user',(req,res)=>res.send('delete user response'))


app.get('/blog',(req,res)=>res.send('get blog response'))
app.post('/blog',(req,res)=>res.send('post blog response'))
app.put('/blog',(req,res)=>res.send('put blog response'))
app.delete('/blog',(req,res)=>res.send('delete blog response'))

app.listen(3000,() => console.log('Example app listening on part 3000!'))