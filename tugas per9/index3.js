var express= require('express')

var app=express()

app.get('/',function(req,res){res.send('helloworld!')})
app.post('/',function(req,res){res.send('ini post request!')})
app.put('/',function(req,res){res.send('put request dijalankan!')})
app.delet('/',function(req,res){res.send('delet request pada suatu user!')})
 

app.use(express.static('public'));

app.listen(3000)
