const MongoClient = require('mongodb').MongoClient;
const url = "127.0.0.1:27017";

const client = new MongoClient(url,{ useUnifiedTopology :true})

client.connect(err =>{
	if(err){
		console.log('connect db error')
	}
	console.log('connect db success')
	client.close();
})