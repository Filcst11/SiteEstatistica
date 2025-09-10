const express = require('express')
const app = express()
const mustache = require('mustache-express')

app.engine('html',mustache())
app.set('view engine','html')
app.set('views',__dirname+'/views')

app.get('/', function(req, res){
    res.send('página inicial')
})
app.get('/ola', function(req, res){
    res.send('olá mundo')
})

const PORT = 8080
app.listen(PORT,function(){
    console.log('app rodando na porta: ' + PORT)
})