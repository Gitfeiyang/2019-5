const timer1 = setTimeout(function(){
	console.log('t1')
},0)
	console.log('after t1 ')
setInterval(function(){
	console.log('t2')
},100)
	console.log('after t2')
setImmediate(function(){
	console.log('t3')
},200)
	console.log('after t3')